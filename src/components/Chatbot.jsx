import { useEffect, useMemo, useRef, useState } from "react";
import { FaArrowRight, FaComments, FaPaperPlane, FaTimes, FaUser } from "react-icons/fa";

const faqs = [
  ["What services do you offer?", "I work across CAD & Mechanical Design, CNC & Production Support, Machine Servicing & Repair, and Web & Digital Systems."],
  ["Can I book a consultation?", "Yes. Use the Start a Project booking form to describe the challenge and request a preferred time."],
  ["What kind of projects do you take?", "Engineering, fabrication, machine reliability and practical digital projects are all welcome. The best starting point is to describe the actual problem."],
  ["How can I contact Abednego?", "You can use WhatsApp, email, or the Contact page. I can also collect your details here and pass them into the project enquiry."],
  ["Can I pay online?", "The booking area provides layouts for card, PayPal, Binance Pay and PesaPal. Live merchant credentials can be connected when you are ready."]
];

function answerFor(message) {
  const m = message.toLowerCase();
  if (m.includes("service") || m.includes("offer")) return faqs[0][1];
  if (m.includes("book") || m.includes("consult")) return faqs[1][1];
  if (m.includes("project")) return faqs[2][1];
  if (m.includes("contact") || m.includes("whatsapp") || m.includes("email")) return faqs[3][1];
  if (m.includes("pay") || m.includes("payment") || m.includes("card")) return faqs[4][1];
  if (m.includes("calendar") || m.includes("free") || m.includes("available")) return "You can check the availability calendar in the booking section, then submit a preferred time. Google Calendar can be connected to show live availability once the calendar ID/API settings are supplied.";
  return "I can help you understand the services, choose the right next step, start a project enquiry, or collect your contact details. What are you trying to design, build, repair or improve?";
}

function Chatbot() {
  const [open,setOpen]=useState(false);
  const [messages,setMessages]=useState([{from:"bot",text:"Hi — I’m Morara Assistant. Welcome to Abednego Morara. What are you trying to design, build, repair or improve?"}]);
  const [input,setInput]=useState("");
  const [lead,setLead]=useState({name:"",email:"",phone:""});
  const [leadMode,setLeadMode]=useState(false);
  const endRef=useRef(null);

  useEffect(()=>endRef.current?.scrollIntoView({behavior:"smooth"}),[messages]);

  const quick = useMemo(()=>["What services do you offer?","Can I book a consultation?","I want to start a project"],[]);

  function send(text=input) {
    const value=text.trim(); if(!value) return;
    setMessages(m=>[...m,{from:"user",text:value},{from:"bot",text:answerFor(value)}]);
    setInput("");
    if (/start|contact|quote|project enquiry/i.test(value)) setLeadMode(true);
  }

  async function captureLead(e) {
    e.preventDefault();
    try {
      const body = new FormData();
      body.append("name", lead.name);
      body.append("email", lead.email);
      body.append("phone", lead.phone);
      body.append("_subject", "New Lead - Morara Assistant");
      body.append("_replyto", lead.email);
      await fetch("https://formsubmit.co/ajax/morara603@gmail.com", { method:"POST", body, headers:{Accept:"application/json"} });
      setMessages(m=>[...m,{from:"bot",text:`Thanks ${lead.name || "there"}. I’ve captured your contact details. Use the booking form to add the full project brief, or continue here with your question.`}]);
      setLeadMode(false);
    } catch {
      setMessages(m=>[...m,{from:"bot",text:"I couldn't send the details just now. Please use the Contact or Booking page so your enquiry reaches me."}]);
    }
  }

  return <div className={`chatbot ${open?"open":""}`}>
    {open && <div className="chat-window">
      <div className="chat-header"><div><strong>Morara Assistant</strong><span>Engineering • Fabrication • Digital</span></div><button onClick={()=>setOpen(false)} aria-label="Close chatbot"><FaTimes/></button></div>
      <div className="chat-messages">
        {messages.map((m,i)=><div key={i} className={`chat-message ${m.from}`}>{m.from==="bot"&&<span className="chat-avatar"><FaComments/></span>}<span>{m.text}</span></div>)}
        <div ref={endRef}/>
      </div>
      {!leadMode && <div className="chat-quick">{quick.map(q=><button key={q} onClick={()=>send(q)}>{q}</button>)}</div>}
      {leadMode && <form className="chat-lead" onSubmit={captureLead}>
        <strong>Leave your details</strong>
        <input required placeholder="Your name" value={lead.name} onChange={e=>setLead({...lead,name:e.target.value})}/>
        <input required type="email" placeholder="Email" value={lead.email} onChange={e=>setLead({...lead,email:e.target.value})}/>
        <input placeholder="Phone / WhatsApp" value={lead.phone} onChange={e=>setLead({...lead,phone:e.target.value})}/>
        <button type="submit">Send details <FaArrowRight/></button>
      </form>}
      <div className="chat-input"><input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Ask about a project..." aria-label="Chat message"/><button onClick={()=>send()} aria-label="Send"><FaPaperPlane/></button></div>
    </div>}
    <button className="chat-launcher" onClick={()=>setOpen(v=>!v)} aria-label="Open Morara Assistant">{open?<FaTimes/>:<FaComments/>}<span>Morara Assistant</span></button>
  </div>
}
export default Chatbot;
