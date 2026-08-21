import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
function Newsletter() {
 const [done,setDone]=useState(false); const [sending,setSending]=useState(false);
 async function subscribe(e){e.preventDefault();setSending(true);const email=e.currentTarget.email.value;try{
   const body=new FormData(); body.append("email",email); body.append("_subject","New Newsletter Subscriber - Abednego Morara");
   await fetch("https://formsubmit.co/ajax/morara603@gmail.com",{method:"POST",body,headers:{Accept:"application/json"}});
   setDone(true);
 }catch{alert("Unable to subscribe right now. Please try again.");}finally{setSending(false)}}
 return <section className="newsletter-section"><div><p className="eyebrow">STAY IN THE LOOP</p><h2>Useful updates.<br /><span>No noise.</span></h2><p>Subscribe for project updates, engineering notes and new work.</p></div>
 {done ? <div className="newsletter-success">You’re on the list. Thank you.</div> :
 <form className="newsletter-form" onSubmit={subscribe}><input name="email" type="email" required placeholder="Your email address" aria-label="Email address"/><button disabled={sending}>{sending?"Subscribing...":<>Subscribe <FaArrowRight/></>}</button><small>You can unsubscribe at any time.</small></form>}
 </section>
}
export default Newsletter;
