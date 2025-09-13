# Gemini AI Chat App

A simple chat interface powered by **Google Gemini API (2.5 Flash)**.  
This project demonstrates how to integrate Gemini into a React frontend and build a conversational AI experience.

---

## Features
- 🔹 Chat interface with user and AI messages  
- 🔹 Sidebar with quick actions & query suggestions  
- 🔹 Smooth UI with hover effects and styled components  
- 🔹 Gemini 2.5 Flash integration for fast responses  


---

##  Setup Instructions

1. Clone the repo
```
git clone https://github.com/Ansh292004/QuantAI_Chatbot.git
cd QuantAI_Chatbot
```
2. Install dependencies
```
npm install
```
3. Get your Gemini API key
```
🔹Go to Google AI Studio
🔹Generate a new API key
🔹Then update the code in askGemini.js:

import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
  apiKey: YOUR API KEY HERE,
});
```
4. Run the app
 ```
npm run dev
```



