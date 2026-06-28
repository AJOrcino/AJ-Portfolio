import { useEffect, useRef, useState } from "react";

const quickPrompts = [
  "Tell me about Allen",
  "What skills does he have?",
  "Show me his projects",
  "How can I contact him?",
];

const getBotReply = (input) => {
  const text = input.toLowerCase().trim().replace(/[?.!,]/g, "");

  if (/(show me his projects|show me projects|show his projects|projects|project|work)/.test(text)) {
    return "Some featured projects include Techzone, Twisted Tees, Title Thesis Generated, Tic Tac Toe, Calculator, and several C++ programming projects.";
  }

  if (
    /(contact him|contact|reach him|reach|email|phone|number|message|how can i contact|how do i contact|how to contact|what is his email|what is his phone)/.test(text)
  ) {
    return "You can reach him at allenjeffersonorcino@gmail.com or call +63 981 173 2889.";
  }

  if (/(skill|skills|stack|tech|technology|frontend|backend)/.test(text)) {
    return "His skill set includes React, Tailwind CSS, JavaScript, HTML, CSS, Python, C++, MySQL, PostgreSQL, and Node.js.";
  }

  if (/(education|school|college|study|course)/.test(text)) {
    return "He studied at Alabang Elementary School, San Roque Catholic School, STI College Alabang, and is currently finishing his Bachelor of Science in Information Technology at Pamantasan ng Lungsod ng Muntinlupa.";
  }

  if (/(intern|internship|experience|company)/.test(text)) {
    return "He completed an internship at Teknowserv as an IT Intern, where he helped develop the company website and supported technical setup tasks.";
  }

  if (/(location|where|from|live)/.test(text)) {
    return "Allen is based in Metro Manila, Philippines.";
  }

  if (/(who|name|allen|about|tell me about)/.test(text)) {
    return "Allen Jefferson C. Orcino is a BSIT graduate and aspiring software engineer focused on building modern, user-friendly web experiences.";
  }

  if (/(hi|hello|hey|hola)/.test(text)) {
    return "Hi! I’m Allen’s portfolio assistant. Ask me anything about his background, skills, projects, education, or contact details.";
  }

  if (/(help|what can you do|sample)/.test(text)) {
    return "I can answer questions about Allen’s profile, skills, projects, education, internship, and contact details. Try asking something like ‘What projects has he built?’";
  }

  return "I can help with information about Allen’s background, skills, projects, education, internship, and contact details. Try asking something more specific.";
};

export const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I’m Allen’s portfolio assistant. Ask me anything about his work and background.",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isOpen]);

  const submitPrompt = (value) => {
    const trimmedInput = value.trim();
    if (!trimmedInput) return;

    const userMessage = { role: "user", text: trimmedInput };
    const assistantReply = {
      role: "assistant",
      text: getBotReply(trimmedInput),
    };

    setIsOpen(true);
    setMessages((prev) => [...prev, userMessage, assistantReply]);
    setInput("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitPrompt(input);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-[min(92vw,360px)] rounded-[1.5rem] border border-cyan-400/20 bg-slate-900/95 p-3 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
          <div className="mb-3 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-2">
            <div>
              <p className="text-sm font-semibold text-white">Portfolio Assistant</p>
              <p className="text-xs text-slate-400">Ask me about Allen’s portfolio</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-slate-700 p-1.5 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
              aria-label="Close chatbot"
            >
              ✕
            </button>
          </div>

          <div className="mb-3 flex max-h-72 flex-col gap-2 overflow-y-auto rounded-2xl bg-slate-950/70 p-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto bg-cyan-500/20 text-cyan-100"
                    : "bg-slate-800/90 text-slate-200"
                }`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="mb-3 flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => {
                  submitPrompt(prompt);
                }}
                className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400 hover:text-cyan-200"
              >
                {prompt}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about his portfolio..."
              className="flex-1 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-sm font-medium text-white transition hover:brightness-110"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105"
      >
        <span className="text-base">💬</span>
        <span>Chat with me</span>
      </button>
    </div>
  );
};
