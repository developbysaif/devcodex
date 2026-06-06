"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import aiData from "@/lib/ai-data.json";

// Tokenise a string into meaningful words (length > 2)
function tokenise(str) {
  return str.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(w => w.length > 2);
}

// Score how well the user input matches a knowledge-base entry
function scoreEntry(entry, inputTokens) {
  const qTokens = tokenise(entry.question);
  const catTokens = tokenise(entry.category);
  const aTokens = tokenise(entry.answer);

  let score = 0;

  // Exact question match → highest priority
  const exactQ = entry.question.toLowerCase().replace(/[^a-z0-9 ]/g, " ").trim();
  const exactInput = inputTokens.join(" ").trim();
  if (exactQ === exactInput) score += 100;

  // Question token overlap
  for (const t of inputTokens) {
    if (qTokens.includes(t)) score += 10;
    if (catTokens.includes(t)) score += 6;
    if (aTokens.includes(t)) score += 2;
  }

  return score;
}

function getBestAnswer(userInput) {
  const inputTokens = tokenise(userInput);
  if (inputTokens.length === 0) return null;

  let best = null;
  let bestScore = 0;

  for (const entry of aiData.knowledge_base) {
    const s = scoreEntry(entry, inputTokens);
    if (s > bestScore) {
      bestScore = s;
      best = entry;
    }
  }

  // Only return if we're reasonably confident (score ≥ 6)
  return bestScore >= 6 ? best : null;
}

const QUICK_REPLIES = [
  "What services do you offer?",
  "How long does a website take?",
  "What is SEO?",
  "Do you build Shopify stores?",
  "What is AI automation?",
  "How to contact you?",
];

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi! 👋 I'm the ${aiData.company_name} AI assistant. Ask me anything about our services — Web Development, WordPress, Shopify, SEO, Digital Marketing, or AI Automation!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const msg = text.trim();
    if (!msg) return;

    const newMessages = [...messages, { role: "user", content: msg }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const low = msg.toLowerCase();
      let response = "";

      // Contact intent
      if (low.includes("contact") || low.includes("whatsapp") || low.includes("email") || low.includes("reach") || low.includes("call") || low.includes("phone")) {
        response = `📬 You can reach us!\n\n📧 Email: ${aiData.contact.email}\n📱 WhatsApp: ${aiData.contact.whatsapp}\n📍 Locations: ${aiData.contact.locations.join(", ")}\n\nWe'd love to hear about your project!`;
      }

      // Services overview intent
      if (!response && (low.includes("service") || low.includes("offer") || low.includes("provide") || low.includes("what do you do"))) {
        const cats = [...new Set(aiData.knowledge_base.map(k => k.category))];
        response = `🚀 DevCodex offers the following services:\n\n${cats.map(c => `• ${c}`).join("\n")}\n\nFeel free to ask about any of these in detail!`;
      }

      // Knowledge base smart match
      if (!response) {
        const match = getBestAnswer(msg);
        if (match) {
          response = `**${match.category}**\n${match.answer}`;
        }
      }

      // Fallback
      if (!response) {
        const cats = [...new Set(aiData.knowledge_base.map(k => k.category))];
        response = `I'm not sure about that, but I can help with:\n\n${cats.map(c => `• ${c}`).join("\n")}\n\nTry asking something like "What is SEO?" or "Do you build Shopify stores?"`;
      }

      setIsTyping(false);
      setMessages([...newMessages, { role: "assistant", content: response }]);
    }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] md:w-[420px]"
          >
            <Card className="glass border-white/10 shadow-2xl overflow-hidden flex flex-col" style={{ maxHeight: "85vh" }}>
              {/* Header */}
              <CardHeader className="bg-gradient-to-r from-brand-blue to-brand-purple p-4 flex flex-row items-center justify-between space-y-0 shrink-0">
                <CardTitle className="text-white flex items-center space-x-2 text-base">
                  <Bot className="w-5 h-5" />
                  <div>
                    <p className="font-bold leading-none">DevCodex Assistant</p>
                    <p className="text-xs text-white/70 font-normal mt-0.5">Always here to help</p>
                  </div>
                </CardTitle>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8" onClick={() => setIsOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>

              {/* Messages */}
              <CardContent ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] max-h-[400px]">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    {m.role === "assistant" && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center mr-2 shrink-0 mt-1">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm whitespace-pre-line ${
                        m.role === "user"
                          ? "bg-brand-blue text-white rounded-br-sm"
                          : "bg-accent/50 text-foreground border border-white/5 rounded-bl-sm"
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center mr-2 shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-accent/50 border border-white/5 rounded-2xl rounded-bl-sm px-4 py-3 flex space-x-1">
                      {[0, 1, 2].map(dot => (
                        <motion.div
                          key={dot}
                          className="w-2 h-2 bg-muted-foreground rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>

              {/* Quick replies */}
              {messages.length <= 1 && (
                <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
                  {QUICK_REPLIES.map(q => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-xs bg-accent/30 border border-white/10 rounded-full px-3 py-1.5 hover:bg-brand-blue/20 hover:border-brand-blue/40 transition-colors text-muted-foreground hover:text-white"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <CardFooter className="p-3 border-t border-white/5 shrink-0">
                <form
                  onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
                  className="flex w-full items-center space-x-2"
                >
                  <Input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about our services..."
                    className="bg-accent/30 border-white/10 text-sm"
                  />
                  <Button type="submit" size="icon" className="bg-brand-blue hover:bg-brand-blue/90 shrink-0 h-9 w-9">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

