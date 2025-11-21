const AB730Questions = [
  {
    id: 1,
    question: "How does Microsoft 365 Copilot keep your organization's information private and secure?",
    options: [
      "Copilot stores all conversations in a separate cloud database accessible only to administrators",
      "Copilot operates within Microsoft 365's security and compliance boundary, respecting existing permissions",
      "Copilot encrypts all data locally before sending any information to Microsoft servers",
      "Copilot requires users to manually approve each data access request before processing"
    ],
    correctAnswer: 1,
    explanation: "Microsoft 365 Copilot operates within your organization's existing security, compliance, and privacy boundaries. It respects all permissions and policies already in place, only accessing data that users already have permission to see. Data is not used to train foundation AI models.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 2,
    question: "What is the difference between a chat experience and an agent experience in Microsoft 365 Copilot?",
    options: [
      "Chat is for casual conversations while agents are for formal business communications only",
      "Chat provides general assistance while agents are specialized tools with specific capabilities and knowledge",
      "Chat requires internet connection while agents work completely offline",
      "Chat is available to all users while agents are restricted to administrators only"
    ],
    correctAnswer: 1,
    explanation: "A chat experience in Copilot provides general-purpose assistance for various tasks. An agent experience is a specialized tool configured with specific knowledge, capabilities, and instructions for particular use cases. Agents can be customized with domain-specific data and workflows.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 3,
    questionType: "multiple",
    selectCount: 3,
    question: "Which THREE are common risks associated with generative AI that you should be aware of? (Select exactly 3 answers)",
    options: [
      "Fabrications (hallucinations) - AI generating incorrect or made-up information",
      "Perfect accuracy - AI always providing 100% correct answers",
      "Prompt injection - malicious inputs designed to manipulate AI behavior",
      "Over-reliance - depending too heavily on AI without verification",
      "Automatic compliance - AI automatically ensuring regulatory compliance",
      "Universal knowledge - AI knowing everything about every topic"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Common AI risks include: Fabrications/hallucinations (false information), Prompt injection (security exploits), and Over-reliance (trusting AI without verification). AI is not perfect, doesn't automatically ensure compliance, and has knowledge limitations. Always verify critical information.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 4,
    question: "When should you perform citation checks on Copilot-generated content?",
    options: [
      "Only when the content appears obviously incorrect or suspicious",
      "For any content that will be used in formal documents, presentations, or decision-making",
      "Never, because Copilot always provides accurate information with built-in verification",
      "Only when sharing content outside your organization"
    ],
    correctAnswer: 1,
    explanation: "Citation checks should be performed for any content used in formal documents, presentations, or decision-making. This is a critical verification step to ensure accuracy and reliability. Even though Copilot is powerful, it can generate fabrications, so human review and verification are essential practices.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 5,
    question: "How can context affect Microsoft 365 Copilot's responses?",
    options: [
      "Context has no effect; Copilot provides the same responses regardless of the situation",
      "Context like work files, web data, and the app being used shapes and grounds Copilot's responses",
      "Context only matters when using Copilot in Outlook, not in other Microsoft 365 apps",
      "Context is manually provided by administrators and cannot be changed by users"
    ],
    correctAnswer: 1,
    explanation: "Context is crucial for Copilot's responses. It uses your work files, emails, calendar, chats, documents, web data, and the specific Microsoft 365 app you're using to provide relevant, grounded responses. This grounding helps reduce fabrications and increases relevance.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 6,
    question: "What is the purpose of creating your own custom agent in Microsoft 365 Copilot?",
    options: [
      "To replace Microsoft's Copilot with a completely independent AI system",
      "To create a specialized tool with specific knowledge and capabilities for particular business needs",
      "To gain administrative control over all users' Copilot conversations",
      "To bypass organizational security and compliance policies"
    ],
    correctAnswer: 1,
    explanation: "Custom agents are created to address specific business needs with specialized knowledge and capabilities. They can be configured with domain-specific data, instructions, and workflows. This allows organizations to extend Copilot's functionality for particular use cases while maintaining security and compliance.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 7,
    questionType: "multiple",
    selectCount: 2,
    question: "Which TWO steps are appropriate for mitigating risks to sensitive data when using Copilot? (Select exactly 2 answers)",
    options: [
      "Recognize and avoid including sensitive data in prompts",
      "Disable all data protection policies to improve Copilot performance",
      "Understand how data protection policies restrict Copilot's access to sensitive information",
      "Share all sensitive data openly to train Copilot better",
      "Bypass compliance settings to get more comprehensive responses"
    ],
    correctAnswers: [0, 2],
    explanation: "To protect sensitive data: (1) Recognize and avoid including sensitive information in prompts unnecessarily, and (2) Understand how your organization's data protection and compliance policies restrict Copilot's access to sensitive information. Never disable security controls or bypass compliance settings.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 8,
    question: "What are the key elements of creating an effective prompt in Microsoft 365 Copilot?",
    options: [
      "Use only single-word commands without any additional context or details",
      "Provide clear goals, context, expectations, and sources to guide Copilot's response",
      "Write prompts in programming language syntax for better accuracy",
      "Keep prompts as vague as possible to let Copilot decide what you need"
    ],
    correctAnswer: 1,
    explanation: "Effective prompts should include: clear goals (what you want), relevant context (background information), expectations (desired format/tone), and sources (specific files or data to reference). This framework helps Copilot provide more accurate and useful responses tailored to your needs.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 9,
    question: "How can you reference specific resources in a Microsoft 365 Copilot prompt?",
    options: [
      "You cannot reference specific files; Copilot automatically chooses what to use",
      "Use the @ symbol followed by the file, person, or meeting name to reference specific resources",
      "Provide the full file path in quotes for each resource you want to include",
      "Email all files to Copilot before creating your prompt"
    ],
    correctAnswer: 1,
    explanation: "Use the @ symbol (mention) to reference specific resources in your prompts. You can mention files (@filename), people (@person name), or meetings (@meeting name) to provide Copilot with specific context. This grounding makes responses more relevant and accurate.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 10,
    question: "What is the benefit of saving a prompt in Microsoft 365 Copilot?",
    options: [
      "Saved prompts are automatically shared with everyone in the organization",
      "You can reuse effective prompts for recurring tasks and share them with team members",
      "Saved prompts are encrypted and cannot be accessed by anyone else",
      "Saving prompts improves Copilot's global training data"
    ],
    correctAnswer: 1,
    explanation: "Saving prompts allows you to reuse successful prompt patterns for recurring tasks, improving efficiency and consistency. You can also share saved prompts with team members, enabling collaboration and best practice sharing. This doesn't affect Copilot's training data.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 11,
    questionType: "multiple",
    selectCount: 3,
    question: "Which THREE actions can you perform to manage conversations in Microsoft 365 Copilot? (Select exactly 3 answers)",
    options: [
      "Find and review previous conversations using search and history",
      "Delete conversations to remove sensitive or outdated chats",
      "Rename conversations for better organization and retrieval",
      "Transfer conversations to other users' accounts",
      "Publish conversations as public web pages",
      "Automatically translate all conversations to any language"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "You can manage Copilot conversations by: finding previous chats using search, deleting unwanted conversations, and renaming conversations for organization. You cannot transfer conversations to other users or publish them publicly. Translation may be available but isn't a primary conversation management feature.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 12,
    question: "When should you use the Agent Store versus creating a new custom agent?",
    options: [
      "Always create new agents; the Agent Store is only for administrators",
      "Use the Agent Store when existing agents meet your needs; create new agents for specific requirements",
      "The Agent Store and custom agents cannot coexist in the same organization",
      "Never use the Agent Store; custom agents are always more effective"
    ],
    correctAnswer: 1,
    explanation: "Use the Agent Store when pre-built agents already address your needs - this saves time and leverages proven solutions. Create custom agents when you have specific requirements, unique workflows, or domain-specific knowledge that existing agents don't cover.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 13,
    question: "What is the purpose of configuring an agent with knowledge in Microsoft 365 Copilot?",
    options: [
      "To restrict the agent from accessing any organizational data",
      "To provide the agent with specific information sources and documents for specialized responses",
      "To give the agent administrative privileges over Microsoft 365",
      "To enable the agent to modify and delete user files automatically"
    ],
    correctAnswer: 1,
    explanation: "Configuring an agent with knowledge means specifying particular information sources, documents, or SharePoint sites that the agent can reference. This grounds the agent's responses in specific, relevant content for specialized use cases while respecting security and permissions.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 14,
    questionType: "multiple",
    selectCount: 3,
    question: "Which THREE settings can you configure when creating a custom agent? (Select exactly 3 answers)",
    options: [
      "Instructions - defining how the agent should behave and respond",
      "User passwords - controlling who can access the agent",
      "Capabilities - enabling features like web search or file access",
      "Suggested prompts - providing example prompts to guide users",
      "Hardware specifications - allocating compute resources",
      "Programming language - choosing the agent's code implementation"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "When configuring agents, you can set: Instructions (behavior and tone), Capabilities (features like web search), and Suggested prompts (starter questions). You don't configure passwords, hardware specs, or programming languages - these are handled by the platform.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 15,
    question: "How can you share an agent with team members?",
    options: [
      "Agents cannot be shared; each user must create their own",
      "Use the agent's sharing options to grant access to specific people or groups",
      "Export the agent as a file and email it to team members",
      "Copy and paste the agent's configuration into a shared document"
    ],
    correctAnswer: 1,
    explanation: "Agents can be shared directly with specific people, groups, or your entire organization using built-in sharing options. This allows teams to collaborate using specialized agents without everyone needing to create and maintain their own versions.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 16,
    question: "What can you do with the 'Add to notebook' feature for Copilot conversations?",
    options: [
      "Convert conversations into OneNote notebooks for offline reference",
      "Save conversation content to a OneNote page for further work and organization",
      "Upload conversations to OneDrive as PDF files",
      "Publish conversations as Teams channel posts"
    ],
    correctAnswer: 1,
    explanation: "The 'Add to notebook' feature allows you to save Copilot conversation content directly to OneNote, where you can further organize, annotate, and reference it. This helps preserve valuable insights and integrate AI-generated content into your broader note-taking workflow.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 17,
    question: "When creating a new document from a prompt in Microsoft 365 Copilot, what happens?",
    options: [
      "Copilot creates a template that you must manually fill in with content",
      "Copilot generates a complete document based on your prompt in the appropriate Microsoft 365 app",
      "Copilot only creates document outlines, never full content",
      "Copilot searches the web and copies content into a new document"
    ],
    correctAnswer: 1,
    explanation: "When you create a document from a prompt, Copilot generates complete content based on your instructions in the appropriate app (Word, PowerPoint, etc.). The generated content is original, grounded in your context, and ready for review and editing.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Foundation"
  },
  {
    id: 18,
    questionType: "multiple",
    selectCount: 2,
    question: "Which TWO are valid ways to generate documents using Copilot? (Select exactly 2 answers)",
    options: [
      "Create a new document from scratch using a descriptive prompt",
      "Generate a document by transforming existing documents or files",
      "Automatically convert all emails in your inbox into documents",
      "Clone documents from other users' OneDrive accounts",
      "Generate documents by speaking to your computer's microphone only"
    ],
    correctAnswers: [0, 1],
    explanation: "Copilot can: (1) Create new documents from scratch based on prompts, and (2) Generate documents by referencing and transforming existing files (e.g., 'Create a report based on this spreadsheet'). It doesn't automatically convert emails or clone documents without permission.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 19,
    question: "What is a management summary generated by Copilot?",
    options: [
      "A list of all managers in the organization extracted from the company directory",
      "A concise overview of key points, decisions, and actions from a document or meeting",
      "An employee performance review generated automatically for managers",
      "A financial report showing management expenses and budgets"
    ],
    correctAnswer: 1,
    explanation: "A management summary is a concise overview that Copilot creates by analyzing a document or meeting, extracting key points, decisions, action items, and main themes. This helps busy professionals quickly understand important information without reading/watching everything.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Foundation"
  },
  {
    id: 20,
    question: "How does Copilot enable you to move data and insights between Microsoft 365 apps?",
    options: [
      "By manually copying and pasting content between applications",
      "By referencing data from one app while working in another (e.g., Excel data in Word)",
      "By creating duplicate files in each application",
      "By exporting everything to PDF format first"
    ],
    correctAnswer: 1,
    explanation: "Copilot can intelligently reference and incorporate data from one Microsoft 365 app while you're working in another. For example, you can ask Copilot in Word to 'create a report based on this Excel file' or 'summarize Teams meetings in an email.' This seamless integration improves productivity.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 21,
    question: "How can you use Copilot in Microsoft Teams for meetings?",
    options: [
      "Copilot can only be used before meetings for agenda preparation",
      "Copilot can summarize meetings, identify action items, and answer questions about meeting content",
      "Copilot replaces the need for meeting recordings entirely",
      "Copilot only works in one-on-one meetings, not group meetings"
    ],
    correctAnswer: 1,
    explanation: "Copilot in Teams can summarize meeting discussions, identify key decisions and action items, answer questions about what was discussed, and provide insights even if you joined late. It works with meeting transcripts to provide this functionality during and after meetings.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 22,
    question: "What is the purpose of Copilot Pages in Microsoft 365?",
    options: [
      "To create static web pages for external publication",
      "To provide a collaborative canvas where teams can work together with AI-generated content",
      "To replace SharePoint pages entirely",
      "To design custom page layouts for Word documents"
    ],
    correctAnswer: 1,
    explanation: "Copilot Pages is a collaborative workspace where team members can create, edit, and build upon AI-generated content together in real-time. It bridges individual Copilot interactions and team collaboration, allowing multiple people to work with AI-assisted content simultaneously.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 23,
    questionType: "multiple",
    selectCount: 2,
    question: "Which TWO features does Copilot memory enable? (Select exactly 2 answers)",
    options: [
      "Remembering user preferences and context across conversations",
      "Storing all organizational data in a separate database",
      "Using personalization instructions to tailor responses to your needs",
      "Accessing other users' private conversations",
      "Bypassing security and compliance policies"
    ],
    correctAnswers: [0, 2],
    explanation: "Copilot memory allows it to remember context and preferences across conversations, and you can set personalization instructions to tailor how Copilot responds to your specific needs and work style. It doesn't store all org data separately or access others' conversations.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 24,
    question: "What is the benefit of scheduling a prompt in Microsoft 365 Copilot?",
    options: [
      "Scheduled prompts automatically execute at specified times for recurring tasks",
      "Scheduled prompts are permanently deleted after 24 hours",
      "Scheduled prompts can only be run once per week",
      "Scheduled prompts require administrator approval before execution"
    ],
    correctAnswer: 0,
    explanation: "Scheduling prompts allows you to automate recurring tasks by having Copilot execute prompts at specified times. This is useful for regular reports, status updates, or routine analyses that need to happen on a consistent schedule.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 25,
    question: "How does Copilot in Word help with document creation?",
    options: [
      "It only corrects spelling and grammar errors",
      "It can draft content, rewrite sections, summarize documents, and answer questions about document content",
      "It automatically publishes documents to SharePoint without review",
      "It only provides formatting suggestions"
    ],
    correctAnswer: 1,
    explanation: "Copilot in Word offers comprehensive assistance including drafting new content, rewriting existing text for clarity or tone, summarizing long documents, and answering questions about document contents. It goes far beyond basic editing to support the entire writing process.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Foundation"
  },
  {
    id: 26,
    questionType: "multiple",
    selectCount: 3,
    question: "Which THREE capabilities can Copilot provide in Excel? (Select exactly 3 answers)",
    options: [
      "Analyzing data trends and creating visualizations",
      "Generating formula suggestions and explanations",
      "Automatically filing tax returns based on spreadsheet data",
      "Identifying insights and patterns in data",
      "Deleting all data that appears incorrect",
      "Converting all currencies without exchange rates"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Copilot in Excel can analyze data trends, create visualizations, suggest and explain formulas, and identify insights and patterns. It doesn't file taxes automatically, delete data without permission, or perform financial conversions without proper data.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 27,
    question: "What can Copilot do in PowerPoint presentations?",
    options: [
      "Only change slide transitions and animations",
      "Create presentations from prompts, add slides, summarize presentations, and organize content",
      "Automatically present slides to audiences without human involvement",
      "Only insert clip art and stock images"
    ],
    correctAnswer: 1,
    explanation: "Copilot in PowerPoint can create entire presentations from descriptions, add new slides with relevant content, summarize existing presentations, organize content logically, and help with speaker notes. It's a comprehensive presentation creation and editing assistant.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Foundation"
  },
  {
    id: 28,
    question: "How can Copilot assist in Outlook?",
    options: [
      "It only checks for spelling errors in emails",
      "It can draft emails, summarize long email threads, suggest meeting times, and help manage inbox",
      "It automatically sends emails without user review",
      "It only works with calendar scheduling"
    ],
    correctAnswer: 1,
    explanation: "Copilot in Outlook drafts email responses, summarizes lengthy email threads, suggests meeting times based on availability, helps prioritize inbox items, and can pull information from other sources to enrich email content. It requires user approval before sending.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Foundation"
  },
  {
    id: 29,
    question: "What happens when you create an agent using a template in Microsoft 365 Copilot?",
    options: [
      "Templates provide pre-configured settings and knowledge for specific use cases that you can customize",
      "Templates are final and cannot be modified after creation",
      "Templates only work for one-time use and then expire",
      "Templates require coding knowledge to implement"
    ],
    correctAnswer: 0,
    explanation: "Agent templates provide pre-configured starting points with relevant instructions, capabilities, and suggested prompts for specific scenarios (e.g., HR assistant, project manager). You can customize these templates to fit your exact needs without starting from scratch.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 30,
    questionType: "multiple",
    selectCount: 2,
    question: "Which TWO are examples of responsible AI verification steps? (Select exactly 2 answers)",
    options: [
      "Checking citations and sources provided by Copilot",
      "Accepting all AI-generated content without review",
      "Having human experts review critical decisions informed by AI",
      "Disabling all safety features to get faster responses",
      "Sharing AI outputs publicly before internal review"
    ],
    correctAnswers: [0, 2],
    explanation: "Responsible AI practices include checking citations and sources for accuracy, and having human experts review important decisions or content. Never accept AI output without verification, disable safety features, or share unreviewed AI content publicly, especially for critical business decisions.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 31,
    question: "How does Copilot help with meeting preparation?",
    options: [
      "It only schedules meeting times in your calendar",
      "It can create agendas, briefing documents, and pre-meeting summaries based on context",
      "It automatically declines meetings that conflict with your schedule",
      "It only sends meeting invitations to attendees"
    ],
    correctAnswer: 1,
    explanation: "Copilot assists meeting preparation by creating agendas based on meeting topics, generating briefing documents from relevant files and emails, and providing pre-meeting summaries of context, past decisions, and participant backgrounds. This helps participants come prepared.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 32,
    question: "What is the difference between Copilot features in different Microsoft 365 apps?",
    options: [
      "All apps have identical Copilot features regardless of the app's purpose",
      "Each app has specialized Copilot capabilities tailored to that app's specific use case and context",
      "Copilot only works in Word and Excel, not in other apps",
      "The differences are only cosmetic; functionality is the same everywhere"
    ],
    correctAnswer: 1,
    explanation: "While Copilot shares core capabilities, each Microsoft 365 app has specialized features tailored to its purpose. For example, Word focuses on writing, Excel on data analysis, PowerPoint on presentations, and Teams on collaboration and meetings.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 33,
    question: "How can you improve the quality of Copilot's responses through prompt iteration?",
    options: [
      "By giving up if the first response isn't perfect",
      "By refining and clarifying your prompt based on initial responses to guide Copilot toward better results",
      "By using the exact same prompt repeatedly without changes",
      "By switching to a different Microsoft 365 app"
    ],
    correctAnswer: 1,
    explanation: "Prompt iteration involves refining your prompt based on initial results. If the response isn't quite right, adjust your prompt with more specific details, better context, or clearer expectations. This conversational refinement helps Copilot understand exactly what you need.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 34,
    questionType: "multiple",
    selectCount: 3,
    question: "Which THREE are best practices for writing effective Copilot prompts? (Select exactly 3 answers)",
    options: [
      "Be specific about what you want to achieve",
      "Use vague language to let Copilot interpret freely",
      "Provide relevant context and background information",
      "Write prompts as short as possible without details",
      "Specify the desired format or structure of the output",
      "Avoid mentioning specific files or data sources"
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Effective prompts are specific about goals, provide relevant context and background, and specify desired output format. Vague prompts, overly short instructions, and avoiding specific sources lead to less useful responses. Clear, detailed prompts produce better results.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 35,
    question: "What role does web data play in Copilot's responses?",
    options: [
      "Web data is never used; Copilot only accesses organizational content",
      "Copilot can access web data when enabled to provide current information beyond organizational files",
      "Web data automatically overrides all organizational data",
      "Web data is only used for image generation"
    ],
    correctAnswer: 1,
    explanation: "When enabled, Copilot can access current web information to supplement organizational data. This is useful for research, current events, and general knowledge. However, it always respects your organization's policies about external data usage and prioritizes your business content.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 36,
    question: "How does data protection restrict Copilot's prompt results?",
    options: [
      "Data protection has no effect on Copilot's capabilities",
      "Copilot respects sensitivity labels and won't include protected content in responses without proper permissions",
      "Data protection completely disables Copilot for all users",
      "Data protection only affects emails, not documents"
    ],
    correctAnswer: 1,
    explanation: "Microsoft 365's data protection features (like sensitivity labels and DLP policies) restrict what content Copilot can access and include in responses. Users can only get responses based on content they have permission to access, maintaining security boundaries.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 37,
    question: "What should you do if Copilot generates content that contains a fabrication (hallucination)?",
    options: [
      "Trust it anyway since it came from Copilot",
      "Identify the fabrication, verify facts through citations, and correct or regenerate the content",
      "Delete all AI-generated content and never use Copilot again",
      "Share it immediately without checking"
    ],
    correctAnswer: 1,
    explanation: "When Copilot generates fabrications, identify them through fact-checking and citation verification, correct the errors, or regenerate with a more specific prompt. Treat AI-generated content as a draft requiring human review, especially for important documents.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 38,
    questionType: "multiple",
    selectCount: 2,
    question: "Which TWO scenarios are appropriate for using Copilot agents? (Select exactly 2 answers)",
    options: [
      "Creating a customer service agent with access to product knowledge base",
      "Replacing all human decision-making in critical business processes",
      "Building an HR assistant that answers common policy questions",
      "Automatically approving financial transactions without review",
      "Making medical diagnoses without doctor involvement"
    ],
    correctAnswers: [0, 2],
    explanation: "Appropriate agent scenarios include customer service with product knowledge and HR assistants for policy questions - these augment human work. Don't use agents to replace critical human judgment, approve financial transactions automatically, or make medical decisions.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 39,
    question: "How can you use Copilot to analyze data in Excel?",
    options: [
      "Copilot only formats cells and doesn't analyze data",
      "Ask Copilot questions about trends, patterns, anomalies, and relationships in your data",
      "Copilot requires you to write Python code for analysis",
      "Data analysis is only available through separate BI tools"
    ],
    correctAnswer: 1,
    explanation: "You can ask Copilot natural language questions about your Excel data, such as 'What are the sales trends?' or 'Show me anomalies in this dataset.' Copilot analyzes the data and provides insights, creates visualizations, and suggests formulas - no coding required.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 40,
    question: "What is the purpose of suggested prompts in custom agents?",
    options: [
      "To restrict what users can ask the agent",
      "To provide example prompts that guide users on how to effectively interact with the agent",
      "To automatically execute without user initiation",
      "To replace the agent's knowledge base"
    ],
    correctAnswer: 1,
    explanation: "Suggested prompts are example questions or requests that help users understand what the agent can do and how to phrase effective prompts. They serve as a starting point and showcase the agent's capabilities without restricting what users can actually ask.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 41,
    question: "How does Copilot handle requests involving multiple Microsoft 365 apps?",
    options: [
      "It can only work with one app at a time",
      "It can orchestrate information across apps, like creating a Word doc from Excel data and Teams discussion",
      "You must manually switch between apps for each step",
      "Cross-app functionality is not supported"
    ],
    correctAnswer: 1,
    explanation: "Copilot can work across multiple Microsoft 365 apps in a single request. For example, 'Create a Word report using data from this Excel file and insights from our Teams channel discussion.' This cross-app orchestration improves productivity significantly.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 42,
    questionType: "multiple",
    selectCount: 3,
    question: "Which THREE are valid use cases for Copilot in business communications? (Select exactly 3 answers)",
    options: [
      "Drafting professional email responses based on context",
      "Automatically sending emails without human review",
      "Summarizing long email threads to catch up quickly",
      "Creating meeting invitations with appropriate attendees and agendas",
      "Accessing competitors' confidential emails",
      "Deleting emails from your manager"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Valid use cases include drafting email responses (with human review), summarizing email threads for quick comprehension, and creating meeting invitations with context. Copilot doesn't send emails automatically, access unauthorized content, or delete emails without explicit user action.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 43,
    question: "What is the benefit of using agents from the Agent Store?",
    options: [
      "They are free while custom agents require payment",
      "They are pre-built, tested solutions for common business scenarios that save time",
      "They have access to data that custom agents cannot access",
      "They work faster than custom agents"
    ],
    correctAnswer: 1,
    explanation: "Agent Store agents are pre-built and tested for common business scenarios, saving you development time. They represent best practices and proven patterns. Both store agents and custom agents work within the same security boundary and have similar performance characteristics.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 44,
    question: "How can Copilot help with PowerPoint presentation design?",
    options: [
      "It only changes font colors and sizes",
      "It can suggest layouts, organize content logically, create slides from outlines, and apply appropriate visuals",
      "It requires professional design skills to use",
      "It only works with pre-existing templates"
    ],
    correctAnswer: 1,
    explanation: "Copilot in PowerPoint assists with design by suggesting appropriate layouts, organizing content flow, creating slides from outlines or documents, adding relevant images, and ensuring visual consistency. It makes professional design accessible without specialized skills.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 45,
    question: "What is prompt injection and why is it a security concern?",
    options: [
      "A medical procedure involving needles",
      "A malicious technique where users craft prompts to manipulate AI behavior or bypass restrictions",
      "A method for speeding up Copilot responses",
      "A way to share prompts with colleagues"
    ],
    correctAnswer: 1,
    explanation: "Prompt injection is a security risk where malicious actors craft prompts designed to manipulate AI behavior, extract sensitive information, or bypass security controls. Organizations should train users to recognize and report suspicious prompt patterns and implement appropriate safeguards.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 46,
    questionType: "multiple",
    selectCount: 2,
    question: "Which TWO actions help ensure appropriate use of AI in business? (Select exactly 2 answers)",
    options: [
      "Establishing clear policies for AI usage in your organization",
      "Allowing unlimited access to AI without guidelines",
      "Providing training on responsible AI practices",
      "Hiding AI usage from compliance teams",
      "Bypassing review processes for AI-generated content"
    ],
    correctAnswers: [0, 2],
    explanation: "Responsible AI in business requires clear usage policies and comprehensive training on best practices. Organizations should never hide AI usage from compliance, bypass reviews for critical content, or allow unlimited unguided access. Governance and education are essential.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 47,
    question: "How can you use Copilot to prepare for a presentation?",
    options: [
      "Copilot only creates the slides, not the preparation materials",
      "Generate speaker notes, practice talking points, and anticipate audience questions based on content",
      "Copilot cannot help with presentation preparation",
      "You must write everything manually first"
    ],
    correctAnswer: 1,
    explanation: "Copilot helps presentation preparation by generating comprehensive speaker notes, creating talking points for each slide, suggesting responses to potential audience questions, and even helping you rehearse by providing feedback on structure and content clarity.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 48,
    question: "What happens when you reference a person using @ in a Copilot prompt?",
    options: [
      "That person is automatically added to the current document",
      "Copilot can access relevant context about communications and collaborations with that person",
      "That person receives a notification about your prompt",
      "Nothing; the @ symbol has no special meaning"
    ],
    correctAnswer: 1,
    explanation: "When you mention a person using @, Copilot can access relevant context from your communications and collaborations with that person (emails, chats, shared documents) to provide more informed responses. The person doesn't receive notifications about being mentioned in your prompts.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 49,
    question: "How does Copilot maintain continuity in multi-turn conversations?",
    options: [
      "Each prompt is treated independently without context",
      "Copilot maintains conversation context across multiple prompts in the same chat session",
      "You must repeat all context with every prompt",
      "Conversation history is deleted after each response"
    ],
    correctAnswer: 1,
    explanation: "Copilot maintains conversation context throughout a chat session, allowing for natural follow-up questions and refinements. You can reference previous parts of the conversation without repeating everything. This enables iterative problem-solving and progressive refinement.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 50,
    question: "What is the purpose of human review in AI-assisted workflows?",
    options: [
      "Human review is unnecessary because AI is always accurate",
      "To verify accuracy, ensure appropriateness, and add human judgment before finalizing AI-generated content",
      "Human review is only needed for legal documents",
      "To slow down the process intentionally"
    ],
    correctAnswer: 1,
    explanation: "Human review is essential to verify factual accuracy, ensure content appropriateness for context and audience, catch potential fabrications, apply human judgment, and maintain quality standards. AI augments human capability but doesn't replace human oversight, especially for important decisions.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 51,
    questionType: "multiple",
    selectCount: 3,
    question: "Which THREE are characteristics of effective agent knowledge sources? (Select exactly 3 answers)",
    options: [
      "Regularly updated with current information",
      "Never reviewed or validated for accuracy",
      "Organized and structured for easy retrieval",
      "Contains outdated information from 10 years ago",
      "Relevant to the agent's specific purpose and user needs",
      "Includes random unrelated documents"
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Effective agent knowledge sources are regularly updated, well-organized for retrieval, and relevant to the agent's purpose. Sources should be validated, current, and curated rather than outdated, random, or unverified content.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 52,
    question: "How can Copilot help with Excel formula creation?",
    options: [
      "It only identifies formula errors but doesn't suggest solutions",
      "It can suggest formulas based on natural language descriptions of what you want to calculate",
      "You must know all formula syntax before Copilot can help",
      "Copilot only works with basic arithmetic, not advanced functions"
    ],
    correctAnswer: 1,
    explanation: "Copilot in Excel can generate formulas from natural language descriptions like 'calculate the average of column B where column A contains Sales.' It suggests appropriate functions, explains formula logic, and helps with complex nested formulas without requiring you to know all syntax.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 53,
    question: "What is the role of governance in enterprise Copilot deployment?",
    options: [
      "Governance is not needed for AI tools",
      "To establish policies, controls, and responsibilities for appropriate AI use across the organization",
      "Governance only applies to IT administrators, not end users",
      "Governance prevents any use of AI features"
    ],
    correctAnswer: 1,
    explanation: "Governance establishes the framework for responsible AI use, including usage policies, data access controls, audit mechanisms, compliance requirements, and clear roles and responsibilities. It enables safe, effective AI adoption while managing risks and ensuring accountability.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 54,
    question: "How can you improve the specificity of Copilot's outputs?",
    options: [
      "By using very generic prompts without details",
      "By providing specific examples, constraints, formats, and desired outcomes in your prompt",
      "By making prompts as short as possible",
      "Specificity doesn't affect Copilot's output quality"
    ],
    correctAnswer: 1,
    explanation: "Specificity dramatically improves output quality. Include examples of what you want, specify constraints (length, tone, format), describe the desired outcome clearly, and provide relevant context. Specific prompts yield focused, relevant responses rather than generic outputs.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 55,
    questionType: "multiple",
    selectCount: 2,
    question: "Which TWO are benefits of using Copilot for meeting follow-up? (Select exactly 2 answers)",
    options: [
      "Automatically generates action item summaries with assignments",
      "Eliminates the need for ever taking notes",
      "Creates follow-up email drafts based on meeting content",
      "Replaces the need for meetings entirely",
      "Makes all decisions discussed in meetings"
    ],
    correctAnswers: [0, 2],
    explanation: "Copilot helps meeting follow-up by generating action item summaries with clear assignments and creating follow-up email drafts. It doesn't eliminate note-taking entirely (you may want to add observations), replace meetings, or make decisions - those require human judgment.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 56,
    question: "What is the purpose of sensitivity labels in relation to Copilot?",
    options: [
      "Sensitivity labels only affect email delivery, not Copilot",
      "They control what content Copilot can access and include in responses based on user permissions",
      "They change the color scheme of Copilot's interface",
      "They speed up Copilot's processing time"
    ],
    correctAnswer: 1,
    explanation: "Sensitivity labels (Confidential, Restricted, etc.) control access to content. Copilot respects these labels and only includes information in responses that the user has permission to access. This maintains data security and ensures appropriate information boundaries.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 57,
    question: "How does Copilot help with content rewriting in Word?",
    options: [
      "It only checks spelling and suggests synonyms",
      "It can rewrite text for different tones, reading levels, or formats while preserving core meaning",
      "Rewriting features are not available in Word",
      "It always makes content longer, never shorter"
    ],
    correctAnswer: 1,
    explanation: "Copilot's rewriting capabilities can adjust tone (professional, casual, enthusiastic), simplify for different reading levels, change format (bullets to paragraphs, etc.), expand or condense content, and improve clarity - all while maintaining the core message.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 58,
    question: "What is grounding in the context of Copilot responses?",
    options: [
      "A disciplinary action for improper AI use",
      "The process of basing AI responses on specific organizational data and context rather than only general knowledge",
      "A method for slowing down Copilot responses",
      "The physical servers where Copilot runs"
    ],
    correctAnswer: 1,
    explanation: "Grounding means Copilot bases responses on your specific organizational data (documents, emails, chats, etc.) rather than only using its general training knowledge. This provides relevant, contextualized responses based on your business information, with citations to source materials.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 59,
    questionType: "multiple",
    selectCount: 2,
    question: "Which TWO are examples of using context effectively in prompts? (Select exactly 2 answers)",
    options: [
      "Referencing specific documents using @ mentions",
      "Providing vague descriptions without details",
      "Including relevant background information about the project or audience",
      "Using acronyms without explaining them",
      "Avoiding any mention of specific people or teams"
    ],
    correctAnswers: [0, 2],
    explanation: "Effective context includes referencing specific documents with @, and providing relevant background about the project, audience, or situation. Vague descriptions, unexplained acronyms, and avoiding specific references reduce context quality and lead to less useful responses.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 60,
    question: "How can Copilot assist with data visualization in Excel?",
    options: [
      "It cannot create visualizations; you must do this manually",
      "It can suggest appropriate chart types, create visualizations, and explain data patterns",
      "It only creates basic bar charts, no other types",
      "Visualizations require advanced programming skills"
    ],
    correctAnswer: 1,
    explanation: "Copilot can recommend the most appropriate visualization type for your data and goal (trends = line chart, comparisons = bar, composition = pie), create these visualizations, and explain the patterns and insights they reveal. No programming required.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 61,
    question: "What should you consider regarding bias in AI-generated content?",
    options: [
      "AI systems are completely unbiased and objective",
      "AI can reflect biases from training data and should be reviewed for fairness and inclusivity",
      "Bias only affects image generation, not text",
      "Bias is impossible to identify or address"
    ],
    correctAnswer: 1,
    explanation: "AI systems can inadvertently reflect biases present in training data. Review AI-generated content for fairness, inclusivity, and potential stereotypes. Consider diverse perspectives, verify factual claims, and be especially vigilant in sensitive contexts like hiring, performance reviews, or customer communications.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 62,
    question: "How can you use Copilot to analyze competitor information?",
    options: [
      "Copilot can hack into competitor systems for confidential data",
      "Use Copilot to analyze publicly available information and your organization's market research",
      "Competitor analysis is not a valid use case for Copilot",
      "Copilot automatically tracks all competitor activities"
    ],
    correctAnswer: 1,
    explanation: "Copilot can analyze publicly available information about competitors (websites, press releases, reports) and synthesize your organization's market research documents. It cannot and should not be used to access confidential competitor information or violate any ethical or legal boundaries.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 63,
    questionType: "multiple",
    selectCount: 3,
    question: "Which THREE are appropriate ways to handle confidential information with Copilot? (Select exactly 3 answers)",
    options: [
      "Ensure users only see content based on their existing permissions",
      "Share all confidential data freely in prompts",
      "Apply appropriate sensitivity labels to documents",
      "Disable data protection to make Copilot work better",
      "Configure DLP policies to prevent unauthorized sharing",
      "Post confidential prompts in public channels"
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Handle confidential information by respecting permission boundaries, applying sensitivity labels, and using DLP policies. Never share confidential data freely, disable protections for convenience, or post sensitive prompts publicly. Security and compliance must be maintained.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 64,
    question: "What is the benefit of using natural language with Copilot instead of commands?",
    options: [
      "Natural language is slower and less efficient",
      "Natural language allows anyone to interact with AI effectively without learning specialized syntax or commands",
      "Commands are always more accurate than natural language",
      "Natural language doesn't work with Copilot"
    ],
    correctAnswer: 1,
    explanation: "Natural language interaction makes AI accessible to all users regardless of technical expertise. You describe what you want in everyday language rather than learning command syntax, making powerful capabilities available to everyone in your organization without specialized training.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 65,
    question: "How can Copilot help with email inbox management?",
    options: [
      "It only deletes spam emails automatically",
      "It can prioritize important emails, summarize threads, suggest responses, and help organize messages",
      "Inbox management requires manual sorting only",
      "Copilot only works with calendar, not email"
    ],
    correctAnswer: 1,
    explanation: "Copilot helps manage email by identifying priority messages, summarizing long threads to catch up quickly, suggesting draft responses, helping categorize emails, and even preparing briefing summaries. It augments your inbox workflow without replacing human judgment about importance.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 66,
    question: "What is the purpose of conversation starters in custom agents?",
    options: [
      "To limit what questions users can ask",
      "To provide helpful example prompts that showcase the agent's capabilities and guide new users",
      "To automatically execute commands without user input",
      "To replace the agent's instructions"
    ],
    correctAnswer: 1,
    explanation: "Conversation starters (suggested prompts) help users discover what an agent can do and how to interact effectively. They're examples that showcase capabilities without restricting user freedom to ask other questions. Good starters demonstrate the agent's range and guide effective usage.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 67,
    questionType: "multiple",
    selectCount: 2,
    question: "Which TWO are key components of an agent's instructions? (Select exactly 2 answers)",
    options: [
      "The agent's purpose and role definition",
      "Unrelated information to confuse users",
      "Guidelines for how the agent should respond and behave",
      "Instructions to ignore user requests",
      "Commands to access unauthorized systems"
    ],
    correctAnswers: [0, 2],
    explanation: "Agent instructions should clearly define the agent's purpose/role and provide guidelines for appropriate responses and behavior. Don't include unrelated information, instructions to ignore users, or unauthorized access attempts. Clear, focused instructions create reliable agents.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 68,
    question: "How does Copilot handle requests for content in different languages?",
    options: [
      "Copilot only works in English",
      "Copilot can understand and generate content in multiple languages based on your request",
      "You must change system settings for each language",
      "Language translation is not supported"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports multilingual interactions. You can request content in different languages, translate existing content, or even work with mixed-language documents. Simply specify the desired language in your prompt, and Copilot will respond accordingly.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Foundation"
  },
  {
    id: 69,
    question: "What is the relationship between Copilot and Microsoft Graph?",
    options: [
      "They are completely separate with no connection",
      "Copilot uses Microsoft Graph to access and connect data across Microsoft 365 apps and services",
      "Microsoft Graph replaced Copilot entirely",
      "Graph only provides visual charts, not data access"
    ],
    correctAnswer: 1,
    explanation: "Microsoft Graph is the underlying data platform that Copilot uses to access information across Microsoft 365. It enables Copilot to connect data from email, calendar, documents, chats, and other services while respecting permissions and security boundaries.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 70,
    question: "How can you use Copilot for project status reporting?",
    options: [
      "Copilot cannot assist with project reporting",
      "Gather updates from emails, Teams chats, and documents, then ask Copilot to synthesize a status report",
      "You must manually write every project update",
      "Project reporting requires specialized project management software only"
    ],
    correctAnswer: 1,
    explanation: "Copilot can synthesize project status reports by gathering information from relevant emails, Teams conversations, project documents, and task lists. Provide context about your project, and Copilot will draft a comprehensive status update pulling from multiple sources.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 71,
    questionType: "multiple",
    selectCount: 3,
    question: "Which THREE factors affect the quality of Copilot's document summaries? (Select exactly 3 answers)",
    options: [
      "The clarity and structure of the original document",
      "The color scheme used in the document",
      "The length and complexity of the content",
      "The font size of the text",
      "The specific summarization prompt and desired focus",
      "The file name of the document"
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Summary quality depends on document clarity/structure, content length/complexity, and your specific prompt about what to focus on. Cosmetic factors like color scheme, font size, and file name don't affect Copilot's ability to understand and summarize content.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 72,
    question: "What should you do if Copilot cannot answer your question?",
    options: [
      "Give up immediately and stop using Copilot",
      "Rephrase your question with more context, break it into smaller parts, or verify you have access to relevant data",
      "Repeat the exact same prompt multiple times",
      "Complain without trying alternative approaches"
    ],
    correctAnswer: 1,
    explanation: "If Copilot can't answer, try rephrasing with more context, breaking complex questions into smaller parts, checking your data access permissions, or being more specific about what you need. Iterative refinement often resolves initial difficulties.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 73,
    question: "How does Copilot support accessibility in content creation?",
    options: [
      "Accessibility features are not supported in Copilot",
      "Copilot can help create accessible content by suggesting alt text, checking readability, and ensuring inclusive language",
      "Accessibility only applies to screen readers, not content",
      "All AI-generated content is automatically accessible"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports accessibility by helping generate alt text for images, checking readability levels, suggesting inclusive language, ensuring proper heading structure in documents, and identifying potential accessibility issues. However, human review ensures full accessibility compliance.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 74,
    question: "What is the purpose of providing feedback on Copilot responses?",
    options: [
      "Feedback is ignored and has no purpose",
      "Feedback helps improve Copilot's performance over time and flags problematic responses",
      "Feedback is only used for billing purposes",
      "Only administrators can provide feedback"
    ],
    correctAnswer: 1,
    explanation: "User feedback (thumbs up/down, detailed comments) helps Microsoft improve Copilot's performance, identify problematic patterns, and refine the system. Feedback about harmful, inaccurate, or unhelpful responses is especially valuable for ongoing improvement. All users can provide feedback.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 75,
    question: "How can Copilot assist with business process documentation?",
    options: [
      "Process documentation is beyond Copilot's capabilities",
      "Copilot can help draft process documents, create workflow diagrams descriptions, and standardize documentation",
      "Documentation must be created entirely manually",
      "Copilot only copies existing documents without modification"
    ],
    correctAnswer: 1,
    explanation: "Copilot assists process documentation by drafting procedures based on descriptions or existing workflows, helping create clear step-by-step instructions, standardizing documentation format across teams, and even generating visual workflow descriptions for diagramming.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 76,
    questionType: "multiple",
    selectCount: 2,
    question: "Which TWO are signs that a Copilot response may need verification? (Select exactly 2 answers)",
    options: [
      "The response includes specific citations to source documents",
      "The response makes claims without any citations or sources",
      "The response provides detailed step-by-step explanations",
      "The response contains information that contradicts your organizational data",
      "The response uses professional business language"
    ],
    correctAnswers: [1, 3],
    explanation: "Responses without citations and those contradicting known organizational data need verification. Cited responses, detailed explanations, and professional language are generally good signs, but all AI-generated content benefits from human review, especially for critical decisions.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 77,
    question: "What is the benefit of using Copilot for onboarding new employees?",
    options: [
      "Onboarding should only be done by human managers",
      "Copilot can create personalized onboarding materials, answer common questions, and help locate resources",
      "New employees cannot use Copilot until trained",
      "Onboarding automation is not compliant"
    ],
    correctAnswer: 1,
    explanation: "Copilot enhances onboarding by creating customized welcome materials, answering frequently asked questions about policies and procedures, helping new employees find resources, and generating role-specific training materials. It augments human mentorship rather than replacing it.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 78,
    question: "How should you handle AI-generated content in regulated industries?",
    options: [
      "Regulated industries cannot use AI at all",
      "Apply additional scrutiny, review, and validation processes specific to regulatory requirements",
      "AI content is automatically compliant and needs no review",
      "Only use AI for non-business activities"
    ],
    correctAnswer: 1,
    explanation: "In regulated industries (healthcare, finance, legal), AI-generated content requires additional validation processes, expert review, compliance checks, and documentation. While AI can increase efficiency, regulatory standards still apply, and human oversight is essential for compliance.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 79,
    question: "What is the role of prompts in determining Copilot's output format?",
    options: [
      "Output format is fixed and cannot be specified",
      "You can specify desired formats in prompts (bullet lists, tables, paragraphs, etc.) to shape the output structure",
      "Format specifications are ignored by Copilot",
      "Only administrators can control output format"
    ],
    correctAnswer: 1,
    explanation: "Prompts can and should specify desired output format: 'Create a bullet list,' 'Format as a table,' 'Write in paragraph form,' 'Use numbered steps,' etc. Clear format specifications ensure output meets your needs without requiring manual reformatting.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 80,
    question: "How can Copilot help with knowledge management?",
    options: [
      "Knowledge management requires dedicated software, not AI",
      "Copilot can help organize, summarize, and surface relevant knowledge from across organizational content",
      "Copilot only creates new knowledge, doesn't help with existing information",
      "Knowledge management is not affected by Copilot"
    ],
    correctAnswer: 1,
    explanation: "Copilot enhances knowledge management by helping organize information, summarizing key insights from documents, answering questions by surfacing relevant content from across the organization, and making institutional knowledge more accessible and discoverable to all employees.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 81,
    questionType: "multiple",
    selectCount: 3,
    question: "Which THREE are best practices for agent knowledge base management? (Select exactly 3 answers)",
    options: [
      "Regularly review and update knowledge sources",
      "Include every document in the organization without curation",
      "Remove outdated or incorrect information promptly",
      "Never check the quality of knowledge sources",
      "Organize content by relevance and topic",
      "Add duplicate documents to increase volume"
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Effective knowledge base management includes regular updates, prompt removal of outdated/incorrect content, and organized curation by relevance. Don't include everything without curation, skip quality checks, or add duplicates. Quality over quantity ensures reliable agent responses.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 82,
    question: "What is the benefit of using Copilot for competitive analysis?",
    options: [
      "Copilot can access competitors' confidential data",
      "Copilot can synthesize public information and your market research into comprehensive competitive insights",
      "Competitive analysis is not a valid business use case",
      "Copilot replaces the need for market research entirely"
    ],
    correctAnswer: 1,
    explanation: "Copilot enhances competitive analysis by synthesizing publicly available information (websites, news, reports) with your internal market research, creating comprehensive competitive intelligence reports. It cannot access confidential competitor data and should supplement, not replace, thorough market research.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 83,
    question: "How does Copilot handle ambiguous or unclear prompts?",
    options: [
      "It refuses to respond to any ambiguous prompt",
      "It makes reasonable interpretations and may ask clarifying questions or provide multiple interpretations",
      "It always guesses randomly without seeking clarification",
      "Ambiguous prompts cause system errors"
    ],
    correctAnswer: 1,
    explanation: "When prompts are ambiguous, Copilot attempts reasonable interpretations based on context, may ask for clarification, or sometimes provides multiple possible interpretations. If results aren't what you wanted, refine your prompt with more specific details.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 84,
    question: "What is the purpose of testing agent responses before deployment?",
    options: [
      "Testing is unnecessary if the agent was built correctly",
      "To verify accuracy, identify edge cases, ensure appropriate responses, and refine instructions before users interact",
      "Testing only matters for technical bugs, not content quality",
      "Only end users should test agents, not creators"
    ],
    correctAnswer: 1,
    explanation: "Pre-deployment testing is critical to verify response accuracy, identify edge cases and problematic scenarios, ensure tone and behavior align with expectations, and refine instructions. Test with realistic scenarios and diverse questions before making agents available to users.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 85,
    questionType: "multiple",
    selectCount: 2,
    question: "Which TWO are appropriate ways to use Copilot for customer communications? (Select exactly 2 answers)",
    options: [
      "Drafting personalized customer responses based on context and history",
      "Automatically sending customer communications without review",
      "Summarizing customer feedback themes from multiple sources",
      "Sharing all customer data publicly to improve responses",
      "Ignoring data privacy regulations for convenience"
    ],
    correctAnswers: [0, 2],
    explanation: "Appropriate uses include drafting personalized responses (with human review) and summarizing customer feedback themes. Never send communications without review, share customer data publicly, or ignore privacy regulations. Customer communications require careful oversight and compliance.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 86,
    question: "How can Copilot support continuous learning in organizations?",
    options: [
      "Learning and development are outside Copilot's scope",
      "Copilot can create training materials, answer learning questions, and provide personalized skill development resources",
      "Copilot replaces all formal training programs",
      "Only HR can use Copilot for learning purposes"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports learning by creating customized training materials, answering employee questions about skills and processes, generating learning resources tailored to roles, and helping employees discover relevant knowledge. It complements formal training rather than replacing structured learning programs.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 87,
    question: "What should you consider when using Copilot for performance reviews?",
    options: [
      "AI-generated reviews are completely objective and need no human input",
      "Use Copilot to draft reviews but apply human judgment for fairness, context, and final assessment",
      "Performance reviews should never involve AI in any capacity",
      "Copilot's performance assessments are legally binding"
    ],
    correctAnswer: 1,
    explanation: "Copilot can help draft performance review content and organize feedback, but human managers must apply judgment, ensure fairness, add context, and make final assessments. Reviews are sensitive and consequential, requiring careful human oversight to avoid bias and ensure appropriateness.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 88,
    question: "How does Copilot help with meeting agenda creation?",
    options: [
      "Agendas must be created manually without AI assistance",
      "Copilot can suggest agenda items based on meeting goals, previous meetings, and relevant context",
      "Copilot only creates generic agendas without customization",
      "Agenda creation is not available in Microsoft 365"
    ],
    correctAnswer: 1,
    explanation: "Copilot creates relevant meeting agendas by considering meeting objectives, reviewing previous meeting notes, analyzing related emails and documents, and suggesting appropriate topics and time allocations. You can refine suggestions to ensure agendas meet specific needs.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 89,
    questionType: "multiple",
    selectCount: 3,
    question: "Which THREE are indicators of a well-designed custom agent? (Select exactly 3 answers)",
    options: [
      "Clear, focused purpose and scope",
      "Tries to handle every possible business function",
      "Well-curated, relevant knowledge sources",
      "Contains contradictory instructions",
      "Helpful conversation starters that demonstrate capabilities",
      "Vague instructions that allow random behavior"
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Well-designed agents have clear purpose/scope, curated relevant knowledge, and helpful conversation starters. Avoid agents that try to do everything, contain contradictory instructions, or have vague guidance. Focused, well-documented agents provide the best user experience.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 90,
    question: "What is the relationship between prompt quality and output quality?",
    options: [
      "Prompt quality doesn't affect output; results are random",
      "Higher quality prompts with clear context and specific goals produce more useful, accurate outputs",
      "Simple one-word prompts always produce the best results",
      "Output quality only depends on the AI model, not the prompt"
    ],
    correctAnswer: 1,
    explanation: "Prompt quality directly impacts output quality. Clear, specific prompts with relevant context and well-defined goals produce focused, accurate, useful results. Vague or unclear prompts lead to generic or off-target responses. Invest time in crafting effective prompts.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Foundation"
  },
  {
    id: 91,
    question: "How can Copilot assist with business proposal development?",
    options: [
      "Proposals must be written entirely manually",
      "Copilot can draft proposals based on requirements, research competitors, and suggest compelling content",
      "Copilot only formats existing proposals, doesn't help with content",
      "Proposal development is beyond AI capabilities"
    ],
    correctAnswer: 1,
    explanation: "Copilot assists proposal development by drafting content based on RFP requirements, researching relevant information, suggesting value propositions, organizing proposal structure, and helping tailor messaging to the audience. Human expertise adds strategy and final refinement.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 92,
    question: "What is the importance of transparency when using AI-generated content?",
    options: [
      "You should always hide that AI was involved",
      "Transparency about AI involvement builds trust and sets appropriate expectations for content review",
      "Transparency is only required for external communications",
      "Transparency reduces the value of AI-generated content"
    ],
    correctAnswer: 1,
    explanation: "Transparency about AI involvement is important for trust, setting expectations for review processes, and ensuring accountability. Disclose AI use when appropriate, especially in significant decisions, customer communications, or contexts where attribution matters. Transparency demonstrates responsible AI practices.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 93,
    questionType: "multiple",
    selectCount: 2,
    question: "Which TWO are benefits of Copilot's cross-application capabilities? (Select exactly 2 answers)",
    options: [
      "Seamlessly connecting information from emails, documents, and chats in one response",
      "Requiring separate logins for each application",
      "Creating workflows that span multiple Microsoft 365 apps",
      "Isolating data so apps cannot communicate",
      "Duplicating information across applications manually"
    ],
    correctAnswers: [0, 2],
    explanation: "Cross-application benefits include seamlessly connecting information across apps (emails, documents, chats) and creating multi-app workflows. These capabilities eliminate silos and manual duplication. Separate logins and data isolation would hinder, not help, productivity.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 94,
    question: "How should organizations measure the success of Copilot adoption?",
    options: [
      "Success cannot be measured for AI tools",
      "Track metrics like time saved, user satisfaction, quality improvements, and business outcomes",
      "Only count the number of prompts submitted",
      "Success is automatic once Copilot is deployed"
    ],
    correctAnswer: 1,
    explanation: "Measure Copilot success through multiple metrics: time saved on tasks, user satisfaction and adoption rates, quality improvements in outputs, business outcomes (faster decisions, better insights), and productivity gains. Comprehensive measurement informs optimization and demonstrates ROI.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 95,
    question: "What is the purpose of continuous learning in AI systems like Copilot?",
    options: [
      "AI systems never learn or improve after initial deployment",
      "Continuous learning allows AI to improve from feedback, new data, and updated models over time",
      "Continuous learning makes AI systems less accurate",
      "Only users need to learn; AI systems remain static"
    ],
    correctAnswer: 1,
    explanation: "Continuous learning enables AI systems to improve over time through user feedback, new training data, model updates, and refinements. This ongoing improvement increases accuracy, adds capabilities, and adapts to changing business needs. Both users and AI systems evolve together.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 96,
    question: "How can Copilot support data-driven decision making?",
    options: [
      "Copilot makes all decisions automatically without human input",
      "Copilot can analyze data, identify patterns, generate insights, and present information to inform human decisions",
      "Data-driven decisions must be made without AI assistance",
      "Copilot only works with qualitative data, not quantitative"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports decision-making by analyzing quantitative and qualitative data, identifying patterns and trends, generating actionable insights, and presenting information clearly. It augments human judgment by providing data-backed insights, but humans make final decisions based on full context.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 97,
    questionType: "multiple",
    selectCount: 3,
    question: "Which THREE are appropriate considerations when deploying agents organization-wide? (Select exactly 3 answers)",
    options: [
      "Training users on how to interact effectively with agents",
      "Deploying all agents without testing or governance",
      "Monitoring agent performance and user feedback",
      "Ignoring security and compliance requirements",
      "Establishing clear ownership and maintenance responsibilities",
      "Making agents unchangeable after initial deployment"
    ],
    correctAnswers: [0, 2, 4],
    explanation: "Organization-wide deployment requires user training, performance monitoring with feedback collection, and clear ownership/maintenance plans. Never skip testing/governance, ignore security requirements, or make agents inflexible. Successful deployment balances enablement with appropriate controls.",
    domain: "Manage prompts and conversations by using AI",
    difficulty: "Applied"
  },
  {
    id: 98,
    question: "What is the role of human expertise in AI-augmented workflows?",
    options: [
      "Human expertise becomes irrelevant once AI is deployed",
      "Human expertise provides judgment, context, creativity, and validation that AI cannot fully replicate",
      "AI should replace all human expertise to reduce costs",
      "Human expertise and AI cannot work together effectively"
    ],
    correctAnswer: 1,
    explanation: "Human expertise remains essential in AI-augmented workflows. Humans provide nuanced judgment, contextual understanding, creative thinking, ethical considerations, and final validation. AI handles routine tasks, data processing, and initial drafts, while humans focus on high-value activities requiring expertise and judgment.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 99,
    question: "How can Copilot help with change management during organizational transitions?",
    options: [
      "Change management should not involve AI tools",
      "Copilot can create communication materials, FAQs, training content, and help address employee concerns",
      "Change management only requires executive announcements",
      "Copilot automatically implements all organizational changes"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports change management by creating clear communication materials, generating comprehensive FAQs, developing training content, drafting employee announcements, and helping address concerns at scale. It doesn't replace thoughtful change leadership but makes communication and training more efficient.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 100,
    question: "What is the ultimate goal of using Copilot in business?",
    options: [
      "To replace all human workers with AI",
      "To augment human capabilities, increase productivity, and enable focus on high-value strategic work",
      "To eliminate the need for training and skill development",
      "To automate every business process without oversight"
    ],
    correctAnswer: 1,
    explanation: "Copilot's purpose is to augment human capabilities, handle routine tasks, increase productivity, and free people to focus on strategic, creative, and high-value work that requires human judgment and expertise. It's about human-AI collaboration for better outcomes, not replacement or elimination of human skills.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 101,
    question: "When using Copilot in Excel, which feature allows you to identify trends and patterns in your data?",
    options: [
      "Data validation rules",
      "PivotTable creation",
      "Formula suggestions and data analysis insights",
      "Cell formatting options"
    ],
    correctAnswer: 2,
    explanation: "Copilot in Excel provides formula suggestions and can analyze data to identify trends, patterns, and insights. It can create visualizations, suggest appropriate formulas, and help interpret data relationships.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied"
  },
  {
    id: 102,
    question: "What is a key consideration when sharing Copilot-generated content externally?",
    options: [
      "All Copilot content is automatically approved for external sharing",
      "Review for accuracy, confidentiality, and appropriate tone before sharing",
      "Copilot content cannot be shared outside the organization",
      "External sharing requires no additional review"
    ],
    correctAnswer: 1,
    explanation: "Always review Copilot-generated content before external sharing. Verify accuracy, ensure it doesn't contain confidential information, check for appropriate tone and professionalism, and confirm it aligns with organizational policies and brand guidelines.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 103,
    question: "How does Copilot Studio enable organizations to extend Copilot capabilities?",
    options: [
      "It provides pre-built templates that cannot be customized",
      "It allows creation of custom agents, plugins, and connectors to line-of-business systems",
      "It only works with Microsoft first-party applications",
      "It requires professional developers and cannot be used by business users"
    ],
    correctAnswer: 1,
    explanation: "Copilot Studio is a low-code platform that enables organizations to create custom agents, build plugins, and connect to proprietary data and systems. It supports both professional developers and empowered business users to extend Copilot with organization-specific capabilities.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert"
  },
  {
    id: 104,
    question: "What happens when you use Copilot to summarize a meeting in Teams?",
    options: [
      "It only captures text from the chat window",
      "It analyzes meeting transcripts to provide key points, action items, and decisions",
      "It requires manual input of meeting notes",
      "It only works for scheduled meetings, not ad-hoc calls"
    ],
    correctAnswer: 1,
    explanation: "Copilot in Teams analyzes meeting transcripts (when recording/transcription is enabled) to generate summaries including key discussion points, action items, decisions made, and important quotes. It works for both scheduled and ad-hoc meetings.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied"
  },
  {
    id: 105,
    question: "Which of the following is NOT a valid approach to prompt engineering in Copilot?",
    options: [
      "Providing context about your role and audience",
      "Using vague, general requests to let AI decide the best approach",
      "Including specific examples of desired output",
      "Iterating and refining prompts based on results"
    ],
    correctAnswer: 1,
    explanation: "Effective prompt engineering requires clear, specific requests with context. Vague prompts lead to generic results. Best practices include providing your role, audience, desired format, specific examples, and iterating to refine results.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 106,
    question: "What is the role of Microsoft Graph in Copilot's functionality?",
    options: [
      "It provides the visual design elements for the Copilot interface",
      "It connects Copilot to organizational data across Microsoft 365 while respecting permissions",
      "It stores all Copilot conversations for audit purposes",
      "It manages user authentication only"
    ],
    correctAnswer: 1,
    explanation: "Microsoft Graph is the API that connects Copilot to your organizational data across Microsoft 365 apps and services. It ensures Copilot can access relevant information while respecting existing permissions, security boundaries, and compliance policies.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 107,
    question: "When creating a declarative agent in Copilot, what components are required?",
    options: [
      "Custom code in C# or Python only",
      "Instructions, knowledge sources, and conversation starters",
      "Direct database connections",
      "Machine learning model training data"
    ],
    correctAnswer: 1,
    explanation: "Declarative agents in Copilot require: clear instructions defining the agent's purpose and behavior, knowledge sources (SharePoint, files, etc.), conversation starters to guide users, and optionally actions/plugins for specific capabilities. No custom code required.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert"
  },
  {
    id: 108,
    question: "How can Copilot help with email management in Outlook?",
    options: [
      "It automatically deletes spam without user review",
      "It can draft replies, summarize long threads, and suggest responses based on context",
      "It forwards all emails to your manager",
      "It disables email notifications permanently"
    ],
    correctAnswer: 1,
    explanation: "Copilot in Outlook helps with email management by drafting professional replies, summarizing long email threads, suggesting appropriate responses based on context, coaching on tone, and helping prioritize messages. Users maintain control over all actions.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied"
  },
  {
    id: 109,
    question: "What is a best practice for managing Copilot adoption in large organizations?",
    options: [
      "Deploy to all users simultaneously without training",
      "Start with pilot groups, gather feedback, provide training, and scale gradually",
      "Restrict usage to executives only",
      "Disable all features until adoption is mandatory"
    ],
    correctAnswer: 1,
    explanation: "Successful Copilot adoption uses a phased approach: identify pilot users across different roles, provide comprehensive training, gather feedback, measure impact, address concerns, create champions, and scale gradually with continuous support and learning resources.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 110,
    question: "Which scenario best demonstrates responsible AI use with Copilot?",
    options: [
      "Using Copilot output without any human review or validation",
      "Reviewing Copilot suggestions for accuracy, bias, and appropriateness before use",
      "Sharing Copilot-generated content without attribution",
      "Bypassing organizational policies because AI generated the content"
    ],
    correctAnswer: 1,
    explanation: "Responsible AI use requires human oversight. Always review Copilot output for accuracy, potential bias, appropriateness, and alignment with organizational values. Verify facts, ensure fairness, maintain accountability, and follow all policies regardless of AI involvement.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 111,
    question: "What capability does Copilot in PowerPoint provide for presentation creation?",
    options: [
      "It only changes fonts and colors",
      "It can create presentations from prompts, documents, or outlines with relevant content and design",
      "It requires complete manual slide creation",
      "It only works with pre-existing templates"
    ],
    correctAnswer: 1,
    explanation: "Copilot in PowerPoint can create entire presentations from text prompts, Word documents, or outlines. It generates relevant content, suggests appropriate designs, creates slides with images, and helps structure narratives. Users can refine and customize the results.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied"
  },
  {
    id: 112,
    question: "How does Copilot handle multilingual scenarios?",
    options: [
      "It only works in English",
      "It can understand and generate content in multiple languages based on user preference",
      "It requires separate licenses for each language",
      "It automatically translates everything to English"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports multiple languages and can understand and generate content in the user's preferred language. It respects language settings and can work across multilingual content, though capabilities may vary by language and feature.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 113,
    question: "What is the difference between a plugin and a custom agent in Copilot?",
    options: [
      "There is no difference; they are the same thing",
      "Plugins add specific actions/capabilities; agents are specialized assistants with instructions and knowledge",
      "Plugins are for administrators only; agents are for end users",
      "Plugins work offline; agents require internet"
    ],
    correctAnswer: 1,
    explanation: "Plugins extend Copilot with specific actions or integrations (e.g., retrieve data, perform tasks). Custom agents are specialized AI assistants configured with specific instructions, knowledge sources, and capabilities for particular use cases or domains.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert"
  },
  {
    id: 114,
    question: "When using Copilot for data analysis, what should you verify before making business decisions?",
    options: [
      "Nothing; Copilot analysis is always accurate",
      "Data quality, analysis methodology, and conclusions with domain expertise",
      "Only the formatting of the output",
      "That Copilot used the most complex algorithms available"
    ],
    correctAnswer: 1,
    explanation: "Before making business decisions based on Copilot analysis, verify: data quality and completeness, appropriateness of analysis methods, validity of conclusions, consider domain expertise and business context, and validate findings with stakeholders.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 115,
    question: "What is a key benefit of using Copilot in Word for document creation?",
    options: [
      "It eliminates the need for any editing",
      "It can draft content, rewrite sections, adjust tone, and suggest improvements",
      "It only works with blank documents",
      "It automatically publishes documents without review"
    ],
    correctAnswer: 1,
    explanation: "Copilot in Word assists with drafting content from prompts, rewriting existing text, adjusting tone and style, suggesting improvements, summarizing long documents, and creating content based on other files. It accelerates creation while maintaining user control.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied"
  },
  {
    id: 116,
    question: "How should organizations handle AI-generated content for regulatory compliance?",
    options: [
      "AI-generated content is automatically compliant",
      "Treat AI output as drafts requiring human review for accuracy, compliance, and policy adherence",
      "AI content doesn't need compliance review",
      "Only executives need to review AI content"
    ],
    correctAnswer: 1,
    explanation: "Organizations must treat AI-generated content as drafts requiring human review. Verify accuracy, ensure regulatory compliance, check policy adherence, validate facts, and maintain audit trails. Humans remain accountable for content quality and compliance.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 117,
    question: "What is the recommended approach when Copilot provides an incorrect or unhelpful response?",
    options: [
      "Stop using Copilot entirely",
      "Refine your prompt with more context, clarify expectations, and try again",
      "Accept the response without question",
      "Report it as a critical system failure"
    ],
    correctAnswer: 1,
    explanation: "When Copilot responses are unhelpful, refine your prompt with more context, specific examples, clearer instructions, or different phrasing. Iterative refinement is a normal part of AI collaboration. Provide feedback to help improve the system.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 118,
    question: "Which type of data can Copilot access within your Microsoft 365 environment?",
    options: [
      "All data across the entire organization regardless of permissions",
      "Only data the individual user has permission to access based on existing security",
      "Only publicly shared files",
      "Only data created in the last 30 days"
    ],
    correctAnswer: 1,
    explanation: "Copilot respects existing Microsoft 365 permissions and security boundaries. It can only access data that the individual user already has permission to see. It doesn't grant new permissions or bypass existing security controls.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 119,
    question: "What is semantic index in the context of Microsoft 365 Copilot?",
    options: [
      "A traditional database index",
      "An AI-powered understanding of your organizational content and relationships",
      "A manual tagging system",
      "A backup of all documents"
    ],
    correctAnswer: 1,
    explanation: "Semantic index is an AI-powered map of organizational content that understands concepts, relationships, and context. It enables Copilot to find relevant information based on meaning rather than just keywords, improving search and content generation.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 120,
    question: "How can Copilot assist with project planning?",
    options: [
      "It can only create simple to-do lists",
      "It can help create project plans, identify tasks, suggest timelines, and draft status reports",
      "It requires professional project management software",
      "It automatically assigns tasks to team members"
    ],
    correctAnswer: 1,
    explanation: "Copilot assists project planning by creating structured project plans, breaking down objectives into tasks, suggesting realistic timelines, identifying dependencies, drafting status reports, and summarizing project updates. Human oversight ensures feasibility.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 121,
    question: "What is a grounding prompt in Copilot?",
    options: [
      "A prompt that limits Copilot functionality",
      "Providing specific context, data, or documents to base Copilot's response on",
      "A safety restriction on content",
      "A command to restart Copilot"
    ],
    correctAnswer: 1,
    explanation: "Grounding is providing Copilot with specific context, documents, or data to base its responses on. This helps Copilot generate more accurate, relevant responses anchored in your organizational information rather than general knowledge.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 122,
    question: "Which of the following is a valid use case for Copilot in customer service?",
    options: [
      "Completely replacing all customer service representatives",
      "Drafting personalized responses, summarizing customer history, and suggesting solutions",
      "Making decisions without human oversight",
      "Sharing customer data publicly"
    ],
    correctAnswer: 1,
    explanation: "Copilot enhances customer service by drafting personalized responses, summarizing customer interaction history, suggesting relevant solutions, generating follow-up actions, and helping maintain consistent tone. Representatives review and personalize before sending.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 123,
    question: "What is the role of conversation starters in custom Copilot agents?",
    options: [
      "They limit what users can ask",
      "They guide users with suggested prompts and demonstrate agent capabilities",
      "They are required for every interaction",
      "They replace the need for instructions"
    ],
    correctAnswer: 1,
    explanation: "Conversation starters are suggested prompts that help users understand what the agent can do and how to interact with it effectively. They demonstrate capabilities, guide initial interactions, and improve user experience, but users can ask anything.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert"
  },
  {
    id: 124,
    question: "How does Copilot support collaborative document editing?",
    options: [
      "It prevents multiple users from editing simultaneously",
      "It can suggest edits, summarize comments, and help resolve conflicting changes",
      "It only works with single-user documents",
      "It automatically accepts all changes without review"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports collaboration by suggesting edits, summarizing comment threads, helping resolve conflicting changes, drafting responses to feedback, and maintaining consistency across contributions. It works within Microsoft 365's co-authoring features.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied"
  },
  {
    id: 125,
    question: "What should be included in Copilot usage guidelines for employees?",
    options: [
      "No guidelines are necessary",
      "Data privacy expectations, quality review requirements, appropriate use cases, and escalation procedures",
      "Only technical specifications",
      "Complete prohibition of AI use"
    ],
    correctAnswer: 1,
    explanation: "Effective Copilot guidelines should cover: data privacy and confidentiality rules, quality review requirements, appropriate and inappropriate use cases, accuracy verification expectations, escalation procedures, and alignment with organizational values and policies.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 126,
    question: "How can Copilot help with meeting preparation?",
    options: [
      "It can only schedule meetings",
      "It can research topics, create agendas, draft talking points, and summarize related discussions",
      "It attends meetings on your behalf",
      "It only sends meeting invitations"
    ],
    correctAnswer: 1,
    explanation: "Copilot assists meeting preparation by researching relevant topics, creating structured agendas, drafting talking points, summarizing previous related discussions, preparing briefing documents, and organizing background information.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 127,
    question: "What is the difference between Copilot in Teams chat and Copilot in Teams meetings?",
    options: [
      "They are identical features",
      "Chat Copilot assists with conversations; Meeting Copilot summarizes transcripts and provides insights",
      "Only one works with external participants",
      "Meeting Copilot only works for the organizer"
    ],
    correctAnswer: 1,
    explanation: "Copilot in Teams chat helps draft messages, summarize conversations, and find information. Copilot in Teams meetings analyzes transcripts to provide summaries, action items, key points, and answers questions about what was discussed during the meeting.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied"
  },
  {
    id: 128,
    question: "When should organizations consider building custom Copilot agents?",
    options: [
      "Never; standard Copilot is sufficient for all scenarios",
      "When specialized knowledge, workflows, or integrations are needed for specific use cases",
      "Only for technical teams",
      "Immediately for every department"
    ],
    correctAnswer: 1,
    explanation: "Build custom agents when you need: specialized domain knowledge, specific business workflows, integration with proprietary systems, industry-specific capabilities, or consistent handling of routine processes. Evaluate ROI and maintenance needs.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert"
  },
  {
    id: 129,
    question: "How does Copilot help with content accessibility?",
    options: [
      "It doesn't address accessibility",
      "It can suggest alt text for images, improve readability, and check formatting for accessibility standards",
      "It only works with screen readers",
      "It removes all formatting"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports accessibility by suggesting descriptive alt text for images, improving content readability and structure, checking heading hierarchy, suggesting plain language alternatives, and helping ensure content meets accessibility standards.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 130,
    question: "What is the recommended frequency for reviewing Copilot usage analytics?",
    options: [
      "Never review usage data",
      "Regularly review to understand adoption, identify power users, and discover improvement opportunities",
      "Only review annually",
      "Only IT should review, never business users"
    ],
    correctAnswer: 1,
    explanation: "Regularly review Copilot usage analytics to track adoption rates, identify power users who can be champions, discover popular use cases, identify training needs, measure productivity impact, and find opportunities for optimization and custom agents.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 131,
    question: "Which of the following scenarios shows effective prompt iteration?",
    options: [
      "Accepting the first response without refinement",
      "Starting broad, adding specific context, refining based on results, and adjusting tone",
      "Using identical prompts repeatedly",
      "Changing prompts randomly without learning"
    ],
    correctAnswer: 1,
    explanation: "Effective prompt iteration involves starting with a clear request, reviewing results, adding specific context or examples, refining based on what worked, adjusting tone or format, and building on successful patterns. It's a learning process.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 132,
    question: "How can Copilot support decision-making processes?",
    options: [
      "It makes all decisions automatically",
      "It can analyze options, summarize pros/cons, research information, but humans make final decisions",
      "It replaces the need for meetings",
      "It eliminates the need for data analysis"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports decision-making by analyzing options, summarizing pros and cons, researching relevant information, identifying potential risks, synthesizing data, and presenting insights. However, humans must make final decisions using judgment and context.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 133,
    question: "What is the purpose of knowledge sources in a custom Copilot agent?",
    options: [
      "To restrict what users can access",
      "To provide specialized information that grounds the agent's responses in organizational content",
      "To replace Microsoft 365 data entirely",
      "To slow down response times"
    ],
    correctAnswer: 1,
    explanation: "Knowledge sources (SharePoint sites, files, databases) provide custom agents with specialized, organization-specific information. This grounds responses in accurate, current, relevant content and enables agents to handle domain-specific queries effectively.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert"
  },
  {
    id: 134,
    question: "How should organizations measure Copilot's business impact?",
    options: [
      "Only count number of prompts",
      "Track time savings, quality improvements, user satisfaction, and business outcomes",
      "Measure only technical performance",
      "Business impact cannot be measured"
    ],
    correctAnswer: 1,
    explanation: "Measure Copilot impact through: time savings on routine tasks, quality improvements in output, user satisfaction and adoption rates, productivity metrics, specific business outcomes, reduction in manual work, and ROI calculations.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 135,
    question: "What is a key difference between using Copilot in Microsoft 365 apps versus Copilot in Bing?",
    options: [
      "They are identical",
      "M365 Copilot accesses your organizational data with permissions; Bing Copilot uses public internet",
      "Bing Copilot is more powerful",
      "M365 Copilot doesn't use AI"
    ],
    correctAnswer: 1,
    explanation: "Microsoft 365 Copilot works with your organizational data within security boundaries and respects permissions. Bing Copilot (now Copilot for web) searches public internet information. They serve different purposes and have different data access.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 136,
    question: "How can Copilot assist with onboarding new employees?",
    options: [
      "It replaces all human interaction",
      "It can create personalized onboarding plans, answer common questions, and provide relevant resources",
      "It only handles technical setup",
      "It's not suitable for HR processes"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports onboarding by creating personalized plans, answering frequent questions, summarizing policies and procedures, connecting new hires to relevant resources, drafting welcome communications, and providing consistent information at scale.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 137,
    question: "What is the role of feedback in improving Copilot responses?",
    options: [
      "Feedback is unnecessary",
      "User feedback helps refine prompts, improve features, and train the model over time",
      "Only developers can provide feedback",
      "Feedback only affects local performance"
    ],
    correctAnswer: 1,
    explanation: "User feedback is valuable for improving Copilot. Thumbs up/down and detailed feedback help you refine prompts immediately, signal quality to Microsoft for product improvements, and contribute to model refinement over time (without compromising data privacy).",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 138,
    question: "Which of the following describes a multi-select question?",
    options: [
      "A question with only one correct answer",
      "A question requiring selection of multiple correct answers from available options",
      "A question with no correct answers",
      "A question that cannot be answered"
    ],
    correctAnswer: 1,
    explanation: "Multi-select questions require identifying all correct answers from the available options. They test deeper understanding by requiring recognition of multiple valid concepts or solutions, unlike single-answer questions.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation",
    questionType: "multiple",
    correctAnswers: [1],
    selectCount: 1
  },
  {
    id: 139,
    question: "What are the primary benefits of using Copilot for content creation? (Select TWO)",
    options: [
      "Complete elimination of human creativity",
      "Faster initial draft creation",
      "Automatic content approval without review",
      "Improved consistency in tone and style",
      "Guaranteed 100% accuracy"
    ],
    correctAnswer: [1, 3],
    explanation: "Copilot's main content creation benefits are faster initial drafts and improved consistency. It accelerates the writing process and helps maintain consistent tone/style across documents. However, human creativity, review, and accuracy verification remain essential.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied",
    questionType: "multiple",
    correctAnswers: [1, 3],
    selectCount: 2
  },
  {
    id: 140,
    question: "Which scenarios are appropriate for using custom Copilot agents? (Select THREE)",
    options: [
      "Accessing HR policies and procedures",
      "Replacing all human customer service",
      "Technical support for specific products",
      "Completely automating executive decisions",
      "Industry-specific compliance guidance",
      "Bypassing security protocols"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Appropriate custom agent scenarios include: providing quick access to HR policies, offering technical support with product knowledge, and delivering industry-specific compliance guidance. Agents augment human work but don't replace judgment or bypass security.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 141,
    question: "What elements make a prompt more effective? (Select THREE)",
    options: [
      "Being vague to let AI decide",
      "Providing clear context and role",
      "Including specific examples",
      "Using complex jargon unnecessarily",
      "Specifying desired format or structure",
      "Writing in all caps"
    ],
    correctAnswer: [1, 2, 4],
    explanation: "Effective prompts include: clear context about your role and audience, specific examples of what you want, and desired output format/structure. Vague requests, unnecessary jargon, and formatting gimmicks reduce effectiveness.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied",
    questionType: "multiple",
    correctAnswers: [1, 2, 4],
    selectCount: 3
  },
  {
    id: 142,
    question: "Which responsibilities must remain with humans when using AI? (Select THREE)",
    options: [
      "Final decision-making authority",
      "All data entry tasks",
      "Ethical oversight and accountability",
      "Basic email responses",
      "Fact verification and accuracy",
      "Routine data formatting"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Humans must retain: final decision-making authority, ethical oversight and accountability for AI use, and responsibility for verifying facts and accuracy. While AI can assist with many tasks, human judgment and accountability are irreplaceable.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 143,
    question: "What are key considerations for Copilot security? (Select TWO)",
    options: [
      "Copilot bypasses all security controls",
      "Existing permissions are respected",
      "All data is publicly accessible",
      "Data stays within compliance boundaries",
      "Security policies don't apply to AI"
    ],
    correctAnswer: [1, 3],
    explanation: "Copilot respects existing permissions and security controls, and keeps data within your organization's compliance boundaries. It doesn't bypass security or make data public. All organizational security policies continue to apply.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation",
    questionType: "multiple",
    correctAnswers: [1, 3],
    selectCount: 2
  },
  {
    id: 144,
    question: "Which Microsoft 365 apps have Copilot integration? (Select THREE)",
    options: [
      "Microsoft Word",
      "Microsoft Paint",
      "Microsoft Teams",
      "Windows Calculator",
      "Microsoft Outlook",
      "Minesweeper"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Copilot is integrated into core Microsoft 365 productivity apps including Word, Teams, Outlook, Excel, PowerPoint, OneNote, and other business applications. It's not available in basic utilities or games.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Foundation",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 145,
    question: "What factors affect Copilot response quality? (Select THREE)",
    options: [
      "Prompt clarity and specificity",
      "Time of day",
      "Available organizational data",
      "User's computer brand",
      "Context provided in the request",
      "Moon phase"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Copilot response quality depends on: prompt clarity and specificity, availability and quality of relevant organizational data, and context provided in requests. External factors like time of day or hardware brand don't affect response quality.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 146,
    question: "Which statements about responsible AI are true? (Select TWO)",
    options: [
      "AI systems are always unbiased",
      "Human oversight is essential",
      "Privacy doesn't matter with AI",
      "Transparency builds trust",
      "AI output never needs verification"
    ],
    correctAnswer: [1, 3],
    explanation: "Responsible AI requires human oversight and transparency. AI systems can have biases and require monitoring. Privacy remains crucial. All AI output needs verification. Transparency about AI capabilities and limitations builds appropriate trust.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation",
    questionType: "multiple",
    correctAnswers: [1, 3],
    selectCount: 2
  },
  {
    id: 147,
    question: "What are valid ways to improve Copilot adoption? (Select THREE)",
    options: [
      "Mandatory usage without training",
      "Providing clear use case examples",
      "Offering hands-on training sessions",
      "Restricting access to only executives",
      "Creating internal champions and success stories",
      "No communication about the tool"
    ],
    correctAnswer: [1, 2, 4],
    explanation: "Effective adoption strategies include: providing clear use case examples, offering comprehensive training, and creating champions who share success stories. Mandatory use without training, restricted access, and poor communication hinder adoption.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied",
    questionType: "multiple",
    correctAnswers: [1, 2, 4],
    selectCount: 3
  },
  {
    id: 148,
    question: "How can you ensure Copilot responses align with your organization's brand voice?",
    options: [
      "Copilot automatically knows your brand voice",
      "Provide examples, tone guidance, and brand guidelines in your prompts",
      "Brand voice cannot be influenced",
      "Only marketing can use Copilot"
    ],
    correctAnswer: 1,
    explanation: "Ensure brand alignment by including tone guidance, brand voice examples, and relevant brand guidelines in your prompts. You can also reference style guides and provide sample content that reflects your organization's communication standards.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 149,
    question: "What is the primary advantage of declarative agents over custom engine agents?",
    options: [
      "Declarative agents are more powerful",
      "Declarative agents require no code and are easier to create and maintain",
      "Declarative agents work faster",
      "Declarative agents have unlimited capabilities"
    ],
    correctAnswer: 1,
    explanation: "Declarative agents can be created without code using instructions, knowledge sources, and actions. This makes them accessible to business users and easier to maintain. Custom engine agents require development but offer more advanced capabilities for complex scenarios.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert"
  },
  {
    id: 150,
    question: "How does Copilot support continuous learning and skill development?",
    options: [
      "It replaces the need for learning",
      "It provides real-time suggestions, examples, and explanations that teach while assisting",
      "It only works for trained experts",
      "It prevents skill development"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports learning by providing real-time suggestions with explanations, showing examples of best practices, coaching on writing and communication, and helping users understand concepts while completing tasks. It's a learning tool, not a replacement for development.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 151,
    question: "What is the best approach when Copilot generates content that contains potential inaccuracies?",
    options: [
      "Immediately share it without verification",
      "Verify facts, cross-reference sources, and correct inaccuracies before use",
      "Assume all AI content is accurate",
      "Ignore the inaccuracies"
    ],
    correctAnswer: 1,
    explanation: "Always verify factual claims in AI-generated content. Cross-reference with reliable sources, check dates and statistics, validate technical details, and correct any inaccuracies before using or sharing content. AI can hallucinate or provide outdated information.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 152,
    question: "How can Copilot assist with competitive analysis?",
    options: [
      "It automatically hacks competitor systems",
      "It can summarize public information, identify trends, and synthesize market insights",
      "It provides insider information",
      "It creates fake competitor data"
    ],
    correctAnswer: 1,
    explanation: "Copilot assists competitive analysis by summarizing publicly available information, identifying market trends, synthesizing insights from reports, comparing features, and organizing research. It only works with ethical, legal, publicly available information.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 153,
    question: "What role does Copilot play in meeting follow-ups?",
    options: [
      "It attends future meetings automatically",
      "It can draft follow-up emails, summarize action items, and schedule next steps",
      "It replaces all meeting participants",
      "It cancels unnecessary meetings"
    ],
    correctAnswer: 1,
    explanation: "Copilot helps with meeting follow-ups by drafting follow-up communications, summarizing decisions and action items, creating task lists, scheduling next steps, and ensuring accountability. It streamlines post-meeting workflow.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied"
  },
  {
    id: 154,
    question: "Which consideration is most important when using Copilot for financial reporting?",
    options: [
      "Speed of report generation",
      "Accuracy, compliance with regulations, and verification of all calculations",
      "Visual design only",
      "Minimizing review time"
    ],
    correctAnswer: 1,
    explanation: "Financial reporting requires extreme accuracy, regulatory compliance, and thorough verification. Always verify calculations, ensure compliance with accounting standards, validate data sources, and have appropriate oversight before using Copilot-generated financial content.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 155,
    question: "How can Copilot support knowledge management in organizations?",
    options: [
      "By deleting old documents automatically",
      "By summarizing documents, creating FAQs, and making information more discoverable",
      "By restricting access to information",
      "By replacing all documentation"
    ],
    correctAnswer: 1,
    explanation: "Copilot enhances knowledge management by summarizing long documents, extracting key information, creating FAQs, organizing content, improving searchability, and making institutional knowledge more accessible while respecting permissions.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 156,
    question: "What is a key benefit of using Copilot for data visualization in Excel?",
    options: [
      "It only creates pie charts",
      "It can suggest appropriate chart types based on data and provide insights",
      "It prevents manual chart creation",
      "It requires advanced Excel expertise"
    ],
    correctAnswer: 1,
    explanation: "Copilot in Excel helps with data visualization by analyzing data to suggest appropriate chart types, creating visualizations, highlighting trends, and providing insights about what the data shows. It makes data visualization more accessible.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied"
  },
  {
    id: 157,
    question: "How should organizations handle Copilot-generated code or technical content?",
    options: [
      "Deploy immediately without testing",
      "Review for security, test thoroughly, and validate against best practices",
      "Assume all generated code is production-ready",
      "Skip code review processes"
    ],
    correctAnswer: 1,
    explanation: "Copilot-generated code requires careful review for security vulnerabilities, thorough testing, validation against coding standards, performance evaluation, and compliance with organizational practices. Never deploy AI-generated code without proper review and testing.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 158,
    question: "What is the purpose of the Copilot Lab?",
    options: [
      "Physical testing facility for hardware",
      "Resource for learning prompts, exploring use cases, and sharing best practices",
      "Laboratory equipment ordering system",
      "Scientific research database"
    ],
    correctAnswer: 1,
    explanation: "Copilot Lab is a resource that provides prompt examples, demonstrates use cases across different scenarios, shares best practices, and helps users learn effective ways to interact with Copilot. It's a learning and discovery tool.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 159,
    question: "How can Copilot assist with event planning?",
    options: [
      "It physically attends events",
      "It can create agendas, draft invitations, suggest logistics, and summarize requirements",
      "It only books venues",
      "It replaces event coordinators"
    ],
    correctAnswer: 1,
    explanation: "Copilot assists event planning by creating detailed agendas, drafting invitation communications, suggesting logistics and considerations, summarizing requirements, creating checklists, and helping coordinate planning activities. Humans manage actual execution.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 160,
    question: "What is the relationship between Copilot and Power Platform?",
    options: [
      "They are completely separate with no integration",
      "Copilot can be extended with Power Platform tools and custom connectors",
      "Power Platform replaces Copilot",
      "They only share licensing"
    ],
    correctAnswer: 1,
    explanation: "Copilot integrates with Power Platform through Copilot Studio, allowing creation of custom agents, plugins using Power Automate flows, connections to Dataverse and custom data sources, and extension of capabilities with Power Apps.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert"
  },
  {
    id: 161,
    question: "How does Copilot handle confidential or sensitive information?",
    options: [
      "It shares all information publicly",
      "It respects data classification labels and permission boundaries",
      "It removes all sensitivity labels",
      "It stores sensitive data separately"
    ],
    correctAnswer: 1,
    explanation: "Copilot respects Microsoft Purview sensitivity labels, data loss prevention policies, and permission boundaries. It doesn't access or share information users don't have permission to see and maintains organizational security and compliance controls.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 162,
    question: "What is a best practice for using Copilot in cross-functional teams?",
    options: [
      "Restrict usage to one department only",
      "Share effective prompts and use cases, collaborate on best practices",
      "Keep all Copilot usage secret",
      "Prevent communication about AI usage"
    ],
    correctAnswer: 1,
    explanation: "Cross-functional teams should share effective prompts, document successful use cases, collaborate on best practices, learn from each other's experiences, and create a community of practice around Copilot usage to maximize organizational benefit.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 163,
    question: "How can Copilot support sales and proposal development?",
    options: [
      "It closes deals automatically",
      "It can draft proposals, research prospects, personalize outreach, and summarize client needs",
      "It makes pricing decisions",
      "It replaces sales representatives"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports sales by drafting customized proposals, researching prospect companies, personalizing outreach based on context, summarizing client needs from communications, creating presentation materials, and helping with follow-up. Sales judgment remains human.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 164,
    question: "What is the recommended approach for testing custom Copilot agents before deployment?",
    options: [
      "Deploy to all users immediately",
      "Test with pilot users, gather feedback, refine, and scale gradually",
      "Skip testing entirely",
      "Test only technical functionality"
    ],
    correctAnswer: 1,
    explanation: "Test custom agents with representative pilot users, gather feedback on accuracy and usefulness, refine instructions and knowledge sources, validate business value, address issues, and scale gradually with ongoing monitoring and improvement.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert"
  },
  {
    id: 165,
    question: "How does Copilot assist with technical documentation?",
    options: [
      "It only formats existing documentation",
      "It can draft documentation, explain technical concepts, and create user guides",
      "It eliminates the need for documentation",
      "It works only with code comments"
    ],
    correctAnswer: 1,
    explanation: "Copilot assists technical documentation by drafting clear explanations of technical concepts, creating user guides and how-to content, documenting processes, generating API documentation, and translating technical details for different audiences.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 166,
    question: "What factors determine whether to build a custom agent or use standard Copilot?",
    options: [
      "Always build custom agents",
      "Consider specificity of use case, need for specialized knowledge, frequency of use, and ROI",
      "Never build custom agents",
      "Only technical complexity matters"
    ],
    correctAnswer: 1,
    explanation: "Evaluate: specificity and uniqueness of use case, need for specialized knowledge sources, frequency of use and user volume, integration requirements, maintenance capacity, and expected ROI. Standard Copilot works well for general scenarios.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert"
  },
  {
    id: 167,
    question: "How can Copilot support compliance and audit requirements?",
    options: [
      "It eliminates compliance requirements",
      "It can help document processes, maintain records, and ensure consistency in compliance activities",
      "It bypasses audit trails",
      "It replaces compliance officers"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports compliance by helping document processes and procedures, maintaining consistent record-keeping, drafting compliance communications, summarizing regulatory requirements, and supporting audit preparation. Compliance oversight remains with qualified professionals.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 168,
    question: "What is the role of natural language understanding in Copilot?",
    options: [
      "It only recognizes keywords",
      "It interprets intent, context, and meaning to provide relevant responses",
      "It translates everything to English",
      "It has no role in Copilot"
    ],
    correctAnswer: 1,
    explanation: "Natural language understanding enables Copilot to interpret user intent, understand context and nuance, process conversational requests, recognize relationships between concepts, and provide contextually relevant responses rather than just matching keywords.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 169,
    question: "How should organizations approach Copilot training for different roles?",
    options: [
      "One-size-fits-all training for everyone",
      "Role-specific training with relevant use cases and examples for each function",
      "No training necessary",
      "Only train IT staff"
    ],
    correctAnswer: 1,
    explanation: "Effective training is role-specific, showing relevant use cases for each function (sales, HR, finance, etc.), providing applicable examples, demonstrating workflow integration, and addressing role-specific concerns and opportunities.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 170,
    question: "What are valid ways to extend Copilot capabilities? (Select THREE)",
    options: [
      "Creating custom agents with Copilot Studio",
      "Ignoring organizational needs",
      "Building plugins for specific integrations",
      "Avoiding all customization",
      "Connecting to external data sources",
      "Disabling core features"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Extend Copilot through: custom agents in Copilot Studio with specialized knowledge, plugins for specific integrations and actions, and connections to external data sources. Avoiding customization or disabling features limits value.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 171,
    question: "Which practices improve Copilot response quality in Excel? (Select TWO)",
    options: [
      "Using unclear column headers",
      "Providing context about what data represents",
      "Removing all data labels",
      "Asking specific questions about the analysis needed",
      "Avoiding any data formatting"
    ],
    correctAnswer: [1, 3],
    explanation: "Improve Excel Copilot responses by providing clear context about what your data represents and asking specific questions about the analysis you need. Clear headers, proper formatting, and specific requests lead to better results.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied",
    questionType: "multiple",
    correctAnswers: [1, 3],
    selectCount: 2
  },
  {
    id: 172,
    question: "What should be included in agent instructions? (Select THREE)",
    options: [
      "Agent's purpose and role",
      "Intentionally confusing directions",
      "Expected behavior and tone",
      "Completely unrestricted capabilities",
      "Examples of good responses",
      "Contradictory requirements"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Effective agent instructions include: clear purpose and role definition, expected behavior and communication tone, examples of good responses, boundaries and limitations, and guidance for handling edge cases. Avoid confusion and contradictions.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 173,
    question: "Which metrics indicate successful Copilot adoption? (Select THREE)",
    options: [
      "Increasing active user percentage",
      "Decreasing all AI usage",
      "Positive user satisfaction scores",
      "Complete elimination of human work",
      "Measurable productivity improvements",
      "Zero questions asked"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Success metrics include: growing percentage of active users, positive satisfaction and NPS scores, measurable time savings and productivity gains, diverse use case adoption, and quality improvements. AI augments rather than eliminates human work.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 174,
    question: "What are characteristics of effective Copilot prompts for content creation? (Select THREE)",
    options: [
      "Clear specification of audience and purpose",
      "Maximum vagueness",
      "Relevant context and background",
      "No examples or guidance",
      "Desired format and structure",
      "Contradictory requirements"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Effective prompts specify: target audience and content purpose, relevant context and background information, and desired format/structure. Vague requests, missing examples, and contradictions produce poor results.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 175,
    question: "Which are valid knowledge sources for custom agents? (Select THREE)",
    options: [
      "SharePoint sites",
      "Random internet websites",
      "OneDrive files and folders",
      "Competitor's private systems",
      "Dataverse tables",
      "Illegal content repositories"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Valid knowledge sources include: SharePoint sites with appropriate content, OneDrive files and folders, Dataverse tables, approved web content, and other organizational data. Use only legal, ethical, authorized sources.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 176,
    question: "What governance considerations apply to Copilot usage? (Select TWO)",
    options: [
      "Data privacy and protection policies",
      "Unlimited access for everyone",
      "Appropriate use guidelines",
      "No oversight needed",
      "Ignoring compliance requirements"
    ],
    correctAnswer: [0, 2],
    explanation: "Governance requires: clear data privacy and protection policies, appropriate use guidelines, compliance with regulations, access controls, monitoring and auditing, and accountability frameworks. Unlimited access and no oversight create risks.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied",
    questionType: "multiple",
    correctAnswers: [0, 2],
    selectCount: 2
  },
  {
    id: 177,
    question: "Which scenarios benefit from Copilot in Teams? (Select THREE)",
    options: [
      "Meeting summaries and action items",
      "Replacing all team members",
      "Drafting chat responses",
      "Eliminating human communication",
      "Catching up on missed conversations",
      "Avoiding all meetings"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Copilot in Teams helps with: generating meeting summaries and action items, drafting appropriate chat responses, catching up on missed conversations, answering questions about discussions. It enhances rather than replaces human collaboration.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 178,
    question: "What are key components of a Copilot adoption strategy? (Select THREE)",
    options: [
      "Executive sponsorship and support",
      "Mandatory usage without explanation",
      "Clear communication and training",
      "Restricting access arbitrarily",
      "Measuring and sharing success stories",
      "Hiding all metrics"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Successful adoption requires: executive sponsorship and visible support, clear communication about value and training resources, and measurement/sharing of success stories. Forced adoption without training or hidden metrics hinder success.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 179,
    question: "Which represent responsible AI practices with Copilot? (Select TWO)",
    options: [
      "Reviewing output for potential bias",
      "Assuming AI is always neutral",
      "Verifying factual accuracy before sharing",
      "Never questioning AI responses",
      "Ignoring ethical considerations"
    ],
    correctAnswer: [0, 2],
    explanation: "Responsible practices include: reviewing output for potential bias or inappropriate content, and verifying factual accuracy before sharing. Never assume AI is always neutral or accurate. Always apply ethical considerations and human judgment.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation",
    questionType: "multiple",
    correctAnswers: [0, 2],
    selectCount: 2
  },
  {
    id: 180,
    question: "How can Copilot support HR and talent management?",
    options: [
      "By making all hiring decisions autonomously",
      "By drafting job descriptions, summarizing resumes, and creating onboarding materials",
      "By conducting interviews without humans",
      "By automatically firing employees"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports HR by drafting compelling job descriptions, summarizing candidate qualifications, creating onboarding and training materials, developing policies, and handling routine communications. Human judgment is essential for all hiring and personnel decisions.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 181,
    question: "What is the benefit of using Copilot with Microsoft Loop?",
    options: [
      "Loop and Copilot don't integrate",
      "Copilot can help create, organize, and update collaborative workspaces and components",
      "It only works for individual tasks",
      "It prevents real-time collaboration"
    ],
    correctAnswer: 1,
    explanation: "Copilot enhances Loop by helping create and organize collaborative workspaces, draft and update Loop components, summarize discussions, generate project plans, and assist with real-time collaborative content creation across teams.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied"
  },
  {
    id: 182,
    question: "How should organizations handle Copilot usage in regulated industries?",
    options: [
      "Avoid Copilot entirely",
      "Implement appropriate controls, compliance validation, and audit trails while leveraging benefits",
      "Use without any additional safeguards",
      "Only use offline mode"
    ],
    correctAnswer: 1,
    explanation: "Regulated industries can use Copilot effectively by implementing appropriate controls, validating compliance with regulations, maintaining audit trails, reviewing output for regulatory adherence, and balancing innovation with necessary safeguards.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 183,
    question: "What role does context switching play in Copilot productivity?",
    options: [
      "Context switching has no impact",
      "Copilot reduces context switching by providing assistance within the flow of work",
      "Copilot increases context switching",
      "Context switching only affects multitasking"
    ],
    correctAnswer: 1,
    explanation: "Copilot reduces productivity-killing context switching by providing assistance within the apps you're already using, answering questions without leaving your workflow, and bringing relevant information to you rather than requiring searches across multiple systems.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 184,
    question: "How can Copilot assist with crisis communication?",
    options: [
      "It cannot be used in crisis situations",
      "It can help draft rapid communications, maintain message consistency, and scale responses",
      "It replaces crisis management teams",
      "It makes crisis decisions autonomously"
    ],
    correctAnswer: 1,
    explanation: "During crises, Copilot helps draft timely communications, maintain consistent messaging across channels, scale responses to high volumes of inquiries, and support internal coordination. Human leadership and judgment remain critical for crisis management.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 185,
    question: "What is a key consideration for Copilot prompt engineering in technical fields?",
    options: [
      "Avoid all technical terminology",
      "Include precise technical context, specifications, and domain-specific requirements",
      "Use only simple language",
      "Technical prompts don't need special consideration"
    ],
    correctAnswer: 1,
    explanation: "Technical prompts benefit from precise terminology, specific technical context, clear specifications, relevant standards or frameworks, and domain-specific requirements. Appropriate technical language improves accuracy for specialized fields.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 186,
    question: "How does Copilot support innovation and ideation?",
    options: [
      "It replaces human creativity",
      "It can brainstorm ideas, explore alternatives, and help develop concepts collaboratively",
      "It only works with predefined ideas",
      "Innovation requires no AI assistance"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports innovation by brainstorming multiple ideas rapidly, exploring alternative approaches, helping develop and refine concepts, identifying potential challenges, and augmenting human creativity. It's a collaborator in the creative process.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 187,
    question: "What distinguishes enterprise Copilot capabilities from consumer AI assistants?",
    options: [
      "No meaningful differences exist",
      "Enterprise integration with organizational data, security controls, and compliance features",
      "Consumer versions are more powerful",
      "Only licensing differs"
    ],
    correctAnswer: 1,
    explanation: "Enterprise Copilot provides integration with organizational Microsoft 365 data, respect for security and permissions, compliance features, commercial data protection, admin controls, and enterprise-grade support that consumer AI assistants lack.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  },
  {
    id: 188,
    question: "How can Copilot help with policy and procedure documentation?",
    options: [
      "It automatically enforces all policies",
      "It can draft policies, ensure consistency, translate complex rules into clear language",
      "It replaces policy committees",
      "It only formats existing policies"
    ],
    correctAnswer: 1,
    explanation: "Copilot assists policy documentation by drafting clear policies, ensuring consistent language and formatting, translating complex regulations into understandable terms, creating FAQs, and updating documentation. Subject matter experts provide content and approval.",
    domain: "Draft and analyze business content by using AI",
    difficulty: "Applied"
  },
  {
    id: 189,
    question: "What is the role of feedback loops in improving custom agent performance?",
    options: [
      "Feedback is unnecessary for agents",
      "Regular feedback helps identify gaps, refine instructions, and improve knowledge sources",
      "Agents cannot improve after deployment",
      "Only technical errors need feedback"
    ],
    correctAnswer: 1,
    explanation: "Continuous feedback from users helps identify knowledge gaps, refine agent instructions, improve response quality, update knowledge sources, adjust tone and behavior, and ensure agents evolve to meet changing needs effectively.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert"
  },
  {
    id: 190,
    question: "How should organizations balance Copilot automation with human judgment?",
    options: [
      "Maximize automation, minimize human involvement",
      "Use Copilot for efficiency while maintaining human oversight for critical decisions",
      "Avoid all automation",
      "Humans and AI should work separately"
    ],
    correctAnswer: 1,
    explanation: "Effective balance uses Copilot for efficiency in routine tasks, content creation, and analysis while maintaining human judgment for strategic decisions, ethical considerations, complex situations, and final accountability. It's collaborative intelligence.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 191,
    question: "What are key success factors for Copilot implementation? (Select THREE)",
    options: [
      "Clear use case identification",
      "No training or support",
      "Executive sponsorship",
      "Restricting to single department",
      "Continuous learning and improvement",
      "Avoiding all measurement"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Implementation success requires: identifying clear, valuable use cases, strong executive sponsorship and support, and commitment to continuous learning and improvement. Lack of training, restricted access, and no measurement limit success.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 192,
    question: "Which capabilities can custom Copilot agents provide? (Select THREE)",
    options: [
      "Access to specialized knowledge bases",
      "Unlimited system access",
      "Integration with line-of-business applications",
      "Bypassing security policies",
      "Automated workflows for specific processes",
      "Eliminating all manual work"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Custom agents can provide: access to specialized organizational knowledge, integration with LOB applications and data, and automated workflows for specific processes. They must respect security and cannot eliminate all human involvement.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 193,
    question: "What should be monitored in Copilot usage? (Select TWO)",
    options: [
      "Adoption rates and active users",
      "Every individual keystroke",
      "User satisfaction and feedback",
      "Personal conversations",
      "Private communications"
    ],
    correctAnswer: [0, 2],
    explanation: "Monitor: adoption rates and active user metrics, user satisfaction scores and feedback, productivity impacts, and use case patterns. Respect privacy by not monitoring individual content, keystrokes, or private communications.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied",
    questionType: "multiple",
    correctAnswers: [0, 2],
    selectCount: 2
  },
  {
    id: 194,
    question: "Which practices enhance Copilot effectiveness in PowerPoint? (Select TWO)",
    options: [
      "Providing clear presentation objectives",
      "Using no structure or outline",
      "Specifying target audience",
      "Requesting maximum slides only",
      "Avoiding all context"
    ],
    correctAnswer: [0, 2],
    explanation: "Enhance PowerPoint Copilot by providing clear presentation objectives and goals, and specifying target audience and their knowledge level. Structure, context, and appropriate scope improve results over vague requests.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied",
    questionType: "multiple",
    correctAnswers: [0, 2],
    selectCount: 2
  },
  {
    id: 195,
    question: "What elements support agent reliability? (Select THREE)",
    options: [
      "Well-structured knowledge sources",
      "Contradictory instructions",
      "Clear boundaries and limitations",
      "Unlimited capabilities",
      "Regular testing and updates",
      "No quality control"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Agent reliability requires: well-organized, accurate knowledge sources, clear definition of boundaries and limitations, and regular testing with updates. Contradictions, overpromised capabilities, and no quality control reduce reliability.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 196,
    question: "Which represent ethical considerations for Copilot use? (Select THREE)",
    options: [
      "Transparency about AI involvement",
      "Hiding all AI usage",
      "Accountability for outputs",
      "Blaming AI for all errors",
      "Fairness and bias awareness",
      "Ignoring ethical guidelines"
    ],
    correctAnswer: [0, 2, 4],
    explanation: "Ethical use requires: transparency about AI involvement in content, maintaining accountability for outputs and decisions, and awareness of fairness and potential bias. Hiding usage, deflecting responsibility, and ignoring ethics are problematic.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation",
    questionType: "multiple",
    correctAnswers: [0, 2, 4],
    selectCount: 3
  },
  {
    id: 197,
    question: "How can organizations create a culture that embraces Copilot?",
    options: [
      "Force adoption without support",
      "Encourage experimentation, share successes, provide training, and celebrate innovation",
      "Penalize those who use it",
      "Keep usage secret from leadership"
    ],
    correctAnswer: 1,
    explanation: "Build positive culture by encouraging safe experimentation, celebrating and sharing success stories, providing comprehensive training and resources, recognizing champions, supporting learning, and demonstrating leadership commitment to AI-augmented work.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Applied"
  },
  {
    id: 198,
    question: "What is the importance of version control for custom Copilot agents?",
    options: [
      "Version control is not needed",
      "Track changes, enable rollback, maintain documentation, and manage updates systematically",
      "Only initial versions matter",
      "Agents never need updates"
    ],
    correctAnswer: 1,
    explanation: "Version control for agents enables tracking changes to instructions and knowledge sources, rolling back problematic updates, maintaining documentation of iterations, managing systematic improvements, and ensuring consistency across agent versions.",
    domain: "Extend and customize Copilot with agents",
    difficulty: "Expert"
  },
  {
    id: 199,
    question: "How does Copilot support multilingual business operations?",
    options: [
      "It only works in one language per organization",
      "It can assist with translation, localization, and communication across language barriers",
      "Multilingual support requires separate licenses",
      "Language capabilities are extremely limited"
    ],
    correctAnswer: 1,
    explanation: "Copilot supports multilingual operations by assisting with translation, helping localize content for different markets, facilitating cross-language communication, and working in users' preferred languages, though capabilities vary by language.",
    domain: "Leverage AI in productivity apps",
    difficulty: "Applied"
  },
  {
    id: 200,
    question: "What represents the future direction of Copilot capabilities?",
    options: [
      "Static features with no evolution",
      "Expanding integrations, enhanced customization, deeper reasoning, and broader application scenarios",
      "Decreasing functionality over time",
      "Complete replacement of all software"
    ],
    correctAnswer: 1,
    explanation: "Copilot continues evolving with expanded integrations across more applications, enhanced customization through agents and plugins, improved reasoning capabilities, broader application scenarios, and deeper Microsoft 365 and third-party connections to maximize business value.",
    domain: "Understand generative AI fundamentals",
    difficulty: "Foundation"
  }
];

export default AB730Questions;
