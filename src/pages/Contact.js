import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export const ContactUs = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ilcroth', 'template_a0dy2ad', form.current, {
        publicKey: 'WaVsuYe1L2XiEOcif',
      })
      .then(
        () => {
          console.log('MESSAGE SENT SUCCESSFULLY!');
          setIsEmailSent(true); // Update state to indicate email sent
          // Reset the form fields
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <style>{`
        .contact-form {
            max-width: 500px;
            margin: 0; /* Remove auto margin */
            padding: 20px;
            border-radius: 8px;             
          }
 
          .contact-form label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
          }
          
          .contact-form input[type="text"],
          .contact-form input[type="email"],
          .contact-form textarea {
            width: calc(100% - 22px); /* Adjust width to account for padding */
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
          }
                    .contact-form textarea {
            resize: vertical;
          }
                    .contact-form input[type="submit"] {
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          
          .contact-form input[type="submit"]:hover {
            background-color: #0056b3;
          }
          @media only screen and (max-width: 600px) {
            .contact-form {
              width: 90%; /* Adjust width for smaller screens */
            }
          }
          
      `}</style>

      <div className='flex justify-center my-20 items-center text-center'>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label style={{ color: '#1f284d' }}>Name</label>
          <input type="text" name="user_name" />
          <br />
          <label style={{ color: '#1f284d' }}>Email</label>
          <input type="email" name="user_email" />
          <br />
          <label style={{ color: '#1f284d' }}>Message</label>
          <textarea name="message" />
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>

      <div className="w-full  lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-blue-900 rounded-2xl">
        <div className="flex flex-col text-white">
          <div className="flex my-4 w-2/3 lg:w-3/4">
            <div className="flex flex-col">
              <i className="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Office Address</h2>
              <p className="text-gray-400">Online Service</p>
            </div>
          </div>
          
          <div className="flex my-4 w-2/3 lg:w-1/2">
            <div className="flex flex-col">
              <i className="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl">Call Us</h2>
              <p className="text-gray-400">Tel: 9786647649</p>
              <div className='mt-5'>
                <h2 className="text-2xl">Send an E-mail</h2>
                <p className="text-gray-400">profuturix@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="flex my-4 w-2/3 lg:w-1/2">
            <a href="https://www.instagram.com/profuturix?igsh=MTVxcTFuenUxeXkwbw==" target="_blank" style={{ textDecoration: 'none', color: '1a0951' }}>
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px', marginRight: '10px' }} />
            </a>
            <a href="https://www.linkedin.com/in/profuturix-company-a87a202b9/" target="_blank" style={{ textDecoration: 'none', color: '1a0951' }}>
              <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '24px', marginRight: '10px' }} />
            </a>
          </div>
        </div>
      </div>

      &nbsp;&nbsp;&nbsp;
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
