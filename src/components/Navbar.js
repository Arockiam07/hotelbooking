import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '0.5rem 1rem'
    }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center text-white text-decoration-none">
          <img src={logo} alt="WebBooking Logo" width="60" height="30" className="me-2" />
          <span style={{ fontWeight: '600', fontSize: '1.5rem' }}>WebBooking</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {['Home', 'About', 'Rooms', 'Prices', 'Support'].map((item) => (
              <li className="nav-item" key={item}>
                <Link 
                  to={`/${item === 'Home' ? '' : item.toLowerCase()}`} 
                  className="nav-link text-white mx-2 fw-medium"
                  style={{
                    borderRadius: '8px',
                    padding: '8px 12px',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center">
            <div className="me-3 position-relative d-none d-lg-block">
              <input 
                type="search" 
                className="form-control ps-4" 
                placeholder="Search..." 
                style={{
                  borderRadius: '20px',
                  border: 'none',
                  paddingLeft: '35px',
                  width: '200px'
                }}
              />
              <i className="bi bi-search position-absolute" style={{ 
                top: '50%', 
                left: '15px', 
                transform: 'translateY(-50%)', 
                color: '#6c757d' 
              }}></i>
            </div>

            <div className="d-flex gap-2">
              <button 
                className="btn btn-outline-light fw-medium" 
                data-bs-toggle="modal" 
                data-bs-target="#loginModal"
                style={{
                  borderRadius: '20px',
                  padding: '8px 20px',
                  transition: 'all 0.3s',
                  border: '2px solid white'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ borderRadius: '15px', overflow: 'hidden' }}>
            <div className="modal-header border-0" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <h5 className="modal-title text-white">Welcome Back!</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-4">
              <ul className="nav nav-pills mb-4 justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button 
                    className="nav-link active me-2" 
                    id="pills-login-tab" 
                    data-bs-toggle="pill" 
                    data-bs-target="#pills-login" 
                    type="button" 
                    role="tab"
                    style={{
                      borderRadius: '20px',
                      padding: '8px 20px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none'
                    }}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button 
                    className="nav-link" 
                    id="pills-register-tab" 
                    data-bs-toggle="pill" 
                    data-bs-target="#pills-register" 
                    type="button" 
                    role="tab"
                    style={{
                      borderRadius: '20px',
                      padding: '8px 20px',
                      background: '#f8f9fa',
                      color: '#764ba2',
                      border: 'none'
                    }}
                  >
                    Register
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="loginEmail" 
                      placeholder="Enter your email"
                      style={{ borderRadius: '10px', padding: '10px' }}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="loginPassword" className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="loginPassword" 
                      placeholder="Enter your password"
                      style={{ borderRadius: '10px', padding: '10px' }}
                    />
                  </div>
                  <button 
                    className="btn w-100 mb-3" 
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      borderRadius: '10px',
                      padding: '10px',
                      border: 'none'
                    }}
                  >
                    Login
                  </button>
                  <div className="text-center">
                    <p className="mb-0">Or login with</p>
                    <div className="d-flex justify-content-center gap-3 mt-2">
                      <button className="btn btn-outline-primary rounded-circle p-2">
                        <i className="bi bi-google"></i>
                      </button>
                      <button className="btn btn-outline-primary rounded-circle p-2">
                        <i className="bi bi-facebook"></i>
                      </button>
                      <button className="btn btn-outline-primary rounded-circle p-2">
                        <i className="bi bi-twitter"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                  <div className="mb-3">
                    <label htmlFor="registerUsername" className="form-label">Username</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="registerUsername" 
                      placeholder="Enter your username"
                      style={{ borderRadius: '10px', padding: '10px' }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="registerFullname" className="form-label">Full name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="registerFullname" 
                      placeholder="Enter your full name"
                      style={{ borderRadius: '10px', padding: '10px' }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="registerEmail" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="registerEmail" 
                      placeholder="Enter your email"
                      style={{ borderRadius: '10px', padding: '10px' }}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="registerPassword" className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="registerPassword" 
                      placeholder="Enter your password"
                      style={{ borderRadius: '10px', padding: '10px' }}
                    />
                  </div>
                  <button 
                    className="btn w-100 mb-3" 
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      borderRadius: '10px',
                      padding: '10px',
                      border: 'none'
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;