import React from 'react';
import './Contact.css';


const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="left-image-section">
        <img src="/contact.webp" alt="Contact" />
      </div>

      <div className="right-content-section">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p><strong>Address:</strong> C/126, Nizampura Rd, Swaminarayan Nagar, Nizampura, Vadodara, Gujarat 390024, India</p>
          <p><strong>Phone:</strong> +91 9924869300</p>
          <p><strong>Hours:</strong> Mon - Sun: 8am - 8pm</p>
          <p><strong>Please ensure you book an appointment in advance.</strong></p>
        </div>

      <div className="contact-map">
        <iframe
            title="Google Maps - Vishwa Vacuum Packing"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.410678063385!2d73.17602847564338!3d22.33811704152289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc96780c3f0bb%3A0x2a9f0654bda29f57!2sVishwa%20vacuum%20packing!5e0!3m2!1sen!2sus!4v1745981647098!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
/>

        
          
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
