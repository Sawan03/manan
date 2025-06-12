import React from 'react';
import './footer.css'; // Import your CSS file for Footer styles

function Footer() {
  return (
    <>
      {/* Embedded CSS for the Footer component */}
      

      <footer className="footer-container">
        {/* Social Media Icons (placeholders) */}
        <div className="footer-social-icons">
          {/* Using simple text or you can replace with Font Awesome/Lucide icons if available */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-3 7h-2c-1.039 0-1 0.364-1 1.053v2.947h3l-1 3h-2v7h-3v-7h-2v-3h2v-2.947c0-3.239 1.96-4.053 4.96-4.053h3v3z"/>
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.773 1.691 4.918 4.918.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.145 3.227-1.666 4.773-4.918 4.918-.058 1.265-.07 1.646-.07 4.85s.012 3.584.07 4.85c.145 3.227 1.666 4.773 4.918 4.918 1.265.058 1.646.07 4.85.07s3.584-.012 4.85-.07c3.252-.148 4.773-1.691 4.918-4.918.058-1.265.07-1.646.07-4.85s-.012-3.584-.07-4.85c-.145-3.227-1.666-4.773-4.918-4.918-.058-1.265-.07-1.646-.07-4.85zM12 0c-3.267 0-3.655.012-4.947.07-4.524.206-6.68 2.373-6.885 6.885-.058 1.292-.07 1.68-.07 4.947s.012 3.655.07 4.947c.206 4.524 2.373 6.68 6.885 6.885 1.292.058 1.68.07 4.947.07s3.655-.012 4.947-.07c4.524-.206 6.68-2.373 6.885-6.885.058-1.292.07-1.68.07-4.947s-.012-3.655-.07-4.947c-.206-4.524-2.373-6.68-6.885-6.885-1.292-.058-1.68-.07-4.947-.07zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.495-9.674c-.752 0-1.36-.608-1.36-1.36s.608-1.36 1.36-1.36 1.36.608 1.36 1.36-.608 1.36-1.36 1.36z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.003 0-5.442 2.438-5.442 5.441 0 .426.048.839.136 1.227-4.522-.225-8.525-2.39-11.201-5.691-.466.805-.735 1.737-.735 2.738 0 1.881.956 3.545 2.404 4.509-.883-.028-1.716-.27-2.449-.672v.069c0 2.642 1.88 4.84 4.364 5.337-.432.118-.888.181-1.36.181-.333 0-.655-.034-.968-.093.695 2.164 2.706 3.738 5.093 3.782-1.879 1.474-4.248 2.35-6.811 2.35-.444 0-.882-.025-1.31-.073 2.44 1.564 5.337 2.478 8.441 2.478 10.134 0 15.661-8.799 15.661-16.421 0-.251-.006-.5-.015-.75z"/>
            </svg>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="footer-links">
          <a href="#" className="footer-link">Explore</a>
          <a href="#" className="footer-link">Contact</a>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Use</a>
          <a href="#" className="footer-link">Support</a>
        </nav>

        {/* Copyright Information */}
        <p className="footer-copyright">
          © 2025 Creatd, Inc. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
