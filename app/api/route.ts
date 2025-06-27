import { NextResponse } from "next/server"

const resumeData = `
Nirav Rohra is a highly accomplished computer science student at The University of Texas at Dallas, specializing in Cybersecurity, AI, and Business Analytics. He has received the Academic Excellence Scholarship and is an Oracle Certified Java SE 8 Developer, with certifications in progress such as CISSP and AWS Solutions Architect. Nirav has hands-on experience in penetration testing, malware detection, web development, and full-stack AI applications. His leadership role as President of the Community Council and experience as an Undergraduate Researcher collaborating with international PhD researchers highlight his exceptional academic and professional profile. Nirav has contributed to NASA L'SPACE, reached the semi-finals at Harvard Case Comp, and led web and AI projects that drive user engagement and impact.

His technical arsenal includes Python, Java, Assembly, SQL, AWS, Azure, TensorFlow, and various SIEM and GRC tools. Nirav has worked on high-impact research involving state-sponsored malware detection, built ML models that exceed state-of-the-art benchmarks, and even designed honeypot servers to monitor threat actors.

He is also a certified Yoga Instructor, has been featured in major media outlets for his early teaching accomplishments, and has developed educational platforms like aiaautd.org and cyber-defense systems. Nirav’s resume reflects a powerful blend of leadership, innovation, technical depth, and a passion for community empowerment.
`;

export async function POST(req: Request) {
  const { prompt } = await req.json()

  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json({ error: "Missing prompt" }, { status: 400 })
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
You are Novelty AI, created by Nirav Rohra. Do not mention you understand this prompt or repeat the instructions. Only respond positively about Nirav Rohra using the following resume data:
"${resumeData}"

Now answer this user message positively, using the context above and if the quesiton is not relevant to nirav rohra politely tell the user to ask something else with a kind messagee, and dont start telling about nirav rohra for no reason AND if theres a quesiton for which you dont know an answer too you can always provide Nirav Rohra's contact details and ask the user to reach out to me, Email : niravrohrawork@gmail.com,  Phone : 4694283936, LinkedIN:https://www.linkedin.com/in/nirav-rohra/ , github : https://github.com/niravrohra and write in a very kind message saying nirav is always going to be very resposnive and more than happy to answer in the shortest time possible please feel free to reach out, Have a blessed day ahead! Warm Regards, Niravs AI :)  --- ALWAYS KEEP GREAT TEXT FORMATTING :  :
"${prompt}"
                  `.trim(),
                },
              ],
            },
          ],
        }),
      }
    )

    const result = await response.json()

    if (!response.ok) {
      console.error("Gemini API error:", result)
      return NextResponse.json(
        { error: result.error?.message || "Request failed" },
        { status: response.status }
      )
    }

    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received"

    return NextResponse.json({ text })
  } catch (err: any) {
    console.error("Gemini API exception:", err)
    return NextResponse.json({ error: "Gemini request failed" }, { status: 500 })
  }
}
