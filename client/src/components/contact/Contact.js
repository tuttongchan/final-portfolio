import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <span className="contact-span">03. What's Next</span>
      <h1 className="contact-heading">Get In Touch!</h1>
      <div className="container">
        <div className="form">
          {/* <h2>Signup Form</h2> */}
          <form>
            {/* <div className="inputBox">
              <input type="text" name="firstName" placeholder="First Name..." />
            </div> */}
            <div className="inputBox">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="inputBox">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="inputBox">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="inputBox">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      <div>
        <ul className="foot-list">
          <li className='item-list'>
            <i class="fas fa-map-marker-alt"></i>
            Los Angeles County
          </li>
          <li className='item-list'>
            <i class="fas fa-phone-alt"></i>
            626-873-0910
          </li>
          <li className='item-list'>
            <i class="far fa-envelope"></i> tuttenkamen@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
