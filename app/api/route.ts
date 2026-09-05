import { NextResponse } from "next/server";
import { BLESSED_DAY_CLOSING, niravSystemPrompt } from "@/lib/nirav-profile";

function ensureBlessedDayClosing(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return BLESSED_DAY_CLOSING;
  if (trimmed.toLowerCase().includes("have a blessed day ahead")) {
    return trimmed;
  }
  return `${trimmed}\n\n${BLESSED_DAY_CLOSING}`;
}

type HistoryMessage = {
  role: "user" | "model";
  text: string;
};

const GROQ_MODEL = "openai/gpt-oss-20b";

export async function POST(req: Request) {
  const { prompt, history = [] } = await req.json();

  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
  }

  if (!process.env.GROQ_API_KEY) {
    return NextResponse.json(
      { error: "Groq API key not configured" },
      { status: 500 }
    );
  }

  const validHistory = (history as HistoryMessage[]).filter(
    (m) =>
      m &&
      (m.role === "user" || m.role === "model") &&
      typeof m.text === "string"
  );

  const messages = [
    { role: "system" as const, content: niravSystemPrompt },
    ...validHistory.map((m) => ({
      role: (m.role === "model" ? "assistant" : "user") as "user" | "assistant",
      content: m.text,
    })),
    { role: "user" as const, content: prompt },
  ];

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages,
          temperature: 0.7,
          max_tokens: 1024,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Groq API error:", result);
      return NextResponse.json(
        { error: result.error?.message || "Request failed" },
        { status: response.status }
      );
    }

    const raw =
      result?.choices?.[0]?.message?.content || "No response received.";
    const text = ensureBlessedDayClosing(raw);

    return NextResponse.json({ text });
  } catch (err) {
    console.error("Groq API exception:", err);
    return NextResponse.json({ error: "Groq request failed" }, { status: 500 });
  }
}
