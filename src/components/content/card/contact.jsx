export default function Contact() {
  return (
    <section className="contact-page">
      <p className="page-title">Contact Me - Will reply in 24 Hours</p>
      <form className="contact-form mt40" autoComplete="off">
        <div>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            placeholder="Enter your age"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            placeholder="Enter your message"
            rows={14}
            required
          />
        </div>
        <div>
          <button>Send Mail</button>
        </div>
      </form>
    </section>
  );
}
