import { useState } from "react";
import Spinner from "./spinner";

export default function Contact({ onSending }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isRespMessage, setIsRespMessage] = useState({
    message: "mail is sent",
    isError: false,
  });
  const [isReceived, setIsReceived] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !subject || !email || !message) return;

    const isFetch = await fetch(
      "https://portfolio-eight-alpha-78.vercel.app/api/mongo",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: "QWJkdWxBaGFkVGh1cnNkYXkxM01hcmNoMjAyNQ==",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
        }),
      }
    );
    onSending(true);
    document.body.classList.add("no-scroll");
    switch (isFetch.status) {
      case 201:
        {
          const isResp = await isFetch.json();
          setIsReceived(true);
          setIsRespMessage({
            message: isResp.success,
            isError: false,
          });
          onSending(false);
          document.body.classList.remove("no-scroll");
          setTimeout(() => {
            setIsReceived(false);
          }, 2000);
        }
        break;
      case 400:
        {
          const isResp = await isFetch.json();
          setIsReceived(true);
          setIsRespMessage({
            message: isResp.error,
            isError: true,
          });
          onSending(false);
          document.body.classList.remove("no-scroll");
          setTimeout(() => {
            setIsReceived(false);
          }, 2000);
        }
        break;
      case 500:
        {
          const isResp = await isFetch.json();
          setIsReceived(true);
          setIsRespMessage({
            message: isResp.error,
            isError: true,
          });
          onSending(false);
          document.body.classList.remove("no-scroll");
          setTimeout(() => {
            setIsReceived(false);
          }, 2000);
        }
        break;
      case 409:
        {
          const isResp = await isFetch.json();
          setIsReceived(true);
          setIsRespMessage({
            message: isResp.error,
            isError: true,
          });
          onSending(false);
          document.body.classList.remove("no-scroll");
          setTimeout(() => {
            setIsReceived(false);
          }, 2000);
        }
        break;
      default:
        setIsReceived(true);
        setIsRespMessage({
          message: "Invalid Request",
          isError: true,
        });
        onSending(false);
        document.body.classList.remove("no-scroll");
        setTimeout(() => {
          setIsReceived(false);
        }, 2000);
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
      {isReceived && (
        <div className="message-fix">
          <div
            className={`message-fix-content ${
              isRespMessage.isError ? "active" : ""
            }`}
          >
            <p>{isRespMessage.message}</p>
          </div>
        </div>
      )}
    </section>
  );
}
