import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zzt4i3v",   // from EmailJS
        "template_7p2de79",  // from EmailJS
        form.current,
        "fTCW55-yPJzmmz42_"    // from EmailJS
      )
      .then(
        () => {
          alert("Message sent!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send: " + error.text);
        }
      );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Chat With Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Email:</label>
        <input type="email" name="user_email" required />
        <label>Message:</label>
        <textarea name="message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}