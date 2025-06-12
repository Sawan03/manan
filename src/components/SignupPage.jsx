import React from 'react';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="logo">
            <img  src="https://img.icons8.com/ios-filled/50/1b1b1b/idea-sharing.png"></img>
      </div>
      <h2 className="title">Join Manan</h2>

      <form className="signup-form">
        <label htmlFor="name">NAME</label>
        <input type="text" id="name" placeholder="Jane Smith" />

        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" placeholder="you@awesome.com" />

        <label htmlFor="password">PASSWORD</label>
        <input type="password" id="password" placeholder="supersecret" />

        <button type="submit" className="signup-btn">Sign up</button>
      </form>

      <p className="signin-text">
        Already have an account? <a href="#">Sign in</a>
      </p>

      <div className="separator">
        <span>or</span>
      </div>

      <div className="social-buttons">
        <button className="facebook-btn">
          <img src="https://img.icons8.com/color/48/facebook.png" alt="facebook" />
          Sign up with Facebook
        </button>
        <button className="google-btn">
          <img src="https://img.icons8.com/color/48/google-logo.png" alt="google" />
          Sign up with Google
        </button>
        <button className="apple-btn">
          <img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png" alt="apple" />
          Sign up with Apple
        </button>
      </div>

      <p className="terms">
        By continuing, you agree to our <a href="#">Privacy Policy</a> and{' '}
        <a href="#">Terms of Use</a>
      </p>
    </div>
  );
};

export default SignupPage;
