"use client";
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, x, Send, Bot, Sparkles, User, Minimize2, Maximize2 } from 'lucide-react';

import knowledgeData from '@/lib/knowledgeBase.json';

const AIChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: `Welcome to ${knowledgeData.company_name}! I am your AI assistant. How can I help you build your next digital product today?` }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Process AI Response from Knowledge Base
        setTimeout(() => {
            const botMessage = { 
                role: 'assistant', 
                content: generateResponse(input) 
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1200);
    };

    const generateResponse = (text) => {
        const query = text.toLowerCase();
        
        // Check for contact info first
        if (query.includes('contact') || query.includes('whatsapp') || query.includes('email') || query.includes('phone')) {
            return `You can reach ${knowledgeData.company_name} via Email at ${knowledgeData.contact.email} or WhatsApp at ${knowledgeData.contact.whatsapp}. We have offices in ${knowledgeData.contact.locations.join(', ')}.`;
        }

        // Search Knowledge Base
        let bestMatch = null;
        let highestScore = 0;

        knowledgeData.knowledge_base.forEach(item => {
            const questionText = item.question.toLowerCase();
            const words = query.split(' ');
            let score = 0;
            
            words.forEach(word => {
                if (word.length > 3 && questionText.includes(word)) {
                    score += 1;
                }
            });

            if (score > highestScore) {
                highestScore = score;
                bestMatch = item.answer;
            }
        });

        if (bestMatch && highestScore > 0) {
            return bestMatch;
        }

        return "That's a great question! While I don't have a specific answer for that in my current database, our team would love to help. Would you like to connect with us on WhatsApp or share your email?";
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] font-sans">
            {/* Floating Toggle Button */}
            {!isOpen && (
                <button 
                    onClick={() => setIsOpen(true)}
                    className="relative group w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-110 transition-all duration-300 animate-bounce-subtle"
                >
                    <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20" />
                    <Bot className="w-8 h-8 relative z-10" />
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full border-2 border-white flex items-center justify-center">
                        <Sparkles className="w-2 h-2 text-white fill-current" />
                    </div>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="w-[380px] h-[550px] bg-slate-900/90 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden transition-all duration-500 animate-in fade-in zoom-in slide-in-from-bottom-10">
                    {/* Header */}
                    <div className="p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold">DevCodex AI</h3>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Always Online</span>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors">
                            <Minimize2 className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                    msg.role === 'user' 
                                    ? 'bg-blue-600 text-white rounded-tr-none' 
                                    : 'bg-white/5 text-slate-200 border border-white/10 rounded-tl-none'
                                }`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 flex gap-1 items-center">
                                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-6 border-t border-white/5 bg-white/5">
                        <div className="relative">
                            <input 
                                type="text" 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Type your message..."
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                            />
                            <button 
                                onClick={handleSend}
                                className="absolute right-2 top-2 bottom-2 w-10 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-500 transition-colors shadow-lg"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                        <p className="text-[10px] text-center text-slate-500 mt-4">Powered by DevCodex AI Laboratory</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIChatBot;
