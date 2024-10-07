import React from 'react';
import './contactUs.css';
import { Heading } from '../Heading';
import FooterTop from '../footer/FooterTop';
import CardContact from './CardContact';
import InputField from './InputField'; 
import Swal from 'sweetalert2'

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "ca5fd80f-3a5f-4080-9702-14b0684a5d2c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully",
        icon: "success"
      });
      
      form.reset();
    }
  };

  return (
    <div>
      <div className="contact-section">
        <Heading redtext="CONTACT" whitetext="US" />
      </div>
      <div className='contact-image'>
        <div className='content-middle'>
          <div className="content-text">
            <h2>DON'T BE HESITATED</h2>
            <h1> ____SEND A MESSAGE NOW !</h1>
            <div className="form-section">
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-row">
                  <InputField type="text" placeholder="First Name*" className="input-field" name='firstname' required />
                  <InputField type="text" placeholder="Last Name*" className="input-field" name='lastname' required />
                </div>
                <div className="form-row">
                  <InputField type="email" placeholder="Your Email*" className="input-field" name='email' required />
                  <InputField type="text" placeholder="Subject*" className="input-field" name='subject' required />
                </div>
                <div className="form-row">
                  <textarea placeholder="Message" className="input-message" name='message' required></textarea>
                </div>
                <div className="form-row">
                  <button type="submit" className="send-message-btn">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <CardContact />
        </div>
      </div>
      <FooterTop />
    </div>
  );
};

export default ContactUs;
