import React, { useState, useRef } from 'react';
import phoneIcon from '../assets/images/phone-call-icon.svg';
import mailIcon from '../assets/images/envelope-icon.svg';
import linkedinIcon from '../assets/images/linkedin-square-icon.svg';
import gitIcon from '../assets/images/git-icon.svg';
import instaIcon from '../assets/images/black-instagram-icon.svg';
import './contact.css';

const Contact = () => {
  const [contactDetail, setContactDetail] = useState('Hover on icons');
  const contactDetailsRef = useRef(null);

  const handleCopy = () => {
    contactDetailsRef.current.select();
    document.execCommand('copy');
  };

  const handleMouseOver = (value) => {
    setContactDetail(value);
  };

  return (
    <div className="Contact">
      <div className="contact-container d-flex jcc aic flex-direction-col h-100">
        <div className="contact-content pad-2">
          <div className="contact-wrapper">
            <a
              href="tel:+14377661549"
              className="contact-detail"
              aria-valuetext="+14377661549"
              onMouseOver={() => handleMouseOver('+14377661549')}
            >
              <img src={phoneIcon} alt="Phone" />
            </a>
            <a
              href="mailto:patelam.stock@gmail.com?subject=Contact&body=Message"
              className="contact-detail"
              target="_blank"
              aria-valuetext="patelam.stock@gmail.com"
              onMouseOver={() => handleMouseOver('patelam.stock@gmail.com')}
            >
              <img src={mailIcon} alt="Email" />
            </a>
            <a
              href="https://www.linkedin.com/in/abrar-ahmad-patel/"
              className="contact-detail"
              target="_blank"
              aria-valuetext="https://www.linkedin.com/in/abrar-ahmad-patel/"
              onMouseOver={() => handleMouseOver('https://www.linkedin.com/in/abrar-ahmad-patel/')}
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/abrarapatel/snap-library"
              className="contact-detail"
              target="_blank"
              aria-valuetext="https://github.com/abrarapatel/snap-library"
              onMouseOver={() => handleMouseOver('https://github.com/abrarapatel/snap-library')}
            >
              <img src={gitIcon} alt="GitHub" />
            </a>
            <a
              href="https://www.instagram.com/abrarapatel/"
              className="contact-detail"
              target="_blank"
              aria-valuetext="https://www.instagram.com/abrarapatel/"
              onMouseOver={() => handleMouseOver('https://www.instagram.com/abrarapatel/')}
            >
              <img src={instaIcon} alt="Instagram" />
            </a>
          </div>
          <div className="contact-details-shower">
            <input
              type="text"
              id="contactDetailsCopy"
              className="contact-details-copy-input"
              value={contactDetail}
              ref={contactDetailsRef}
              readOnly
            />
            <button
              id="copyBtnForContactDetails"
              className="copy-btn-for-contact-details"
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
        </div>
        <form action="">
          <div className="contact-form">
            <input type="text" placeholder="Enter contact details" />
            <textarea placeholder="Enter your message"></textarea>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
