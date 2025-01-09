import { useState, useRef } from 'react';

import './contact.css'

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const [isVisible, setIsVisible] = useState(false);

    const handleOnClickEmail = () => {
      setIsVisible(!isVisible);
    };

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
  }

  console.log(formData.Message)

  

  return (
    <section className="contact-section  animated-section" id="contact-section">
      <h2 className="title animated-section">Get in touch</h2>
      <p className="animated-section">
        Feel free to reach out if you have any questions or would like to
        discuss a project.
      </p>
      <div className="contact-me-links animated-section">
        <div className="linkedIn animated-section">
          <a href="https://www.linkedin.com/in/zainab-choudhry-244005189/">
            <svg
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
            </svg>
          </a>
        </div>
        <div className="email animated-section" onClick={handleOnClickEmail}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="40px"
            width="40px"
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>

          {isVisible && (
            <div className="email-content">
              <h4>zainabchoudhry05@gmail.com</h4>
            </div>
          )}
        </div>
        <div className="gitHub animated-section">
          <a href="https://github.com/zainabch123">
            <svg
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="40px"
              width="40px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
          </a>
        </div>
      </div>
      <form
        ref={formRef}
        action="https://public.herotofu.com/v1/1ddc7270-9619-11ef-840d-9fdbf4f87a8b"
        method="POST"
        className="animated-section"
      >
        <input type="text" placeholder="Name" name="Name" id="name" required />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          id="email"
          required
        />
        <textarea id="message" placeholder="Message" name="Message"></textarea>
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
