"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, Plus } from "lucide-react";
import ChatMarkdown from "@/components/ChatMarkdown";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

const STARTERS = [
  "What's he up to?",
  "What's the research?",
  "Hackathons?",
];

const DARK_SECTIONS = ["#hackathons", "#contact"];

function ChatPanel({
  scrollRef,
  messages,
  loading,
  onCollapse,
  onStarter,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  messages: ChatMessage[];
  loading: boolean;
  onCollapse: () => void;
  onStarter: (text: string) => void;
}) {
  return (
    <div className="mb-2 overflow-hidden rounded-[1.35rem] border border-[#111111]/12 bg-[#f4f1ea]/98 shadow-[0_20px_50px_-18px_rgba(17,17,17,0.22)] backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-[#111111]/10 bg-[#111111]/[0.03] px-4 py-2.5">
        <p className="text-[11px] uppercase tracking-[0.14em] text-[#b4693d]">
          Ask about Nirav
        </p>
        <button
          type="button"
          onClick={onCollapse}
          className="text-[11px] text-[#111111]/40 transition hover:text-[#111111]/70"
        >
          {messages.length > 0 ? "Clear" : "Close"}
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex max-h-[min(42vh,320px)] flex-col gap-2.5 overflow-y-auto px-4 py-3"
      >
        {messages.length === 0 && !loading && (
          <div className="flex flex-wrap gap-2 pb-1">
            {STARTERS.map((starter) => (
              <button
                key={starter}
                type="button"
                onClick={() => onStarter(starter)}
                className="rounded-full border border-[#111111]/10 bg-white/70 px-3 py-1.5 text-[12px] text-[#111111]/60 transition hover:border-[#b4693d]/45 hover:bg-[#b4693d]/[0.06] hover:text-[#111111]"
              >
                {starter}
              </button>
            ))}
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[88%] rounded-2xl px-3.5 py-2 text-[13px] leading-5 ${
              msg.role === "user"
                ? "ml-auto bg-[#111111] text-[#f4f1ea]"
                : "mr-auto border border-[#111111]/10 bg-white/80 text-[#111111]/70"
            }`}
          >
            {msg.role === "assistant" ? (
              <ChatMarkdown text={msg.text} />
            ) : (
              msg.text
            )}
          </div>
        ))}

        {loading && (
          <div className="mr-auto rounded-2xl border border-[#111111]/10 bg-white/80 px-3.5 py-2 text-[13px] text-[#111111]/45">
            Thinking…
          </div>
        )}
      </div>
    </div>
  );
}

export default function AskNiravPill() {
  const [overDarkBg, setOverDarkBg] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isOpen = expanded || messages.length > 0;
  const isLightBar = !isOpen && !overDarkBg;

  useEffect(() => {
    const checkBackground = () => {
      const pillTop = window.innerHeight - 88;
      const overDark = DARK_SECTIONS.some((selector) => {
        const el = document.querySelector(selector);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > pillTop;
      });
      setOverDarkBg(overDark);
    };

    checkBackground();
    window.addEventListener("scroll", checkBackground, { passive: true });
    window.addEventListener("resize", checkBackground);
    return () => {
      window.removeEventListener("scroll", checkBackground);
      window.removeEventListener("resize", checkBackground);
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        if (messages.length === 0 && !loading) {
          setExpanded(false);
        }
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen, messages.length, loading]);

  const expandBar = () => {
    setExpanded(true);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const collapseBar = () => {
    setExpanded(false);
    setMessages([]);
    setInput("");
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setExpanded(true);
    const userMessage: ChatMessage = { role: "user", text: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: trimmed,
          history: messages.map((m) => ({
            role: m.role === "user" ? "user" : "model",
            text: m.text,
          })),
        }),
      });

      const data = await res.json();
      const reply =
        data.text ||
        data.error ||
        "Something went wrong. Try again or email nirav@honrly.com.";

      setMessages([...nextMessages, { role: "assistant", text: reply }]);
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          text: "Could not reach the AI. Try again or email nirav@honrly.com.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 z-[320] flex justify-center px-3 max-sm:bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] sm:bottom-8">
      <div
        ref={containerRef}
        className="pointer-events-auto flex w-full justify-center"
      >
        <div
          className={`transition-[width,max-width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "w-full max-w-2xl" : "w-[13.25rem] sm:w-[14.25rem]"
          }`}
        >
          {isOpen && (
            <ChatPanel
              scrollRef={scrollRef}
              messages={messages}
              loading={loading}
              onCollapse={collapseBar}
              onStarter={sendMessage}
            />
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!isOpen) {
                expandBar();
                return;
              }
              sendMessage(input);
            }}
            className={`flex items-center overflow-hidden rounded-full border py-2 pl-3 pr-2 backdrop-blur-md transition-[gap,border-color,background-color,box-shadow] duration-300 sm:pl-4 ${
              isOpen
                ? "gap-2 border-[#111111]/15 bg-[#111111] shadow-[0_16px_48px_-14px_rgba(0,0,0,0.68)]"
                : isLightBar
                  ? "gap-1 border-[#111111]/12 bg-white/90 shadow-[0_10px_36px_-14px_rgba(17,17,17,0.14)]"
                  : "gap-1 border-white/[0.14] bg-[#2a2c31]/92 shadow-[0_16px_48px_-14px_rgba(0,0,0,0.68)]"
            }`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (!isOpen) expandBar();
                else inputRef.current?.focus();
              }}
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                isOpen
                  ? "text-[#f4f1ea]/50 hover:bg-white/[0.06] hover:text-[#d79a70]"
                  : isLightBar
                    ? "text-[#111111]/40 hover:bg-[#111111]/5 hover:text-[#111111]/65"
                    : "text-white/45 hover:bg-white/[0.06] hover:text-white/70"
              }`}
              aria-label="Suggestions"
            >
              <Plus className="h-4 w-4" />
            </button>

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onFocus={expandBar}
              placeholder="Ask about Nirav"
              disabled={loading}
              className={`min-w-0 flex-1 bg-transparent text-[14px] outline-none sm:text-[15px] ${
                isOpen
                  ? "text-[#f4f1ea] placeholder:text-[#f4f1ea]/35"
                  : isLightBar
                    ? "text-[#111111] placeholder:text-[#111111]/35"
                    : "text-white placeholder:text-white/35"
              }`}
            />

            {loading && isOpen && (
              <span className="hidden shrink-0 text-[12px] text-[#d79a70]/80 sm:inline">
                Thinking
              </span>
            )}

            <button
              type="submit"
              disabled={isOpen && (loading || !input.trim())}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition disabled:cursor-not-allowed ${
                isOpen
                  ? "bg-[#b4693d] text-[#f4f1ea] hover:bg-[#c4784a] disabled:bg-[#b4693d]/30 disabled:text-[#f4f1ea]/40"
                  : isLightBar
                    ? "bg-[#111111] text-[#f4f1ea] hover:bg-[#2a2a2a] disabled:bg-[#111111]/20 disabled:text-[#f4f1ea]/40"
                    : "bg-white text-[#111111] hover:bg-white/90 disabled:bg-white/25 disabled:text-white/30"
              }`}
              aria-label="Send"
            >
              <ArrowUp className="h-4 w-4 stroke-[2.5]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
