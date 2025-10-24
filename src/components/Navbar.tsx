'use client';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-transparent-nav">
      <div className="container">
        {/* Logo (Center on desktop) */}
        <a className="navbar-brand mx-auto d-lg-none" href="#home">
          <span className="logo-text">SHAMROCK</span>
        </a>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about-content">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">MUSIC & EVENTS</a>
            </li>
          </ul>

          {/* Center logo on desktop */}
          <a className="navbar-brand mx-auto d-none d-lg-block" href="#home">
            <span className="logo-text">SHAMROCK</span>
          </a>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#menu-link">VIEW MENU</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-info">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}