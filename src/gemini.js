
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "YOUR_API_KEY",
});

async function askGemini(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    console.log("Raw Gemini response:", response);

    const text =
      response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini";

    return text;
  } catch (err) {
    console.error("Gemini API error:", err);
    return "Error calling Gemini API.";
  }
}

export default askGemini;




