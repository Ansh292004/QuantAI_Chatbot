
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

📂 Assets Folder
```
🔹The src/assets/ folder contains all the static icons and images used across the application. These are imported directly into React components and styled via CSS
🔹If you want to add more icons, place them inside the src/assets/ folder and import them 
```

⚠️ Important Notes
```
🔹The API key in this repo is a placeholder just for demonstration.
🔹Gemini models are continuously updated, and code snippets may change over time.
🔹For the latest examples and best practices, always check the official docs:
```
  [Google AI Gemini Documentation](https://aistudio.google.com/)

## Project Structure
```
CLONE
│── node_modules/        # Installed dependencies (auto-generated)
│── public/
│   └── index.html       # Main HTML entry file
│
│── src/                 # Your source code
│   │── assets/          # Images/icons (SVGs, etc.)
│   │── favicon          # App icon
│   │── App.css          # Styling for App component
│   │── App.js           # Main App component (your UI is here)
│   │── gemini.js        # Likely your AI/logic integration file
│   │── index.js         # React entry point, renders <App/>
│
│── .gitignore           # Git ignore rules
│── package-lock.json    # Exact dependency versions (auto-generated)
│── package.json         # Project metadata + dependencies
│── README.md            # Project documentation
```



