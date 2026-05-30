import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatMarkdownProps = {
  text: string;
  className?: string;
};

export default function ChatMarkdown({ text, className = "" }: ChatMarkdownProps) {
  return (
    <div className={`chat-markdown ${className}`.trim()}>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => (
          <p className="mb-2 last:mb-0 [&:not(:first-child)]:mt-0">{children}</p>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-[#111111]">{children}</strong>
        ),
        ul: ({ children }) => (
          <ul className="mb-2 list-disc space-y-1 pl-4 last:mb-0">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-2 list-decimal space-y-1 pl-4 last:mb-0">{children}</ol>
        ),
        li: ({ children }) => <li className="leading-5">{children}</li>,
        h1: ({ children }) => (
          <p className="mb-1.5 text-[13px] font-semibold text-[#111111]">{children}</p>
        ),
        h2: ({ children }) => (
          <p className="mb-1.5 text-[13px] font-semibold text-[#111111]">{children}</p>
        ),
        h3: ({ children }) => (
          <p className="mb-1 text-[13px] font-semibold text-[#111111]">{children}</p>
        ),
        a: ({ href, children }) => (
          <span className="break-all text-[#b4693d]">{href ?? children}</span>
        ),
        code: ({ children }) => (
          <code className="rounded bg-[#111111]/[0.06] px-1 py-0.5 text-[12px]">
            {children}
          </code>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
    </div>
  );
}
