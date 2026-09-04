import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../Styles/Contact.css";
import Button from "../Components/Button";

export default function Contact() {
  const form = useRef();
  const formOpenedAt = useRef(Date.now());
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const cooldownMs = 60 * 1000;
  const cooldownKey = "contact-form-last-sent";

  const sendEmail = (e) => {
    e.preventDefault();

    const now = Date.now();
    const honeypotValue = form.current.elements.website.value;
    const lastSentAt = Number(localStorage.getItem(cooldownKey) || 0);

    // Bots commonly fill hidden inputs; do not reveal that the message was rejected.
    if (honeypotValue) {
      form.current.reset();
      return;
    }

    if (now - formOpenedAt.current < 2000) {
      setStatus("Please take a moment to complete the form before sending.");
      return;
    }

    const remainingSeconds = Math.ceil((cooldownMs - (now - lastSentAt)) / 1000);
    if (remainingSeconds > 0) {
      setStatus(`Please wait ${remainingSeconds} seconds before sending another message.`);
      return;
    }

    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_zzt4i3v",   
        "template_7p2de79",  
        form.current,
        "fTCW55-yPJzmmz42_" 
      )
      .then(
        () => {
          localStorage.setItem(cooldownKey, String(Date.now()));
          form.current.reset();
          formOpenedAt.current = Date.now();
          setStatus("Message sent — thank you.");
        },
        () => {
          setStatus("Your message could not be sent. Please try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Send Me a Message</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" type="text" name="website" tabIndex="-1" autoComplete="off" />
        </div>
        <div className="form-group">
          {/* <label htmlFor="name">Name</label> */}
          <input id="name" type="text" name="name" required placeholder="Name" maxLength="80"/>
        </div>

        <div className="form-group">
          {/* <label htmlFor="email">Email</label> */}
          <input id="email" type="email" name="email" required placeholder="Email" maxLength="254"/>
        </div>

        <div className="form-group">
          {/* <label htmlFor="subject">Subject</label> */}
          <input id="subject" type="text" name="title" required placeholder="Subject" maxLength="120"/>
        </div>

        <div className="form-group">
          {/* <label htmlFor="message">Message</label> */}
          <textarea id="message" name="message" required placeholder="Type your message.." maxLength="2000"/>
        </div>

        {/* <button type="submit" className="contact-btn">Send</button> */}
        <Button type="submit" disabled={isSending} text={isSending ? "Sending…" : "Send"}/>
        {status && <p className="form-status" role="status">{status}</p>}
      </form>

      
    </div>
  );
}
