import React from 'react'

export default function ContactInfo(props) {
    const {location, email, phone} = props
  return (
    <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>{location}</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>{email}</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>{phone}</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27197.414240252503!2d74.34959856738062!3d31.56048392699569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b3297a3b9c5%3A0xca38a239b2a502a9!2sGarhi%20Shahu%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710372736404!5m2!1sen!2s"
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: 290 }}
                  allowFullScreen=""
                />
              </div>
            </div>
  )
}
