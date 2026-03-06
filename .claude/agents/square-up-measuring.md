import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are a friendly Junior Developer assistant helping build a Next.js + Tailwind CSS website for "Square Up Measuring" — a real estate measurement & photography company based in Fort Mill, SC.

## About the site:
- **Business**: Home measurement specialists, ANSI-certified floor plans, MLS photography, drone add-ons
- **Target audience**: Realtors and Homeowners in the Carolinas
- **Tagline**: "Accurate, Reliable, Next Day Delivery, Trustworthy"
- **Trusted by 400+ Realtors**, Veteran-owned

## Original Site Colors (squareupmeasuring.com):
- Primary: Deep Navy/Dark Blue (#0A1628 or similar dark navy)
- Accent: Gold/Yellow (#F5C842 or amber-400)
- Background: White and light gray sections
- Text: Dark charcoal on light, white on dark
- Tailwind equivalents: bg-slate-900, text-yellow-400, bg-white, text-slate-800

## Inspiration: ClickUp (clickup.com)
- Bold hero sections with gradient backgrounds
- Animated marquee/ticker text
- Card-based service sections
- Social proof / testimonial sections
- Sticky navbar with CTA button
- Clean, modern, conversion-focused layout

## Tech Stack:
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion (animations)
- next/image for optimized images
- TypeScript (optional but recommended)

## Your role:
You are a Junior Developer who:
- Gives clear, actionable advice with actual code snippets
- Explains WHY you're doing things (not just what)
- Mentions when something might be tricky or needs attention
- Suggests folder structure, component breakdown, and file naming
- Gives Tailwind class examples with the actual brand colors
- Breaks tasks into small, manageable steps
- Sometimes admits "I'd double-check this" or "senior dev might have a better approach here"
- Is enthusiastic and encouraging

## When giving code:
- Always use Next.js App Router conventions (app/ directory)
- Use Tailwind utility classes (no custom CSS unless needed)
- Show realistic, copy-paste-ready snippets
- Include comments in code
- Reference the brand colors specifically

Always be helpful, specific, and practical. If asked about a component or page, provide the actual JSX/TSX code.`;

const SUGGESTIONS = [
  "What's the full folder structure I need?",
  "Show me the Navbar component with the brand colors",
  "Build the Hero section like ClickUp style",
  "What are all the pages I need to create?",
  "Show me the Services card section",
  "How do I set up the Tailwind color config?",
  "Create the Testimonials section",
  "What animations should I add with Framer Motion?",
  "Show me the Footer component",
  "How do I set up Next.js 14 from scratch?",
];

export default function DevAgent() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hey! 👋 I'm your Junior Dev assistant for the **Square Up Measuring** rebuild!\n\nI've already studied the original site at squareupmeasuring.com and the ClickUp inspiration. Here's what I know we're working with:\n\n**🎨 Brand Colors:**\n- Deep Navy: \`#0A1628\` → \`bg-slate-900\`\n- Gold Accent: \`#F5C842\` → \`text-yellow-400\`\n- Clean White sections: \`bg-white\`\n\n**📄 Pages needed:** Home, Measurements, Photography, Coverage Area, Homeowners, Realtors, Contact\n\n**⚡ ClickUp-style features:** Marquee hero text, bold service cards, testimonials, sticky nav with CTA\n\nWhat do you want to start building first? Pick a suggestion below or ask me anything! 🚀`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || loading) return;

    setInput("");
    setActiveSuggestion(null);
    const newMessages = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      const reply = data.content?.find((b) => b.type === "text")?.text || "Sorry, something went wrong!";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Network error. Check your connection and try again!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatMessage = (text) => {
    const lines = text.split("\n");
    const elements = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Code block
      if (line.trim().startsWith("```")) {
        const lang = line.trim().slice(3);
        const codeLines = [];
        i++;
        while (i < lines.length && !lines[i].trim().startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }
        elements.push(
          <div key={i} className="my-3 rounded-lg overflow-hidden border border-slate-600">
            {lang && (
              <div className="bg-slate-700 px-3 py-1 text-xs text-yellow-400 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400 inline-block"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                <span className="ml-2">{lang}</span>
              </div>
            )}
            <pre className="bg-slate-800 p-4 text-sm text-green-300 font-mono overflow-x-auto leading-relaxed">
              <code>{codeLines.join("\n")}</code>
            </pre>
          </div>
        );
        i++;
        continue;
      }

      // Headers
      if (line.startsWith("## ")) {
        elements.push(<h2 key={i} className="text-lg font-bold text-yellow-400 mt-4 mb-1">{line.slice(3)}</h2>);
      } else if (line.startsWith("### ")) {
        elements.push(<h3 key={i} className="text-base font-semibold text-slate-200 mt-3 mb-1">{line.slice(4)}</h3>);
      } else if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
        elements.push(<p key={i} className="font-semibold text-white mt-2">{line.slice(2, -2)}</p>);
      } else if (line.startsWith("- ") || line.startsWith("* ")) {
        // Inline bold/code in list
        const content = line.slice(2);
        elements.push(
          <li key={i} className="text-slate-300 ml-4 list-disc text-sm leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: content
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                .replace(/`(.*?)`/g, '<code class="bg-slate-700 text-yellow-300 px-1 rounded text-xs">$1</code>'),
            }}
          />
        );
      } else if (line.trim() === "") {
        elements.push(<div key={i} className="h-2" />);
      } else {
        elements.push(
          <p
            key={i}
            className="text-slate-300 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: line
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                .replace(/`(.*?)`/g, '<code class="bg-slate-700 text-yellow-300 px-1 rounded text-xs font-mono">$1</code>')
                .replace(/\*(.*?)\*/g, '<em class="text-slate-200">$1</em>'),
            }}
          />
        );
      }
      i++;
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900 px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
        <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold text-sm flex-shrink-0">
          JD
        </div>
        <div>
          <div className="text-sm font-semibold text-white flex items-center gap-2">
            Junior Dev AI
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse"></span>
          </div>
          <div className="text-xs text-slate-400">Square Up Measuring · Next.js + Tailwind CSS</div>
        </div>
        <div className="ml-auto flex gap-1.5">
          <span className="text-xs bg-slate-700 text-yellow-400 px-2 py-0.5 rounded-full">Next.js 14</span>
          <span className="text-xs bg-slate-700 text-blue-400 px-2 py-0.5 rounded-full">Tailwind</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 max-w-3xl mx-auto w-full">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold text-xs flex-shrink-0 mt-1">
                JD
              </div>
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                msg.role === "user"
                  ? "bg-yellow-400 text-slate-900 rounded-tr-sm font-medium text-sm"
                  : "bg-slate-800 rounded-tl-sm"
              }`}
            >
              {msg.role === "user" ? (
                <p className="text-sm">{msg.content}</p>
              ) : (
                <div>{formatMessage(msg.content)}</div>
              )}
            </div>
            {msg.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">
                You
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold text-xs flex-shrink-0">
              JD
            </div>
            <div className="bg-slate-800 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      <div className="px-4 pb-2 max-w-3xl mx-auto w-full">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {SUGGESTIONS.map((s, i) => (
            <button
              key={i}
              onClick={() => sendMessage(s)}
              disabled={loading}
              className="flex-shrink-0 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-yellow-400 border border-slate-700 hover:border-yellow-400 px-3 py-1.5 rounded-full transition-all duration-150 disabled:opacity-40"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-slate-800 bg-slate-900 px-4 py-3 max-w-3xl mx-auto w-full">
        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ask about any component, page, or setup step..."
            rows={1}
            disabled={loading}
            className="flex-1 bg-slate-800 border border-slate-700 focus:border-yellow-400 text-white placeholder-slate-500 text-sm rounded-xl px-4 py-2.5 resize-none outline-none transition-colors leading-relaxed"
            style={{ minHeight: "42px", maxHeight: "120px" }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="bg-yellow-400 hover:bg-yellow-300 disabled:bg-slate-700 disabled:text-slate-500 text-slate-900 font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors flex-shrink-0"
          >
            Send
          </button>
        </div>
        <p className="text-xs text-slate-600 mt-1.5 text-center">Press Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  );
}
