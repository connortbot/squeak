import React, { useState } from 'react';
import './Login.css'; // Custom CSS
import squeakLogo from '../../assets/Squeak.png'; // Adjust path to your logo

function LoginPage() {
  const [activeTab, setActiveTab] = useState('signup');

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-container text-center">
        <img src={squeakLogo} alt="Squeak Logo" className="logo" />
        <h2 className="mb-4">Create an account</h2>
        <div className="btn-group d-flex justify-content-center mb-3" role="group" aria-label="Sign up and login toggle">
        <input
          type="radio"
          className="btn-check"
          name="authToggle"
          id="signup"
          checked={activeTab === 'signup'}
          onChange={() => setActiveTab('signup')}
        />
        <label
          className={`btn btn-outline-primary ${activeTab === 'signup' ? 'active' : ''}`}
          htmlFor="signup"
        >
          Sign Up
        </label>

        <input
          type="radio"
          className="btn-check"
          name="authToggle"
          id="login"
          checked={activeTab === 'login'}
          onChange={() => setActiveTab('login')}
        />
        <label
          className={`btn btn-outline-primary ${activeTab === 'login' ? 'active' : ''}`}
          htmlFor="login"
        >
          Login
        </label>
      </div>

        {activeTab === 'signup' && (
            <div className="card">
                <div className="card-body">
                <form className="form-group">
                    <input type="text" placeholder="Enter Your Username" className="form-control mb-3" />
                    <input type="email" placeholder="Enter Your Email" className="form-control mb-3" />
                    <input type="password" placeholder="Enter Your Password" className="form-control mb-3" />
                    <div className="mt-3">
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                    </div>
                </form>
                </div>
            </div>
            )}

        {activeTab === 'login' && (
          <form className="form-group">
            <input type="email" placeholder="Enter Your Email" className="form-control mb-3" />
            <input type="password" placeholder="Enter Your Password" className="form-control mb-3" />
            <div><button type="submit" className="btn btn-primary w-100">Login</button> </div>
          </form>
        )}

        <div className="text-center mt-3">
          <p>Already have an account? <span className="link">Login</span></p>
        </div>


        <button class="google-btn">
        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo"></img>
            <span>Continue with Google</span>
        </button>

        <div className="footer-links mt-3">
          <a href="#" className="link">Terms of use</a> | <a href="#" className="link">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
