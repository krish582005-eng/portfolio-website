import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type LogLine = {
  text: string | React.ReactNode;
  type: "command" | "output" | "error" | "success" | "header";
};

export function TerminalConsole({ onMatrixToggle }: { onMatrixToggle: () => void }) {
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [input, setInput] = useState("");
  const [outputLines, setOutputLines] = useState<LogLine[]>([
    { text: "Welcome to krishna.dev [Version 1.0.0]", type: "output" },
    { text: "Type 'help' to see available commands.", type: "output" }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [outputLines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    
    setOutputLines((prev) => [...prev, { text: `root@krishna:~$ ${trimmed}`, type: "command" }]);

    switch (trimmed.toLowerCase()) {
      case "help":
        setOutputLines((prev) => [...prev, 
          { text: "AVAILABLE COMMANDS:", type: "header" },
          { text: "  help      - Show this message", type: "output" },
          { text: "  about     - View my bio", type: "output" },
          { text: "  skills    - View my tech stack", type: "output" },
          { text: "  projects  - List my projects", type: "output" },
          { text: "  contact   - Get my contact info", type: "output" },
          { text: "  clear     - Clear terminal", type: "output" },
          { text: "  matrix    - Toggle matrix rain", type: "output" },
          { text: "  hack      - Execute override sequence", type: "output" }
        ]);
        break;
      case "about":
        setOutputLines((prev) => [...prev, 
          { text: "> NAME: Krishna Yadav", type: "success" },
          { text: "> ROLE: Web & Python Developer", type: "success" },
          { text: "> LOCATION: Lucknow, India", type: "success" },
          { text: "> STATUS: Available for internships", type: "success" },
          { text: "> BIO: CS undergraduate at AKTU (CGPA: 7.5)", type: "output" },
          { text: "       NCC Cadet | Disciplined | Passionate builder", type: "output" }
        ]);
        break;
      case "skills":
        setOutputLines((prev) => [...prev, 
          { text: "LANGUAGES ─────────────────────", type: "header" },
          { text: "Python     ████████████████████ 90%", type: "output" },
          { text: "C++        █████████████████░░░ 85%", type: "output" },
          { text: "JavaScript ████████████████░░░░ 80%", type: "output" },
          { text: "HTML       ███████████████████░ 95%", type: "output" },
          { text: "CSS        ████████████████████ 90%", type: "output" },
          { text: "SQL        ███████████████░░░░░ 75%", type: "output" },
          { text: " ", type: "output" },
          { text: "FRAMEWORKS ─────────────────────", type: "header" },
          { text: "Bootstrap  █████████████████░░░ 85%", type: "output" },
          { text: "Streamlit  ███████████████░░░░░ 75%", type: "output" },
          { text: "React      ████████████░░░░░░░░ 60%", type: "output" }
        ]);
        break;
      case "projects":
        setOutputLines((prev) => [...prev, 
          { text: "1. Real-Time Sign Language Translation [Python, CV, ML]", type: "success" },
          { text: "2. AI Sales Voice Assistant [Python, NLP, Speech]", type: "success" },
          { text: "3. Digital Detox Nudge [Python, Streamlit]", type: "success" },
          { text: "4. Full Stack Python Projects [Python, Full Stack]", type: "success" }
        ]);
        break;
      case "contact":
        setOutputLines((prev) => [...prev, 
          { text: "EMAIL: krish582005@gmail.com", type: "success" },
          { text: "PHONE: +91 6388976420", type: "success" },
          { text: "LINKEDIN: /in/krishna-yadav-56763a3aa", type: "success" }
        ]);
        break;
      case "clear":
        setOutputLines([]);
        break;
      case "matrix":
        setOutputLines((prev) => [...prev, { text: "Toggling matrix rain...", type: "success" }]);
        onMatrixToggle();
        break;
      case "hack":
        runHackSequence();
        break;
      default:
        setOutputLines((prev) => [...prev, { text: `Command not found: ${trimmed}`, type: "error" }]);
    }
  };

  const runHackSequence = () => {
    const sequence = [
      { text: "[*] Initiating override...", type: "output" },
      { text: "[*] Bypassing firewall...", type: "output" },
      { text: "[+] Injecting payload 0x8F9A...", type: "success" },
      { text: "[!] Warning: Intrusion detected!", type: "error" },
      { text: "[*] Rerouting IP...", type: "output" },
      { text: "[+] Access Granted.", type: "success" }
    ] as const;

    let i = 0;
    const interval = setInterval(() => {
      if (i < sequence.length) {
        setOutputLines((prev) => [...prev, sequence[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div 
      className="w-full max-w-lg h-[400px] bg-[#0a0a0a] rounded-md border border-primary/20 shadow-[0_0_20px_rgba(255,0,48,0.15)] flex flex-col font-mono text-sm overflow-hidden terminal-bg relative group"
      onClick={() => inputRef.current?.focus()}
      data-testid="terminal-console"
    >
      <div className="absolute -inset-0.5 bg-primary/10 rounded-md blur opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
      
      {/* Window Header */}
      <div className="flex items-center px-4 py-2 bg-[#141414] border-b border-primary/20 z-10 relative">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
          <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
        </div>
        <div className="mx-auto text-xs text-primary/70 tracking-widest uppercase font-bold">TERMINAL</div>
      </div>

      {/* Console Area */}
      <div 
        ref={containerRef}
        className="flex-1 p-4 overflow-y-auto z-10 relative scrollbar-hide"
      >
        <div className="space-y-1">
          {outputLines.map((line, i) => (
            <div 
              key={i} 
              className={
                line.type === "command" ? "text-primary font-bold" :
                line.type === "error" ? "text-red-500" :
                line.type === "success" ? "text-[#00ff41]" :
                line.type === "header" ? "text-yellow-400 mt-2 mb-1" :
                "text-foreground/80 whitespace-pre-wrap"
              }
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Input Line */}
        <div className="flex items-center mt-2 text-primary font-bold">
          <span className="mr-2">root@krishna:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-foreground/90 font-mono focus:ring-0"
            spellCheck={false}
            autoComplete="off"
            autoFocus
            data-testid="terminal-input"
          />
          <span className="animate-blink inline-block w-2 h-4 bg-primary ml-1"></span>
        </div>
      </div>
    </div>
  );
}