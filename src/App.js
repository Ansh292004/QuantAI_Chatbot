import './App.css';
import sidelogo from './assets/chsb.svg';
import home from './assets/home.svg';
import library from './assets/library.svg';
import upgrade from './assets/upgrade.svg';
import add from './assets/add.svg';
import message from './assets/message.svg';
import send from './assets/send.svg';
import usericon from './assets/userw.svg';
import askGemini from './gemini.js';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {

  const msgEnd=useRef(null);
  const [input,setInput]=useState("")
  const [messages,setMessages]=useState([
    {
    text: "⚡ Meet Quant AI — your smart companion for navigating knowledge and solving problems. Whether it’s coding, learning new concepts, or getting instant answers, I’ve got you covered. Fast, clear, and always ready to assist.",
    isBot:true,
    }
]);

useEffect(()=>{
  msgEnd.current.scrollIntoView();
},[messages])
//-------------------- 
  const handleSend = async () => {
  if (!input.trim()) return;
  try {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      {text,isBot:false}
    ])
    const res = await askGemini(input);
    setMessages([
      ...messages,
      {text,isBot:false},
      {text:res,isBot:true}
    ]);
    setInput("");
    // console.log("Gemini Reply:", res);
  } catch (err) {
    console.error("Error:", err);
  }
};

const handleEnter=async (e)=>{
  if(e.key==='Enter') await handleSend();
}

const handleQuery=async (e)=>{
  try {
    const text = e.target.value;
    setMessages([
      ...messages,
      {text,isBot:false}
    ]);
    const res = await askGemini(text);
    setMessages([
      ...messages,
      {text,isBot:false},
      {text:res,isBot:true}
    ]);
    setInput("");
    // console.log("Gemini Reply:", res);
  } catch (err) {
    console.error("Error:", err);
  }

}
//------------------
  return (
    <div className="App">
      <div className='sidebar'>
          <div className='upperSide'>
              <div className='upperSideTop' onClick={()=>{window.location.reload()}}><img src={sidelogo} alt='Logo' className='logo'/><span class="brand">QuantAI</span></div>
              <button className="midBtn" onClick={()=>{window.location.reload()}} ><img src={add} alt="midBtn"  className="addBtn"/>New Chat</button>
              <div className="upperSideBottom">
                <button className="query" onClick={handleQuery} value={"India's economy today"}><img src={message} alt="" className="query1"/>India's economy today</button>
                <button className="query" onClick={handleQuery} value={"What is REST API?"}><img src={message} alt="" className="query2"/>What is REST API?</button>
              </div>
          </div>
          <div className="lowerSide">
              <div className="listItems" onClick={()=>{window.location.reload()}}><img src={home} alt="home" className="listitemsImg1"/>Home</div>
              <div className="listItems"><img src={library} alt="library" class="listitemsImg2"/>Library</div>
              <div className="listItems"><img src={upgrade} alt="upgrade" class="listitemsImg3"/>Upgrade to pro</div>
          </div>
      </div>
      <div className="main">
          <div className="chats">

             
          {messages.map((message,i)=>
                <div key={i} className={message.isBot?"botchat":"chat"}>
                 <img src={message.isBot ? sidelogo : usericon} alt='' className="logo"/>
 <p className='txt'><ReactMarkdown>{message.text}</ReactMarkdown></p>
                </div>
          )}
          <div ref={msgEnd}/>
          </div>
            <div className="chatFooter">
              <div className="inp">
                  <input type="text" placeholder='Enter your prompt here...' value={input} onKeyDown={handleEnter} onChange={(e)=>{setInput(e.target.value)}}/><button className="send" onClick={handleSend}><img src={send} alt=""/></button>
              </div>
              <p >Responses are AI-generated and may not be accurate. Please verify important information before use.</p>
              <p className='copyright'>© 2025 Quant AI. All rights reserved</p>
          </div>
      </div>
    </div>
  );
}

export default App;
