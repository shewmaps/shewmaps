import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer" data-testid="footer">
    <div className="social-links">
      <a href="https://instagram.com/shewmaps" target="_blank" rel="noopener noreferrer" data-testid="footer-instagramLink">Instagram</a>
      <a href="https://youtube.com/@shewmaps" target="_blank" rel="noopener noreferrer" data-testid="footer-youtubeLink">YouTube</a>
    </div>
    <p>&copy; 2026 Brandon Shewmake. All rights reserved.</p>
  </footer>
);

export default Footer;
