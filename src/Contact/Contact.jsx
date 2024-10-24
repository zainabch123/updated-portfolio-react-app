import './contact.css'

export default function Contact() {
  return (
      <section
        className="contact-section"
        id="contact-section"
      >
        <h2>Get in touch</h2>
        <p>
          Feel free to reach out if you have any questions or would like to
          discuss a project.
        </p>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea id="message-area" placeholder="Message"></textarea>
          <input id="submit-button" type="submit" value="Submit" />
        </form>
      </section>
  );
}
