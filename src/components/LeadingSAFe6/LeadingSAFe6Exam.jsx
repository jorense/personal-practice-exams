import { useTheme } from '../../contexts/ThemeContext.jsx';
import styles from './LeadingSAFe6Exam.module.css'

function LeadingSAFe6Exam({ 
  onGoHome, 
  onGoToStudyMaterials, 
  onStartQuiz, 
  numberOfQuestions = 45,
  autoShowExplanation = false,
  onNumberOfQuestionsChange,
  onAutoShowExplanationChange,
  examMode = 'exam',
  onExamModeChange
}) {
  const { theme } = useTheme();

  // Calculate timer information based on question count
  const getTimerInfo = () => {
    if (numberOfQuestions <= 45) {
      return "90 minutes"
    } else if (numberOfQuestions <= 100) {
      return `${numberOfQuestions * 2} minutes`
    } else {
      return "Unlimited time"
    }
  }

  return (
    <div className={styles.examContainer}>
      <header className={styles.examHeader}>
        <div className={styles.brand}>
          <div className={styles.logo}>LACE Studio</div>
          <div className={styles.tagline}>Leading SAFe 6 Practice Exam</div>
        </div>
        <button className={styles.homeButton} onClick={onGoHome}>
          ← Back to Home
        </button>
      </header>

      <main className={styles.examContent}>
        <div className={styles.examInfo}>
          <h1>Leading SAFe 6.0: Scaled Agile Framework</h1>
          <p className={styles.examDescription}>
            Test your knowledge of the Scaled Agile Framework (SAFe) 6.0 and Lean-Agile leadership principles.
          </p>

          <div className={styles.examDetails}>
            <div className={styles.detailCard}>
              <h3>📝 Questions</h3>
              <p>{numberOfQuestions} practice questions</p>
            </div>
            <div className={styles.detailCard}>
              <h3>⏱️ Time Limit</h3>
              <p>{getTimerInfo()}</p>
            </div>
            <div className={styles.detailCard}>
              <h3>🎯 Passing Score</h3>
              <p>77% or higher</p>
            </div>
            <div className={styles.detailCard}>
              <h3>🔄 Retakes</h3>
              <p>Unlimited attempts</p>
            </div>
          </div>

          {/* Exam Settings Panel */}
          <div className={styles.examSettings}>
            <h2>⚙️ Exam Settings</h2>
            <div className={styles.settingsGrid}>
              <div className={styles.settingCard}>
                <h4>Number of Questions</h4>
                <select 
                  value={numberOfQuestions} 
                  onChange={(e) => onNumberOfQuestionsChange && onNumberOfQuestionsChange(Number(e.target.value))}
                  className={styles.settingSelect}
                >
                  <option value={10}>10 Questions</option>
                  <option value={20}>20 Questions</option>
                  <option value={40}>40 Questions</option>
                  <option value={45}>45 Questions (Default)</option>
                  <option value={50}>50 Questions</option>
                  <option value={100}>100 Questions</option>
                  <option value={200}>200 Questions (Complete Bank)</option>
                </select>
                <p className={styles.settingDescription}>
                  Choose how many questions you want to practice with
                </p>
              </div>
              <div className={styles.settingCard}>
                <h4>Exam Mode</h4>
                <select 
                  value={examMode} 
                  onChange={(e) => onExamModeChange && onExamModeChange(e.target.value)}
                  className={styles.settingSelect}
                >
                  <option value="exam">🎓 Exam Mode (Realistic Simulation)</option>
                  <option value="practice">📚 Practice Mode (Enhanced Learning)</option>
                </select>
                <p className={styles.settingDescription}>
                  {examMode === 'exam' 
                    ? 'Single-select questions only (matches real SAFe exam format)' 
                    : 'Mix of single-select (70%) and multi-select (30%) questions for deeper learning'}
                </p>
              </div>
              <div className={styles.settingCard}>
                <h4>Auto-Show Explanations</h4>
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    checked={autoShowExplanation}
                    onChange={(e) => onAutoShowExplanationChange && onAutoShowExplanationChange(e.target.checked)}
                    className={styles.settingCheckbox}
                  />
                  <span className={styles.checkboxText}>
                    Automatically show detailed explanations
                  </span>
                </label>
                <p className={styles.settingDescription}>
                  When enabled, explanations are shown automatically for each question
                </p>
              </div>
            </div>
          </div>

          <div className={styles.examDomains}>
            <h2>Exam Domains</h2>
            <div className={styles.domainsGrid}>
              <div className={styles.domainCard}>
                <h3>Applying SAFe Principles</h3>
                <p>Understanding and implementing the 10 SAFe principles in Lean-Agile environments</p>
                <span className={styles.domainWeight}>20%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Supporting Program Execution</h3>
                <p>Leading Program Increment planning, execution, and continuous improvement</p>
                <span className={styles.domainWeight}>19%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Supporting Team Execution</h3>
                <p>Coaching Agile teams and facilitating team events and processes</p>
                <span className={styles.domainWeight}>16%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Building High-Performing Teams</h3>
                <p>Developing Agile teams and fostering a culture of continuous learning</p>
                <span className={styles.domainWeight}>15%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Establishing Team Agility</h3>
                <p>Implementing Scrum, Kanban, and XP practices within SAFe</p>
                <span className={styles.domainWeight}>13%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Planning Program Increments</h3>
                <p>Facilitating PI planning events and managing dependencies</p>
                <span className={styles.domainWeight}>12%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Enabling Organizational Change</h3>
                <p>Leading transformation initiatives and organizational change management</p>
                <span className={styles.domainWeight}>5%</span>
              </div>
            </div>
          </div>

          <div className={styles.examActions}>
            <button 
              className={`${styles.actionButton} ${styles.primary}`}
              onClick={onStartQuiz}
            >
              🚀 Start Practice Exam
            </button>
            <button 
              className={`${styles.actionButton} ${styles.secondary}`}
              onClick={onGoToStudyMaterials}
            >
              📚 Study Materials
            </button>
          </div>

          <div className={styles.examTips}>
            <h2>Exam Tips</h2>
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>💡</span>
                <div>
                  <h4>Read Questions Carefully</h4>
                  <p>Take time to understand what each question is asking before selecting your answer.</p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>⏰</span>
                <div>
                  <h4>Manage Your Time</h4>
                  <p>
                    {numberOfQuestions <= 45 
                      ? `You have 90 minutes for ${numberOfQuestions} questions. This matches the real exam format.`
                      : numberOfQuestions <= 100 
                      ? `You have ${numberOfQuestions * 2} minutes for ${numberOfQuestions} questions (2 minutes per question).`
                      : `No time limit for ${numberOfQuestions} questions. Take your time to learn thoroughly.`
                    }
                  </p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>🎯</span>
                <div>
                  <h4>Focus on SAFe Principles</h4>
                  <p>Many questions test your understanding of the core SAFe principles and values.</p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>📖</span>
                <div>
                  <h4>Use Study Materials</h4>
                  <p>Review the study materials before taking the exam for better preparation.</p>
                </div>
              </div>
            </div>
          </div>

          {autoShowExplanation && (
            <div className={styles.settingsInfo}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>ℹ️</span>
                <div>
                  <h4>Auto-Explanation Enabled</h4>
                  <p>Detailed explanations will be automatically shown for each question during the exam.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default LeadingSAFe6Exam