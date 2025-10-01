import { useRef } from "react";
import emailjs from "emailjs-com";
import "../Styles/Contact.css";
import Button from "../Components/Button";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zzt4i3v",   
        "template_7p2de79",  
        form.current,
        "fTCW55-yPJzmmz42_" 
      )
      .then(
        () => {
          //alert("Message sent!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send: " + error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Send Me a Message</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          {/* <label htmlFor="name">Name</label> */}
          <input id="name" type="text" name="name" required placeholder="Name"/>
        </div>

        <div className="form-group">
          {/* <label htmlFor="email">Email</label> */}
          <input id="email" type="email" name="email" required placeholder="Email"/>
        </div>

        <div className="form-group">
          {/* <label htmlFor="subject">Subject</label> */}
          <input id="subject" type="text" name="title" required placeholder="Subject"/>
        </div>

        <div className="form-group">
          {/* <label htmlFor="message">Message</label> */}
          <textarea id="message" name="message" required placeholder="Type your message.."/>
        </div>

        {/* <button type="submit" className="contact-btn">Send</button> */}
        <Button type="submit" className="contact-btn" text="Send"/>
      </form>

      
    </div>
  );
}