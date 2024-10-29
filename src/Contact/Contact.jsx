import './contact.css'

export default function Contact() {
  return (
    <section className="contact-section" id="contact-section">
      <h2>Get in touch</h2>
      <p>
        Feel free to reach out if you have any questions or would like to
        discuss a project.
      </p>
      <form
        action="https://public.herotofu.com/v1/1ddc7270-9619-11ef-840d-9fdbf4f87a8b"
        method="POST"
      >
        <input type="text" placeholder="Name" name="Name" id="name" required />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          id="email"
          required
        />
        <textarea
          id="message"
          placeholder="Message"
          name="Message"
        ></textarea>
        <input id="submit-button" type="submit" value="Submit" />
        <div
          style={{
            textIndent: "-99999px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "absolute",
          }}
          aria-hidden="true"
        >
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
        </div>
      </form>
    </section>
  );
}
