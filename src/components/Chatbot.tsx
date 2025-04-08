import { BotMessageSquare } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { GradientButton } from './GradBtn';

const ChatBot = () => {
    const GEMINI_API_KEY = "AIzaSyAFPCQItIKj6ZRTrWAlhFEHzd0Dph7kRRU";

    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: '1',
            content: "Hi! I'm the Geno. How can I help you today?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [messages, isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleToggleChat = () => {
        setIsOpen(!isOpen);
    };

    // Function to call Gemini API directly
    const callGeminiAPI = async (userMessage) => {
        const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent";

        const requestBody = {
            contents: [{
                parts: [{
                    text: `You are an intelligent AI assistant who has been fine-tuned on a complete Software Requirements Specification (SRS) document for a digital educational platform. The user, however, has not read the document and has not provided it to you during this conversation. Your job is to act as a helpful, informed guide who explains everything the user wants to know about the platform described in the SRS — even though the user hasn’t seen it.
                        You are created By Aditya and Umyal

                        The user may begin with open-ended questions like:

                        “Hey, what’s this software about?”

                        “Who is this made for?”

                        “Can you tell me what the main features are?”

                        “What technologies does it use?”

                        “Does it support mobile or just web?”

                        “How secure is it?”

                        “Is there any kind of AI involved?”

                        You should respond with clarity, completeness, and professionalism — always pulling directly from what was written in the SRS during training. Assume the user knows nothing about the platform, but is deeply interested. It’s your job to guide them, section by section if necessary.

                        In your answers:

                        Never assume information beyond the document you were fine-tuned on

                        Speak in plain, understandable language, even if the document uses technical terms — you may explain them

                        Stay professional but friendly, as if helping a new developer, student, or potential stakeholder

                        Don’t overwhelm the user — if a question covers multiple areas, break it down and offer to explain further if they want

                        Prefer paragraphs, unless the user asks for lists, tables, or summaries

                        Reference sections of the SRS naturally (e.g., “In the introduction section, the document explains…”)

                        Example: If the user asks, “What’s the purpose of this platform?”, you might answer:

                        The document explains in the ‘Purpose’ section that this platform is designed to enhance learning experiences using artificial intelligence, emotion tracking, and a community-driven approach. It aims to personalize content and improve mental well-being while making education more accessible and engaging.

                        You may also get more technical questions like:

                        “What AI libraries are being used?”

                        “Is the system scalable?”

                        “Does it integrate with any APIs or databases?”

                        “What kind of users is this system designed for?”

                        In those cases, dig into the architecture, functional and non-functional requirements, technology stack, and user roles outlined in the SRS. Your answers should build trust, show expertise, and be grounded 100% in the content you were trained on.

                        You are not a general-purpose assistant. You are the subject-matter expert for this specific SRS — and you must always act like it.


          User message: ${userMessage}`
                }]
            }],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            }
        };

        try {
            const response = await fetch(`${apiUrl}?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();

            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                return data.candidates[0].content.parts[0].text;
            } else {
                throw new Error("Invalid response format from Gemini API");
            }
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = {
            id: Date.now().toString(),
            content: input,
            sender: 'user',
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Call Gemini API
            const responseText = await callGeminiAPI(input);

            const botResponse = {
                id: (Date.now() + 1).toString(),
                content: responseText,
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botResponse]);
        } catch (error) {
            console.error('Error generating response:', error);

            const errorMessage = {
                id: (Date.now() + 1).toString(),
                content: 'Sorry, I encountered an error while connecting to the AI service. Please try again later.',
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    // Simple markdown-like parser for basic formatting
    const formatBotMessage = (text) => {
        if (!text) return '';

        // Replace bold text
        let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Replace italic text
        formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Replace lists
        formattedText = formattedText.replace(/^- (.*)$/gm, '<li>$1</li>');
        formattedText = formattedText.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');

        // Replace numbered lists
        formattedText = formattedText.replace(/^\d+\. (.*)$/gm, '<li>$1</li>');
        formattedText = formattedText.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');

        // Replace line breaks
        formattedText = formattedText.replace(/\n/g, '<br />');

        return formattedText;
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <GradientButton
                className="fixed bottom-6 right-6 w-14 h-14 brounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 z-50"
                onClick={handleToggleChat}
                aria-label="Toggle chat"
            >
                <BotMessageSquare className="w-10 h-10 text-white" />
            </GradientButton>

            {/* ChatBot Component */}
            {isOpen && (
                <div
                    className="fixed bottom-24 right-6 w-80 md:w-96 h-[28rem] bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-indigo-500/30 z-50 transition-all duration-300 ease-in-out animate-slideUp"
                >
                    {/* Header */}
                    <div className="gradient-button text-white p-4 flex justify-between items-center shadow-md">
                        <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 8V4H8" />
                                    <rect width="16" height="12" x="4" y="8" rx="2" />
                                    <path d="M2 14h2" />
                                    <path d="M20 14h2" />
                                    <path d="M15 13v2" />
                                    <path d="M9 13v2" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold tracking-wide text-base">Genco Assistant</span>
                                <span className="text-xs text-indigo-200">Always here to help</span>
                            </div>
                        </div>
                        <button
                            onClick={handleToggleChat}
                            className="text-white/80 hover:text-white hover:bg-white/10 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
                            aria-label="Close chat"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-grow  p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-transparent" >
                        <style>{`
          .scrollbar-thin::-webkit-scrollbar {
            width: 4px;
          }
          .scrollbar-thumb-indigo-600::-webkit-scrollbar-thumb {
            background-color: rgb(79, 70, 229, 0.6);
            border-radius: 9999px;
          }
          .scrollbar-track-transparent::-webkit-scrollbar-track {
            background-color: transparent;
          }
          ul, ol {
            margin-left: 1.5rem;
            margin-bottom: 0.5rem;
          }
          ul {
            list-style-type: disc;
          }
          ol {
            list-style-type: decimal;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .message-animation {
            animation: fadeIn 0.3s ease-out forwards;
          }
        `}</style>

                        {messages.map((message, index) => (
                            <div
                                key={message.id}
                                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} message-animation`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {message.sender !== 'user' && (
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-600/30  to-red-300/40 flex items-center justify-center mr-2 flex-shrink-0 shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 8V4H8" />
                                            <rect width="16" height="12" x="4" y="8" rx="2" />
                                            <path d="M2 14h2" />
                                            <path d="M20 14h2" />
                                            <path d="M15 13v2" />
                                            <path d="M9 13v2" />
                                        </svg>
                                    </div>
                                )}

                                <div
                                    className={`max-w-3/4 p-3 rounded-2xl shadow-md ${message.sender === 'user'
                                        ? 'bg-black/40 text-white rounded-tr-none'
                                        : 'bg-white/20 backdrop-blur-sm text-gray-100 border border-indigo-500/20 rounded-tl-none'
                                        }`}
                                >
                                    {message.sender === 'user' ? (
                                        <div className="whitespace-pre-wrap text-sm">
                                            {message.content}
                                        </div>
                                    ) : (
                                        <div
                                            className="text-sm prose prose-invert prose-sm max-w-none"
                                            dangerouslySetInnerHTML={{ __html: formatBotMessage(message.content) }}
                                        />
                                    )}
                                    <div
                                        className={`text-xs mt-1 ${message.sender === 'user' ? 'text-indigo-200' : 'text-gray-400'
                                            } flex items-center`}
                                    >
                                        <span className="mr-1">
                                            {message.timestamp.toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </span>
                                        {message.sender === 'user' && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </div>
                                </div>

                                {message.sender === 'user' && (
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-600/10 via-yellow-500/30 to-yellow-300/40 flex items-center justify-center ml-2 flex-shrink-0 shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start mb-4 message-animation">
                                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center mr-2 flex-shrink-0 shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 8V4H8" />
                                        <rect width="16" height="12" x="4" y="8" rx="2" />
                                        <path d="M2 14h2" />
                                        <path d="M20 14h2" />
                                        <path d="M15 13v2" />
                                        <path d="M9 13v2" />
                                    </svg>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm text-gray-100 border border-indigo-500/20 p-3 rounded-2xl rounded-tl-none shadow-md">
                                    <div className="flex space-x-2">
                                        <div className="h-2 w-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                                        <div className="h-2 w-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="h-2 w-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="p-4 border-t border-indigo-500/20 bg-gray-900/80 backdrop-blur-sm">
                        <div className="flex items-center space-x-2 rounded-full bg-white/10 p-1 backdrop-blur-sm border border-green-500/30 focus-within:border-grenn-500/60 focus-within:ring-1 focus-within:ring-green-500/30 transition-all duration-200">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                disabled={isLoading}
                                placeholder="Type your message..."
                                className="flex-grow p-2 px-4 rounded-full focus:outline-none bg-transparent text-white placeholder-gray-400 text-sm"
                                autoFocus
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className={`bg-gradient-to-r from-green-600 to-green-700 text-white p-2.5 rounded-full hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-50 disabled:opacity-50 transition-all duration-200 shadow-md ${!input.trim() ? 'cursor-not-allowed' : 'hover:scale-105 active:scale-95'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isLoading ? 'animate-spin' : ''}>
                                    {isLoading ? (
                                        <circle cx="12" cy="12" r="10" />
                                    ) : (
                                        <>
                                            <path d="m22 2-7 20-4-9-9-4Z" />
                                            <path d="M22 2 11 13" />
                                        </>
                                    )}
                                </svg>
                            </button>
                        </div>
                        <div className="text-xs text-center mt-2 text-gray-500">
                            Press Enter to send, Shift+Enter for new line
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default ChatBot;
