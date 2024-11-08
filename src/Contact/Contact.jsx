import { useState, useRef } from 'react';

import './contact.css'

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleOnInput = (event) => {
    const {name, value} = event.target;

    console.log(event.target)
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleOnSubmit = (event) => {
    setFormData({
      Name: "",
      Email: "",
      Message: "",
    });

    if (formRef.current) {
      formRef.current.reset(); 
    }
  }

  console.log(formData.Message)

  

  return (
    <section className="contact-section  animated-section" id="contact-section">
      <h2 className="title animated-section">Get in touch</h2>
      <p className="animated-section">
        Feel free to reach out if you have any questions or would like to
        discuss a project.
      </p>
      <form
        ref={formRef}
        action="https://public.herotofu.com/v1/1ddc7270-9619-11ef-840d-9fdbf4f87a8b"
        method="POST"
        className="animated-section"
      >
        <input
          type="text"
          placeholder="Name"
          name="Name"
          id="name"
          required
        />
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
        <button id="submit-button" type="submit">
          Submit
        </button>
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
