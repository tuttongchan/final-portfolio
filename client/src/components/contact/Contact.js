import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_fr1qs3k',
        'template_tq05r9d',
        e.target,
        'user_yqXy8VZ74Cv2Ehx5XfKlw'
      )
      .then((res) => {
        console.log(res);
        setError(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contact-container" id="contact">
      <span className="contact-span">03. What's Next?</span>
      <h1 className="contact-heading">Get In Touch!</h1>
      <div className="container">
        <div className="form">
          <form onSubmit={sendEmail}>
            <div className="inputBox">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="inputBox">
              <input type="text" name="user_email" placeholder="Email" />
            </div>
            <div className="inputBox">
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Message"
              />
            </div>
            <div className="inputBox">
              <input type="submit" value="Submit" />
            </div>
            <div className="error-container">
              {error ? (
                <h1 className="error-message">Email was sent!</h1>
              ) : null}
            </div>
          </form>
        </div>
      </div>
      <div foot-list-container>
        <ul className="foot-list">
          <li className="item-list">
            <i className="fas fa-map-marker-alt"></i>
            Los Angeles County
          </li>
          <li className="item-list">
            <i className="fas fa-phone-alt"></i>
            626-873-0910
          </li>
          <li className="item-list">
            <i className="far fa-envelope"></i> tuttenkamen@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
