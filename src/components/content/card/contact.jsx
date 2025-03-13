import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !subject || !email || !message) return;

    const isFetch = await fetch(
      "https://portfolio-eight-alpha-78.vercel.app/api/mongo",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
        }),
      }
    );
    switch (isFetch.status) {
      case 201:
        {
          const isResp = await isFetch.json();
          alert(isResp.success);
        }
        break;
      case 400:
        {
          const isResp = await isFetch.json();
          alert(isResp.error);
        }
        break;
      case 500:
        {
          const isResp = await isFetch.json();
          alert(isResp.error);
        }
        break;
      default:
        alert("Invalid Request");
        break;
    }

    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
    return;
  }

  return (
    <section className="contact-page relative">
      <p className="page-title">Contact Me - Will reply in 24 Hours</p>
      <form
        onSubmit={handleSubmit}
        className="contact-form mt40"
        autoComplete="off"
      >
        <div className="mb40">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
          <span className={`condition-text`}>
            Name should only include characters and numbers
          </span>
        </div>
        <div className="mb40">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter your subject"
            required
          />
          <span className={`condition-text`}>
            Subject should only include characters and numbers
          </span>
        </div>
        <div className="mb40">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <span className={`condition-text`}>Enter a valid gmail address</span>
        </div>
        <div className="mb40">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows={14}
            required
          />
          <span className={`condition-text`}>
            Message shouldn't be more than 50 characters and should only include
            characters and numbers.
          </span>
        </div>
        <div>
          <button>Send Mail</button>
        </div>
      </form>
    </section>
  );
}
