import { test, expect } from '@playwright/test'

// Single smoke test; run only in firefox/webkit via --project selection
// Usage: npx playwright test tests/e2e/quiz-init-smoke.spec.js --project=firefox --project=webkit
test('quiz init smoke captures early errors', async ({ page }, testInfo) => {
  // Capture console for extra diagnostics
  const consoleMessages = []
  page.on('console', msg => consoleMessages.push({ type: msg.type(), text: msg.text() }))

  await page.goto('/')

  // Navigate to exam start page deterministically
  await page.getByTestId('nav-exams').click()
  await page.getByTestId('start-leading-safe-exams').click()

  // Sanity: exam settings visible
  await expect(page.getByTestId('leading-safe-exam-settings')).toBeVisible()

  // Start quiz
  await page.getByTestId('leading-safe-start-quiz').click()

  // Wait a short time for either loading or root
  const quizRoot = page.getByTestId('quiz-root')
  const quizLoading = page.getByTestId('quiz-loading')

  let sawElement = false
  await Promise.race([
    quizRoot.waitFor({ timeout: 4000 }).then(() => { sawElement = true }),
    quizLoading.waitFor({ timeout: 4000 }).then(() => { sawElement = true })
  ]).catch(() => {})

  // Pull diagnostics from localStorage
  const diagnostics = await page.evaluate(() => ({
    globalErrors: (window.__dumpGlobalErrors && window.__dumpGlobalErrors()) || [],
    quizInitError: (() => { try { return JSON.parse(localStorage.getItem('e2e.quizInitError') || 'null') } catch { return null } })(),
    logs: (() => { try { return JSON.parse(localStorage.getItem('e2e.logs') || '[]') } catch { return [] } })()
  }))

  // Attach artifacts for debugging
  await testInfo.attach('console.log', { body: JSON.stringify(consoleMessages, null, 2), contentType: 'application/json' })
  await testInfo.attach('quiz-init-diagnostics.json', { body: JSON.stringify(diagnostics, null, 2), contentType: 'application/json' })

  // Expectations: either quiz-root appears or, if not, there must be no silent errors
  if (!sawElement) {
    // Force failure with diagnostic details
    test.fail(true, 'Quiz did not initialize. Diagnostics: ' + JSON.stringify(diagnostics))
  }

  // If an init error was logged, surface it explicitly
  if (diagnostics.quizInitError) {
    test.fail(true, 'Quiz init error captured: ' + JSON.stringify(diagnostics.quizInitError))
  }

  // If global errors exist, record but don't necessarily fail unless root missing
  if (diagnostics.globalErrors.length > 0 && !sawElement) {
    test.fail(true, 'Global errors present with no quiz root: ' + JSON.stringify(diagnostics.globalErrors))
  }

  // Soft assertion for root presence
  if (await quizRoot.count()) {
    await expect(quizRoot).toBeVisible()
  }
})
