// SAFe for Teams 6.0 Practice Exam Questions - Professional Edition
// Comprehensive question bank with length bias prevention and professional-grade content
// Domain Distribution: Team & Technical Agility (35%), Agile Product Delivery (35%), Enterprise Solution Delivery (15%), Business Agility (15%)

export const safeTeams6Questions = [
  // ========================================
  // TEAM AND TECHNICAL AGILITY (70 questions total - 35%)
  // ========================================
  
  // Scrum/XP Foundations & Team Practices (Questions 1-25)
  {
    id: 1,
    question: "What is the primary purpose of the Daily Stand-up in SAFe?",
    options: [
      "To provide comprehensive progress reports to management and stakeholders for project tracking purposes",
      "To synchronize team activities, identify impediments, and coordinate daily work efforts effectively",
      "To assign detailed new work assignments to individual team members based on their capacity",
      "To conduct thorough reviews and formal approvals of all completed work items and deliverables"
    ],
    correctAnswer: 1,
    explanation: "The Daily Stand-up (Daily Scrum) is a synchronization event where team members coordinate their work, identify impediments, and plan their day. It's not a status report to management but a team coordination mechanism focused on team self-organization and collaboration.",
    domain: "Team and Technical Agility",
    difficulty: "Foundation"
  },
  {
    id: 2,
    question: "What is the recommended duration for a SAFe Team Iteration?",
    options: [
      "One week to maintain rapid feedback cycles and minimize planning overhead across teams",
      "Two weeks to balance planning efficiency with sustainable delivery cadence and quality",
      "Three weeks to accommodate complex feature development and comprehensive testing requirements",
      "Four weeks to allow comprehensive planning and thorough quality assurance processes"
    ],
    correctAnswer: 1,
    explanation: "SAFe recommends 2-week iterations as the standard timeframe. This provides a good balance between planning overhead and feedback frequency, allowing teams to deliver value incrementally while maintaining sustainable pace and alignment with Program Increment timing.",
    domain: "Team and Technical Agility",
    difficulty: "Foundation"
  },
  {
    id: 3,
    question: "Who is responsible for managing the Team Backlog in SAFe?",
    options: [
      "The Scrum Master who facilitates all team activities and continuous process improvements",
      "The Product Owner who prioritizes features and ensures maximum customer value delivery",
      "The Development Team members who understand technical implementation requirements most effectively",
      "The Release Train Engineer who coordinates cross-team dependencies and program planning"
    ],
    correctAnswer: 1,
    explanation: "The Product Owner is responsible for managing the Team Backlog, working with stakeholders to prioritize features and stories that deliver the most customer value. They ensure the backlog is refined and ready for iteration planning while maintaining alignment with business objectives.",
    domain: "Team and Technical Agility",
    difficulty: "Foundation"
  },
  {
    id: 4,
    question: "What is the primary goal of Iteration Planning in SAFe?",
    options: [
      "To assign specific tasks to individual team members based on their technical expertise",
      "To estimate effort for the entire product backlog using standardized planning poker techniques",
      "To commit to iteration goals and create a comprehensive plan for successful achievement",
      "To review previous iteration performance metrics and identify specific improvement areas"
    ],
    correctAnswer: 2,
    explanation: "Iteration Planning is where the team commits to a set of iteration goals and creates a plan to achieve them. The team selects stories from the Team Backlog and breaks them down into tasks, creating their iteration commitment based on capacity and priorities.",
    domain: "Team and Technical Agility",
    difficulty: "Foundation"
  },
  {
    id: 5,
    question: "During the Iteration Review, what is the team's main focus?",
    options: [
      "Identifying root causes of issues that occurred during the current iteration cycle",
      "Planning and preparing detailed work assignments for the next iteration development cycle",
      "Demonstrating completed functionality to stakeholders and gathering valuable feedback for improvement",
      "Updating comprehensive project documentation and maintaining detailed traceability records"
    ],
    correctAnswer: 2,
    explanation: "The Iteration Review (Sprint Review) focuses on demonstrating the completed, working functionality to stakeholders and getting feedback. It's an opportunity to inspect the increment and adapt the product based on stakeholder input and changing requirements.",
    domain: "Team and Technical Agility",
    difficulty: "Foundation"
  },
  {
    id: 6,
    question: "What is the purpose of the Iteration Retrospective?",
    options: [
      "To demonstrate completed features and functionality to external stakeholders and customers",
      "To plan detailed work assignments and technical approaches for upcoming iteration cycles",
      "To inspect and adapt team processes, practices, and collaboration methods for improvement",
      "To report comprehensive progress updates and performance metrics to management stakeholders"
    ],
    correctAnswer: 2,
    explanation: "The Iteration Retrospective is where the team reflects on their process and identifies improvements. It's focused on continuous improvement of how the team works together, their practices, and their environment to enhance effectiveness and team satisfaction.",
    domain: "Team and Technical Agility",
    difficulty: "Foundation"
  },
  {
    id: 7,
    question: "In SAFe, what does 'Story Acceptance Criteria' define?",
    options: [
      "The detailed technical implementation approach and specific architectural design decisions",
      "The specific conditions that must be met for a story to be considered done",
      "The relative priority order of user stories within the product backlog hierarchy structure",
      "The effort estimation methodology and story point calculation approach for the story"
    ],
    correctAnswer: 1,
    explanation: "Story Acceptance Criteria define the specific conditions that must be satisfied for a user story to be considered complete. They provide clear, testable conditions that guide development and acceptance testing, ensuring shared understanding of 'done' across the team.",
    domain: "Team and Technical Agility",
    difficulty: "Foundation"
  },
  {
    id: 8,
    question: "What is the role of the Scrum Master in SAFe teams?",
    options: [
      "To assign work tasks to team members and monitor individual productivity metrics",
      "To make critical technical decisions and approve all architectural design choices for projects",
      "To facilitate team events, remove impediments, and coach teams in Agile practices", 
      "To manage the product backlog and prioritize features based on business value assessment"
    ],
    correctAnswer: 2,
    explanation: "The Scrum Master is a servant leader who facilitates team events, coaches the team in Agile practices, and works to remove impediments that block the team's progress. They don't manage people or make technical decisions but enable team effectiveness and continuous improvement.",
    domain: "Team and Technical Agility",
    difficulty: "Foundation"
  },
  {
    id: 9,
    question: "What characterizes a high-performing Agile team in SAFe?",
    options: [
      "Individual specialization with clear handoffs and well-defined role boundaries throughout projects",
      "Cross-functional collaboration with shared ownership and collective accountability for outcomes",
      "Strict adherence to predefined processes with minimal deviation from established procedures",
      "Minimal interaction with stakeholders to maintain focus on technical implementation and delivery"
    ],
    correctAnswer: 1,
    explanation: "High-performing Agile teams are characterized by cross-functional collaboration, shared ownership of outcomes, continuous learning, and the ability to self-organize around delivering value to customers while maintaining high quality standards and team morale.",
    domain: "Team and Technical Agility",
    difficulty: "Intermediate"
  },
  {
    id: 10,
    question: "How should SAFe teams handle changing requirements within an iteration?",
    options: [
      "Reject all changes until the next iteration to maintain commitment integrity and focus",
      "Accept all changes regardless of their impact on current iteration goals and timelines",
      "Evaluate changes against iteration goals, team capacity, and potential business value impact",
      "Escalate all change requests to management for executive decision making and approval"
    ],
    correctAnswer: 2,
    explanation: "Teams should evaluate change requests against their iteration goals and current capacity. While Agile embraces change, teams need to protect their iteration commitment and maintain sustainable pace while being responsive to valuable changes that benefit customers.",
    domain: "Team and Technical Agility",
    difficulty: "Intermediate"
  },
  
  // Built-in Quality & Engineering Practices (Questions 11-25)
  {
    id: 11,
    question: "Which Built-in Quality practice helps teams 'shift left' on testing?",
    options: [
      "Comprehensive code reviews conducted after development work is completely finished and tested",
      "Test-Driven Development (TDD) where tests are written before implementation code is developed",
      "Manual testing performed at the end of iterations by dedicated QA specialists",
      "Quality assurance processes managed by separate quality teams and departments across organizations"
    ],
    correctAnswer: 1,
    explanation: "Test-Driven Development (TDD) shifts testing left by writing tests before code, ensuring quality is built in from the start rather than tested in later. This practice helps catch defects early and drives better design decisions throughout development.",
    domain: "Team and Technical Agility",
    difficulty: "Intermediate"
  },
  {
    id: 12,
    question: "What does the Definition of Done (DoD) ensure for a SAFe team?",
    options: [
      "All features meet customer expectations and business requirements as originally specified",
      "Work items meet agreed quality standards and consistency criteria before completion",
      "The team completes all planned work within the allocated iteration timeframe successfully",
      "Management approves all deliverables before they are considered ready for release"
    ],
    correctAnswer: 1,
    explanation: "The Definition of Done is a shared understanding of what it means for work to be complete, ensuring consistent quality standards. It includes criteria like testing, code review, and documentation requirements that must be met for any work item to be considered finished.",
    domain: "Team and Technical Agility",
    difficulty: "Foundation"
  },
  {
    id: 13,
    question: "What is the primary benefit of Continuous Integration (CI) in SAFe?",
    options: [
      "Faster individual development by reducing coordination overhead between team members working separately",
      "Early detection of integration issues through frequent code integration and automated validation processes",
      "Reduced need for comprehensive testing by automating quality assurance processes completely",
      "Elimination of code reviews by automatically validating all code quality standards and requirements"
    ],
    correctAnswer: 1,
    explanation: "Continuous Integration's primary benefit is early detection of integration issues by frequently integrating code changes. This reduces the risk and cost of fixing problems, leading to higher quality and faster delivery cycles with improved team collaboration.",
    domain: "Team and Technical Agility",
    difficulty: "Intermediate"
  },
  {
    id: 14,
    question: "In pair programming, what is the role of the 'Navigator'?",
    options: [
      "To write all the implementation code while the driver observes and learns techniques",
      "To review code quality and guide the overall strategic approach and design decisions",
      "To test the code functionality as it's being written by the driver in real-time",
      "To document the code and maintain comprehensive technical documentation records throughout development"
    ],
    correctAnswer: 1,
    explanation: "In pair programming, the Navigator reviews code as it's written, thinks about the overall approach, considers edge cases, and helps guide the direction. The Driver focuses on tactical coding while the Navigator thinks strategically about design and quality.",
    domain: "Team and Technical Agility",
    difficulty: "Intermediate"
  },
  {
    id: 15,
    question: "What is the main purpose of refactoring in Agile development?",
    options: [
      "To add new functionality and features to the existing system architecture and codebase",
      "To improve code structure and maintainability without changing external behavior or functionality",
      "To fix critical bugs and defects in the existing codebase and functionality implementation",
      "To optimize system performance and enhance runtime execution characteristics across all components"
    ],
    correctAnswer: 1,
    explanation: "Refactoring improves the internal structure and readability of code without changing its external behavior. This makes code easier to understand, modify, and extend while reducing technical debt and maintenance costs over time.",
    domain: "Team and Technical Agility",
    difficulty: "Foundation"
  },
  
  // DevOps & Continuous Delivery (Questions 16-35)
  {
    id: 16,
    question: "What is the primary goal of Continuous Delivery in SAFe?",
    options: [
      "To automatically deploy every code change directly to production environments without review",
      "To maintain software in a deployable state throughout the entire development lifecycle",
      "To eliminate all manual testing by implementing comprehensive automated test suites completely",
      "To reduce development costs by minimizing the need for dedicated operations teams"
    ],
    correctAnswer: 1,
    explanation: "Continuous Delivery ensures that software is always in a deployable state, allowing for reliable, low-risk releases at any time. It focuses on reducing the risk and effort of deployment through automation and quality practices while maintaining control over release timing.",
    domain: "Team and Technical Agility",
    difficulty: "Intermediate"
  },
  {
    id: 17,
    question: "What does 'collective code ownership' mean in SAFe teams?",
    options: [
      "All code must be approved by the team lead before integration into the main branch",
      "Every team member has the responsibility and authority to modify any part of the codebase",
      "Code ownership is rotated among team members on a weekly or monthly scheduled basis",
      "Senior developers are specifically responsible for maintaining all critical system components"
    ],
    correctAnswer: 1,
    explanation: "Collective code ownership means every team member has both the responsibility and authority to modify any part of the codebase. This reduces bottlenecks, improves knowledge sharing, and enables faster problem resolution across the entire team.",
    domain: "Team and Technical Agility",
    difficulty: "Intermediate"
  },
  {
    id: 18,
    question: "What is the main benefit of automated testing in SAFe?",
    options: [
      "Complete elimination of all manual testing efforts and quality assurance activities",
      "Fast feedback on code changes to detect issues early in the development process",
      "Reduced need for detailed documentation by providing executable specifications automatically",
      "Automatic generation of comprehensive test reports for compliance and audit purposes"
    ],
    correctAnswer: 1,
    explanation: "Automated testing provides fast feedback on code changes, allowing teams to detect issues early in the development process. This reduces the cost of fixing defects and enables more frequent, reliable releases with higher confidence in quality.",
    domain: "Team and Technical Agility",
    difficulty: "Intermediate"
  },
  {
    id: 19,
    question: "What characterizes effective code reviews in SAFe teams?",
    options: [
      "Comprehensive reviews conducted by senior developers only after all development is complete",
      "Collaborative knowledge sharing focused on code quality, standards, and continuous learning",
      "Formal approval processes that must be completed before any code can be integrated",
      "Detailed documentation requirements that ensure all changes are properly recorded and tracked"
    ],
    correctAnswer: 1,
    explanation: "Effective code reviews in SAFe are collaborative knowledge-sharing sessions focused on improving code quality, maintaining standards, and enabling continuous learning across the team. They're not just approval gates but learning and quality improvement opportunities.",
    domain: "Team and Technical Agility",
    difficulty: "Intermediate"
  },
  {
    id: 20,
    question: "How does Test-Driven Development (TDD) support Built-in Quality?",
    options: [
      "By eliminating the need for separate quality assurance teams and testing specialists",
      "By driving design decisions through tests and ensuring code meets requirements from the start",
      "By automatically generating comprehensive documentation for all implemented functionality and features",
      "By reducing development time through faster coding techniques and improved developer productivity"
    ],
    correctAnswer: 1,
    explanation: "TDD supports Built-in Quality by driving design decisions through tests, ensuring that code meets requirements from the start. Writing tests first helps clarify requirements, improves design, and creates a safety net for future changes and refactoring.",
    domain: "Team and Technical Agility",
    difficulty: "Intermediate"
  },

  // ========================================
  // AGILE PRODUCT DELIVERY (70 questions total - 35%)
  // ========================================
  
  // Customer Centricity & Design Thinking (Questions 21-35)
  {
    id: 21,
    question: "What is the primary focus of Customer Centricity in SAFe?",
    options: [
      "Maximizing revenue through aggressive sales and marketing strategies to increase market share",
      "Understanding and delivering solutions that provide genuine customer value and satisfaction",
      "Implementing the latest technology trends to stay competitive in the rapidly changing market",
      "Reducing operational costs while maintaining acceptable service quality levels for profitability"
    ],
    correctAnswer: 1,
    explanation: "Customer Centricity focuses on deeply understanding customer needs and delivering solutions that provide genuine value. This approach drives innovation, increases customer satisfaction, and creates sustainable competitive advantages in the marketplace while building long-term relationships.",
    domain: "Agile Product Delivery",
    difficulty: "Foundation"
  },
  {
    id: 22,
    question: "What is Design Thinking in the context of SAFe?",
    options: [
      "A technical approach for creating user interface designs and visual system architecture",
      "A human-centered approach to innovation that integrates customer needs with technical feasibility",
      "A project management methodology for organizing design teams and creative development processes",
      "A quality assurance process for validating design decisions against established standards and guidelines"
    ],
    correctAnswer: 1,
    explanation: "Design Thinking in SAFe is a human-centered approach to innovation that integrates the needs of people, the possibilities of technology, and requirements for business success. It helps teams understand users deeply and create solutions that truly address their needs and pain points.",
    domain: "Agile Product Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 23,
    question: "What is the purpose of creating personas in SAFe?",
    options: [
      "To assign specific development tasks to individual team members based on their expertise",
      "To represent different user types and their needs, goals, and behaviors for better design decisions",
      "To document all stakeholder requirements and expectations for comprehensive project planning",
      "To create detailed project timelines and resource allocation plans for development teams"
    ],
    correctAnswer: 1,
    explanation: "Personas represent different user types, their needs, goals, and behaviors, helping teams make better design decisions. They provide a shared understanding of users across the team and help maintain focus on user value throughout development and delivery processes.",
    domain: "Agile Product Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 24,
    question: "What is a Minimum Viable Product (MVP) in SAFe?",
    options: [
      "The smallest possible product that can be developed with minimal resources and time investment",
      "An early version of a product with enough features to satisfy early customers and validate learning",
      "A prototype used exclusively for internal testing and technical feasibility validation purposes",
      "The final product with all planned features implemented but delivered in the shortest possible timeframe"
    ],
    correctAnswer: 1,
    explanation: "An MVP is an early version of a product with just enough features to satisfy early customers and provide feedback for future product development. It's about learning and validation, not just building the smallest possible solution.",
    domain: "Agile Product Delivery",
    difficulty: "Foundation"
  },
  {
    id: 25,
    question: "How does Customer Journey Mapping support Agile Product Delivery?",
    options: [
      "By creating detailed technical specifications for all system integrations and data flows",
      "By visualizing customer interactions and identifying opportunities for value creation and improvement",
      "By establishing comprehensive project timelines and resource allocation across development teams",
      "By documenting all regulatory compliance requirements and quality assurance standards"
    ],
    correctAnswer: 1,
    explanation: "Customer Journey Mapping visualizes how customers interact with products and services over time, helping teams identify pain points, moments of delight, and opportunities for creating additional value and improving the overall customer experience.",
    domain: "Agile Product Delivery",
    difficulty: "Intermediate"
  },

  // DevOps & Release on Demand (Questions 26-40)
  {
    id: 26,
    question: "What is Release on Demand in SAFe?",
    options: [
      "The ability to release new features automatically based on predetermined schedules and timelines",
      "The capability to release valuable functionality when market timing is optimal for business success",
      "The practice of releasing all completed work at the end of each Program Increment cycle",
      "The process of releasing software only after comprehensive user acceptance testing is completed"
    ],
    correctAnswer: 1,
    explanation: "Release on Demand provides the ability to release valuable functionality when the market timing is right, rather than being constrained by development schedules. This enables business agility and competitive advantage through strategic release timing and market responsiveness.",
    domain: "Agile Product Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 27,
    question: "What is the purpose of feature toggles (feature flags) in SAFe?",
    options: [
      "To completely disable features that are experiencing technical problems or performance issues",
      "To enable controlled release of features to specific user segments without deploying new code",
      "To automatically test all features before they are made available to end users",
      "To create comprehensive audit logs of all feature usage for compliance reporting purposes"
    ],
    correctAnswer: 1,
    explanation: "Feature toggles allow teams to control the release of features to specific user segments without deploying new code. This enables safer releases, gradual rollouts, A/B testing, and the ability to quickly disable features if issues arise.",
    domain: "Agile Product Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 28,
    question: "What is the Continuous Delivery Pipeline in SAFe?",
    options: [
      "A manual process for reviewing and approving all code changes before production deployment",
      "An automated workflow that moves code from development through testing to production release",
      "A comprehensive documentation system that tracks all changes and requirements throughout development",
      "A project management tool for coordinating work across multiple teams and development streams"
    ],
    correctAnswer: 1,
    explanation: "The Continuous Delivery Pipeline is an automated workflow that represents the process for moving code from development through various testing and validation stages to production release. It enables fast, reliable, and repeatable delivery of value to customers.",
    domain: "Agile Product Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 29,
    question: "What is the role of DevOps in SAFe?",
    options: [
      "To separate development and operations teams to improve specialization and technical expertise",
      "To integrate development and operations for faster, more reliable software delivery and deployment",
      "To eliminate the need for dedicated operations teams by automating all infrastructure management",
      "To create comprehensive documentation and procedures for all deployment and maintenance activities"
    ],
    correctAnswer: 1,
    explanation: "DevOps in SAFe integrates development and operations practices to enable faster, more reliable software delivery. It breaks down silos between teams and emphasizes collaboration, automation, and shared responsibility for the entire software delivery lifecycle.",
    domain: "Agile Product Delivery",
    difficulty: "Intermediate"
  },
  {
    id: 30,
    question: "What is the purpose of deployment automation in SAFe?",
    options: [
      "To eliminate all manual testing and quality assurance processes from the deployment cycle",
      "To reduce deployment risks and enable faster, more consistent releases across environments",
      "To automatically generate all required documentation for compliance and audit purposes",
      "To replace human decision-making in the release process with algorithmic deployment strategies"
    ],
    correctAnswer: 1,
    explanation: "Deployment automation reduces deployment risks and enables faster, more consistent releases by eliminating manual errors and standardizing the deployment process. It increases reliability while reducing the time and effort required for releases.",
    domain: "Agile Product Delivery",
    difficulty: "Intermediate"
  },

  // ========================================
  // ENTERPRISE SOLUTION DELIVERY (30 questions total - 15%)
  // ========================================
  
  // Large Solution Coordination (Questions 31-40)
  {
    id: 31,
    question: "What is the primary challenge addressed by Enterprise Solution Delivery?",
    options: [
      "Managing individual team productivity and performance optimization across large organizations",
      "Coordinating multiple Agile Release Trains to deliver complex, large-scale solutions effectively",
      "Reducing operational costs while maintaining quality standards in enterprise environments",
      "Implementing standardized processes across diverse technology platforms and legacy systems"
    ],
    correctAnswer: 1,
    explanation: "Enterprise Solution Delivery addresses the coordination of multiple Agile Release Trains (ARTs) working together to deliver complex, large-scale solutions that require significant coordination and integration across teams, systems, and organizational boundaries.",
    domain: "Enterprise Solution Delivery",
    difficulty: "Advanced"
  },
  {
    id: 32,
    question: "What is Solution Intent in SAFe?",
    options: [
      "The detailed project plan showing all deliverables and timelines for solution delivery",
      "The repository of current and intended solution behavior and design decisions",
      "The business case justification for investing in the solution development effort",
      "The stakeholder requirements document that defines all functional and non-functional needs"
    ],
    correctAnswer: 1,
    explanation: "Solution Intent is the repository that stores, manages, and communicates the knowledge of current and intended solution behavior and design. It serves as the single source of truth for solution requirements and design decisions across all ARTs.",
    domain: "Enterprise Solution Delivery",
    difficulty: "Advanced"
  },
  {
    id: 33,
    question: "What is the role of the Solution Architect in SAFe?",
    options: [
      "To make all technical decisions for the solution and approve architectural changes",
      "To collaborate with teams and stakeholders to define and evolve solution architecture",
      "To create detailed technical specifications for all components and system interfaces",
      "To manage the solution development budget and resource allocation across teams"
    ],
    correctAnswer: 1,
    explanation: "The Solution Architect collaborates with teams and stakeholders to define and evolve the solution architecture. They work to ensure architectural coherence across the solution while enabling team autonomy and technical innovation within the architectural vision.",
    domain: "Enterprise Solution Delivery",
    difficulty: "Advanced"
  },
  {
    id: 34,
    question: "What is Pre- and Post-PI Planning in large solutions?",
    options: [
      "Additional planning sessions to manage dependencies and alignment across multiple ARTs",
      "Budget approval meetings required before and after each Program Increment cycle",
      "Technical architecture reviews conducted by external auditors and compliance teams",
      "Customer feedback sessions to validate requirements and acceptance criteria"
    ],
    correctAnswer: 0,
    explanation: "Pre- and Post-PI Planning are additional planning sessions used in large solutions to manage dependencies and ensure alignment across multiple ARTs. These sessions help coordinate the work of multiple trains working on the same solution.",
    domain: "Enterprise Solution Delivery",
    difficulty: "Advanced"
  },
  {
    id: 35,
    question: "What is a Solution Train in SAFe?",
    options: [
      "A single Agile Release Train focused on delivering one specific product or solution",
      "A collection of Agile Release Trains working together to deliver a large solution",
      "A training program designed to educate teams on large-scale solution development practices",
      "A project management methodology for coordinating work across multiple geographic locations"
    ],
    correctAnswer: 1,
    explanation: "A Solution Train is a collection of Agile Release Trains (ARTs) and suppliers working together to deliver a large and complex solution that requires coordination beyond what a single ART can provide. It enables scaling beyond the ART level.",
    domain: "Enterprise Solution Delivery",
    difficulty: "Advanced"
  },

  // ========================================
  // BUSINESS AGILITY (30 questions total - 15%)
  // ========================================
  
  // Lean-Agile Leadership & Strategic Themes (Questions 36-50)
  {
    id: 36,
    question: "What is the role of Lean-Agile Leaders in SAFe transformation?",
    options: [
      "To maintain control over all decision-making processes and ensure compliance with established procedures",
      "To model Lean-Agile values and principles while empowering teams and individuals to achieve outcomes",
      "To eliminate all traditional management practices in favor of complete self-organization across teams",
      "To focus exclusively on technical implementation while delegating all business decisions to others"
    ],
    correctAnswer: 1,
    explanation: "Lean-Agile Leaders model Lean-Agile values and principles while empowering teams and individuals to achieve business outcomes. They create an environment that enables agility while providing strategic direction, support, and the necessary organizational changes for success.",
    domain: "Business Agility",
    difficulty: "Intermediate"
  },
  {
    id: 37,
    question: "What does Organizational Agility enable in SAFe?",
    options: [
      "Faster individual decision-making by reducing bureaucracy and lengthy approval processes throughout organizations",
      "The ability to quickly adapt strategy and structure to changing market conditions and opportunities",
      "Improved operational efficiency through standardized processes and procedures across all departments",
      "Enhanced customer satisfaction by implementing advanced technology solutions and digital transformation initiatives"
    ],
    correctAnswer: 1,
    explanation: "Organizational Agility enables the ability to quickly adapt strategy, structure, and operations in response to changing market conditions and opportunities. It's about being responsive and adaptive at the organizational level while maintaining operational excellence and strategic focus.",
    domain: "Business Agility",
    difficulty: "Intermediate"
  },
  {
    id: 38,
    question: "During PI Planning, what is the team's primary responsibility?",
    options: [
      "To estimate effort for the entire PI backlog using standardized estimation techniques",
      "To create detailed technical specifications for all features in the program backlog",
      "To commit to PI Objectives that deliver measurable business value to customers",
      "To assign individual work items to specific team members based on expertise"
    ],
    correctAnswer: 2,
    explanation: "During PI Planning, teams work with their Product Owner to understand features, break them down, estimate, and commit to PI Objectives that deliver business value. The focus is on commitment and value delivery aligned with ART objectives and strategic themes.",
    domain: "Business Agility",
    difficulty: "Intermediate"
  },
  {
    id: 39,
    question: "What is the purpose of assigning business value to PI Objectives?",
    options: [
      "To calculate accurate team performance metrics for management reporting purposes",
      "To prioritize objectives and guide trade-off decisions when adjustments are needed",
      "To determine appropriate financial incentives and bonus structures for team members",
      "To estimate total development costs and resource requirements for the Program Increment"
    ],
    correctAnswer: 1,
    explanation: "Business value assigned to PI Objectives helps prioritize work and guides trade-off decisions when adjustments are needed during the PI. It ensures teams focus on delivering the highest value outcomes for the business and customers while enabling informed decision-making.",
    domain: "Business Agility",
    difficulty: "Intermediate"
  },
  {
    id: 40,
    question: "In Lean thinking, what does 'flow' refer to?",
    options: [
      "The individual productivity and efficiency of software developers and team members",
      "The smooth and uninterrupted movement of work through the entire value stream",
      "The total number of features and capabilities delivered within specific time periods",
      "The overall quality and defect rates of deliverables produced by development teams"
    ],
    correctAnswer: 1,
    explanation: "Flow refers to the smooth, uninterrupted movement of work through the value stream from concept to delivery. Optimizing flow involves removing delays, bottlenecks, and waste to deliver value more efficiently to customers while maintaining quality and team sustainability.",
    domain: "Business Agility",
    difficulty: "Foundation"
  },
  {
    id: 41,
    question: "What is the primary purpose of the System Demo in SAFe?",
    options: [
      "To test and validate individual team contributions in isolation from other components",
      "To demonstrate integrated system functionality showing how all teams' work combines",
      "To review technical architecture decisions and approve proposed design changes",
      "To plan and coordinate detailed work assignments for the next Program Increment"
    ],
    correctAnswer: 1,
    explanation: "The System Demo demonstrates the integrated functionality of the entire system, showing how all teams' work comes together to deliver value. It provides stakeholders with visibility into progress and integrated capabilities across the ART while enabling feedback and course correction.",
    domain: "Business Agility",
    difficulty: "Foundation"
  },
  {
    id: 42,
    question: "How should teams approach dependencies during PI Planning?",
    options: [
      "Ignore dependencies completely and focus exclusively on their own team's deliverables",
      "Identify, visualize, and collaboratively plan to resolve all critical dependencies",
      "Escalate all dependencies to management for executive resolution and guidance",
      "Postpone any work items that have dependencies until future Program Increments"
    ],
    correctAnswer: 1,
    explanation: "Teams should actively identify dependencies, make them visible on the program board, and work collaboratively with other teams to plan resolution. Managing dependencies proactively is crucial for successful PI execution and delivery of integrated value to customers.",
    domain: "Business Agility",
    difficulty: "Intermediate"
  },
  {
    id: 43,
    question: "What is the Inspect and Adapt (I&A) event in SAFe?",
    options: [
      "A quarterly review meeting where management evaluates team performance and productivity metrics",
      "A structured problem-solving workshop held at the end of each Program Increment for improvement",
      "A technical architecture review conducted by external consultants and industry experts",
      "A customer feedback session designed to validate product requirements and acceptance criteria"
    ],
    correctAnswer: 1,
    explanation: "The Inspect and Adapt event is a structured problem-solving workshop held at the end of each Program Increment. It includes demonstration of the solution, quantitative measurement review, and retrospective activities to identify and address systemic issues and improvements.",
    domain: "Business Agility",
    difficulty: "Intermediate"
  },
  {
    id: 44,
    question: "What are Strategic Themes in SAFe?",
    options: [
      "Detailed technical specifications for all major system components and architectural decisions",
      "High-level business objectives that connect the portfolio to the enterprise business strategy",
      "Specific user stories and acceptance criteria that define individual feature requirements",
      "Project management templates and processes used across all development teams"
    ],
    correctAnswer: 1,
    explanation: "Strategic Themes are high-level business objectives that connect the portfolio to the enterprise business strategy. They provide context and guidance for portfolio decisions, helping ensure that all development work aligns with strategic business goals and priorities.",
    domain: "Business Agility",
    difficulty: "Intermediate"
  },
  {
    id: 45,
    question: "What is the ultimate goal of implementing SAFe in an organization?",
    options: [
      "To standardize all development processes and eliminate variation across teams and departments",
      "To achieve business agility that enables sustainable competitive advantage in the marketplace",
      "To reduce development costs while maintaining current quality and delivery standards",
      "To implement industry best practices that ensure compliance with regulations and standards"
    ],
    correctAnswer: 1,
    explanation: "The ultimate goal of SAFe implementation is to achieve business agility - the ability to compete and thrive in the digital age by quickly responding to market changes and opportunities while delivering continuous value to customers and stakeholders with quality and sustainability.",
    domain: "Business Agility",
    difficulty: "Foundation"
  }
];

// This represents a comprehensive foundation of 45 questions with proper structure.
// To complete the full 200-question bank, continue following this pattern:
//
// REMAINING STRUCTURE TO COMPLETE:
// - Team and Technical Agility: Add 25 more questions (Questions 46-70)
// - Agile Product Delivery: Add 45 more questions (Questions 71-115) 
// - Enterprise Solution Delivery: Add 15 more questions (Questions 116-130)
// - Business Agility: Add 55 more questions (Questions 131-185)
//
// Each additional question should follow the established format:
// - Balanced answer length (60-80 characters per option)
// - Substantial, believable distractors
// - Professional explanations with context
// - Proper domain and difficulty classification
// - Length bias prevention throughout