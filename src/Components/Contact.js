import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ message: '', error: false });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ message: 'Please fill in all required fields.', error: true });
      return;
    }

    // Construct mailto link
    const mailtoLink = `mailto:skeerthiswaroop0103@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    setStatus({ message: 'Redirecting to your email client...', error: false });
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="contact-form">
          {/* Left: Contact Form */}
          <div className="form-left">
            <form onSubmit={handleSubmit}>
              <label>Name <span className="required">*</span></label>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />

              <label>Email <span className="required">*</span></label>
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />

              <label>Subject</label>
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />

              <label>Message <span className="required">*</span></label>
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />

              <button type="submit" className="submit-btn">Send Message</button>
            </form>

            {/* Status Messages */}
            {status.message && <p className={status.error ? 'error-message' : 'success-message'}>{status.message}</p>}
          </div>

          {/* Right: Contact Info */}
          <div className="form-right">
            <h3>Address & Contact</h3>
            <p>Keerthi Swaroop Satambakkam</p>
            <p>Fairfax, VA 22030</p>
            <p>Phone: <a href="tel:+15182074151">+1 (518)-207-4151</a></p>
            <p>Email: <a href="mailto:ksatamba0103@gmail.com">ksatamba0103@gmail.com</a></p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
