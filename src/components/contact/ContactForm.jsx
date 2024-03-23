import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Combine form data with sender's name and email
      const completeFormData = {
        ...formData,
        from_name: formData.name, // Sender's name
        reply_to: formData.email // Sender's email
      };

      await emailjs.send('service_5j71jgf', 'template_ukuejaj', completeFormData, 'YO5KsTjmgrKclUsjP');
      setSubmitSuccess(true);
      setSubmitError(null);
      setFormData({  // Reset form fields after successful submission
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('An unexpected error occurred. Please try again later.');
    }

    setSubmitting(false);
  };

  return (
    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
      <form onSubmit={handleSubmit} className="email-form">
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control"
            id="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            rows={5}
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send Message'}
        </button>
        {submitSuccess && <p className="text-success">Your message has been sent. Thank you!</p>}
        {submitError && <p className="text-danger">{submitError}</p>}
      </form>
    </div>
  );
}
