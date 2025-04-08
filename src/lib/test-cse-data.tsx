export const initialData = [
    {
        id: 1,
        title: "Login Module",
        desc: "Test cases for user authentication",
        TestCases: [
            {
                TestCaseID: "TC001",
                TestScenario: "Valid Login",
                Preconditions: "User must be registered in the system",
                TestSteps: "Enter correct username & password, click login",
                ExpectedResult: "User is logged in successfully and directed to dashboard",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC002",
                TestScenario: "Invalid Login",
                Preconditions: "",
                TestSteps: "Enter incorrect password, click login",
                ExpectedResult: "Error message displayed",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC003",
                TestScenario: "Empty Fields",
                Preconditions: "",
                TestSteps: "Click login without entering credentials",
                ExpectedResult: "Validation message displayed",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC004",
                TestScenario: "Password Reset",
                Preconditions: "User must have a registered email",
                TestSteps: "Click \"Forgot Password\" and follow prompts",
                ExpectedResult: "Password reset email sent successfully",
                ActualResult: "",
                Status: ""
            }
        ]
    },
    {
        id: 2,
        title: "User Registration",
        desc: "Test cases for new user registration",
        TestCases: [
            {
                TestCaseID: "TC005",
                TestScenario: "Register New User",
                Preconditions: "User must not already be registered in the system",
                TestSteps: "1. Open registration page\n2. Enter valid username\n3. Enter valid email\n4. Create strong password\n5. Confirm password\n6. Click register button",
                ExpectedResult: "User should be successfully registered and verification email sent",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC006",
                TestScenario: "Duplicate Registration",
                Preconditions: "",
                TestSteps: "Enter already registered email",
                ExpectedResult: "Error message displayed",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC007",
                TestScenario: "Weak Password",
                Preconditions: "",
                TestSteps: "Enter password that doesn't meet strength requirements",
                ExpectedResult: "Validation error displayed",
                ActualResult: "",
                Status: ""
            }
        ]
    },
    {
        id: 3,
        title: "Emotion-Supported AI",
        desc: "Test cases for emotion recognition and engagement features",
        TestCases: [
            {
                TestCaseID: "TC008",
                TestScenario: "Facial Expression Analysis",
                Preconditions: "User must allow camera access",
                TestSteps: "1. Enable webcam\n2. Begin learning session\n3. Display different expressions",
                ExpectedResult: "System correctly identifies user engagement level",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC009",
                TestScenario: "Engagement Tracking",
                Preconditions: "User must be in active learning session",
                TestSteps: "1. Begin video lesson\n2. Show signs of disengagement\n3. Continue for 5 minutes",
                ExpectedResult: "System prompts user with engagement intervention",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC010",
                TestScenario: "Camera Access Denial",
                Preconditions: "",
                TestSteps: "Deny camera access when prompted",
                ExpectedResult: "Alternative engagement tracking methods offered",
                ActualResult: "",
                Status: ""
            }
        ]
    },
    {
        id: 4,
        title: "Dynamic Quizzes",
        desc: "Test cases for AI-driven quiz functionality",
        TestCases: [
            {
                TestCaseID: "TC011",
                TestScenario: "AI-Generated Questions",
                Preconditions: "User must have completed at least one lesson",
                TestSteps: "1. Complete lesson\n2. Start quiz\n3. Answer questions",
                ExpectedResult: "Questions adapt based on performance",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC012",
                TestScenario: "Real-time Feedback",
                Preconditions: "",
                TestSteps: "1. Begin quiz\n2. Answer question incorrectly",
                ExpectedResult: "Immediate feedback with explanation provided",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC013",
                TestScenario: "Quiz Difficulty Adjustment",
                Preconditions: "User must complete multiple questions",
                TestSteps: "1. Answer several questions correctly\n2. Continue quiz",
                ExpectedResult: "Question difficulty increases appropriately",
                ActualResult: "",
                Status: ""
            }
        ]
    },
    {
        id: 5,
        title: "Interactive Community",
        desc: "Test cases for community and forum features",
        TestCases: [
            {
                TestCaseID: "TC014",
                TestScenario: "Post New Question",
                Preconditions: "User must be logged in",
                TestSteps: "1. Navigate to community forum\n2. Click \"Ask Question\"\n3. Enter question title\n4. Enter question details\n5. Submit question",
                ExpectedResult: "Question posted successfully and visible in the forum",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC015",
                TestScenario: "AI Moderation",
                Preconditions: "",
                TestSteps: "1. Post content with inappropriate language\n2. Submit",
                ExpectedResult: "Content flagged or blocked by AI moderator",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC016",
                TestScenario: "Answer Question",
                Preconditions: "Community question must exist",
                TestSteps: "1. Navigate to question\n2. Click \"Answer\"\n3. Enter response\n4. Submit",
                ExpectedResult: "Answer posted and visible to community",
                ActualResult: "",
                Status: ""
            }
        ]
    },
    {
        id: 6,
        title: "Smart Flashcards",
        desc: "Test cases for AI-powered flashcard functionality",
        TestCases: [
            {
                TestCaseID: "TC017",
                TestScenario: "Generate AI Flashcards",
                Preconditions: "User must select a topic",
                TestSteps: "1. Navigate to flashcards\n2. Select course topic\n3. Click \"Generate\"",
                ExpectedResult: "AI-curated flashcards created for selected topic",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC018",
                TestScenario: "Personalized Learning",
                Preconditions: "User must have study history",
                TestSteps: "1. Complete multiple lessons\n2. Generate flashcards",
                ExpectedResult: "Flashcards tailored to user's weak areas",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC019",
                TestScenario: "Export Flashcards",
                Preconditions: "Flashcards must be generated",
                TestSteps: "1. Generate flashcards\n2. Click \"Export\"\n3. Select format",
                ExpectedResult: "Flashcards successfully exported in selected format",
                ActualResult: "",
                Status: ""
            }
        ]
    },
    {
        id: 7,
        title: "Virtual Labs",
        desc: "Test cases for virtual laboratory simulations",
        TestCases: [
            {
                TestCaseID: "TC020",
                TestScenario: "Launch Simulated Experiment",
                Preconditions: "User must be enrolled in STEM course",
                TestSteps: "1. Navigate to Virtual Labs\n2. Select specific experiment\n3. Click \"Start Simulation\"\n4. Follow onscreen instructions\n5. Complete experiment",
                ExpectedResult: "Simulation runs correctly and results are recorded",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC021",
                TestScenario: "Save Experiment Progress",
                Preconditions: "Active experiment must be in progress",
                TestSteps: "1. Begin experiment\n2. Complete partial steps\n3. Click \"Save Progress\"",
                ExpectedResult: "Progress saved and available for later continuation",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC022",
                TestScenario: "Download Lab Report",
                Preconditions: "Experiment must be completed",
                TestSteps: "1. Complete experiment\n2. Click \"Generate Report\"\n3. Download report",
                ExpectedResult: "Comprehensive lab report downloaded successfully",
                ActualResult: "",
                Status: ""
            }
        ]
    },
    {
        id: 8,
        title: "AI Grooming Advisor",
        desc: "Test cases for professional development features",
        TestCases: [
            {
                TestCaseID: "TC023",
                TestScenario: "Public Speaking Feedback",
                Preconditions: "User must allow microphone access",
                TestSteps: "1. Navigate to Speaking Coach\n2. Record presentation\n3. Submit for analysis",
                ExpectedResult: "Detailed feedback on speaking performance provided",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC024",
                TestScenario: "Soft Skills Evaluation",
                Preconditions: "",
                TestSteps: "1. Complete soft skills assessment\n2. Submit responses\n3. Request evaluation",
                ExpectedResult: "AI provides assessment of user's soft skills with improvement suggestions",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC025",
                TestScenario: "Interview Practice",
                Preconditions: "Flashcards must be generated",
                TestSteps: "1. Select interview type\n2. Begin practice session\n3. Answer AI-generated questions\n4. Complete session",
                ExpectedResult: "Performance feedback and improvement tips provided",
                ActualResult: "",
                Status: ""
            }
        ]
    },
    {
        id: 9,
        title: "Settings and Preferences",
        desc: "Test cases for user configuration options",
        TestCases: [
            {
                TestCaseID: "TC026",
                TestScenario: "Change User Preferences",
                Preconditions: "User must be logged in",
                TestSteps: "1. Navigate to Settings\n2. Modify notification preferences\n3. Change UI theme\n4. Update privacy settings\n5. Save changes",
                ExpectedResult: "All preferences updated and applied immediately",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC027",
                TestScenario: "Language Change",
                Preconditions: "",
                TestSteps: "1. Go to Settings\n2. Select different language\n3. Save changes",
                ExpectedResult: "UI language changes to selected option",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC028",
                TestScenario: "Data Export",
                Preconditions: "",
                TestSteps: "1. Go to Settings\n2. Select \"Export Data\"\n3. Confirm action",
                ExpectedResult: "User data exported in standard format",
                ActualResult: "",
                Status: ""
            }
        ]
    },
    {
        id: 10,
        title: "Security Features",
        desc: "Test cases for platform security functionality",
        TestCases: [
            {
                TestCaseID: "TC029",
                TestScenario: "Two-Factor Authentication",
                Preconditions: "User must have registered phone number",
                TestSteps: "1. Enable 2FA in settings\n2. Verify phone number\n3. Log out and log back in",
                ExpectedResult: "2FA verification prompt appears during login",
                ActualResult: "",
                Status: ""
            },
            {
                TestCaseID: "TC030",
                TestScenario: "Role-Based Access",
                Preconditions: "Admin account required for testing",
                TestSteps: "1. Log in as admin\n2. Attempt to access admin functions\n3. Log in as regular user\n4. Attempt same actions",
                ExpectedResult: "Admin functions accessible only to admin account",
                ActualResult: "",
                Status: ""
            }
        ]
    }
];
