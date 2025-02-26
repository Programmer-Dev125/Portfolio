export default function Contact() {
  return (
    <section className="contact-page">
      <h2>Contact Me - Will reply in 24 Hours</h2>
      <form className="contact-form mt50" autoComplete="off">
        <div>
          <label htmlFor="username">Name</label>
          <input type="text" id="username" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input type="text" id="age" placeholder="Enter your age" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter your email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            placeholder="Enter your message"
            rows={14}
          />
        </div>
        <div>
          <button>Send Mail</button>
        </div>
      </form>
    </section>
  );
}
