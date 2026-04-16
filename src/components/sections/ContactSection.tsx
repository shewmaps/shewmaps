import React from 'react';

const ContactSection: React.FC = () => (
  <section id="contact" className="section contact-section" data-testid="contactSection">
    <h2 className="section-title">Contact</h2>
    <p className="contact-message">I'd like to hear from you.</p>
    <div className="social-links">
      <a href="https://instagram.com/shewmaps" target="_blank" rel="noopener noreferrer" data-testid="contactSection-instagramLink">Instagram</a>
      <a href="https://youtube.com/@shewmaps" target="_blank" rel="noopener noreferrer" data-testid="contactSection-youtubeLink">YouTube</a>
    </div>
  </section>
);

export default ContactSection;
