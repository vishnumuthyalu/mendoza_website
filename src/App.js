import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="hero-section">
        <nav className="navbar">
          <div className="nav-brand">
            <h1>Casa Mendoza Cleaning</h1>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        
        <div className="hero-content">
          <h2>Professional Cleaning Services</h2>
          <p>Family-owned business providing exceptional residential and commercial cleaning</p>
          <button className="cta-button">Get Free Estimate</button>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Residential Cleaning</h3>
              <p>Complete home cleaning services from basic maintenance to deep cleaning</p>
            </div>
            <div className="service-card">
              <h3>Commercial Cleaning</h3>
              <p>Professional office and business cleaning tailored to your needs</p>
            </div>
            <div className="service-card">
              <h3>Carpet & Floor Care</h3>
              <p>Specialized cleaning for all types of flooring and carpets</p>
            </div>
            <div className="service-card">
              <h3>Furniture Cleaning</h3>
              <p>Expert care for upholstery and furniture of all types</p>
            </div>
            <div className="service-card">
              <h3>Restroom Sanitization</h3>
              <p>Thorough cleaning and sanitization of bathroom facilities</p>
            </div>
            <div className="service-card">
              <h3>Detail Cleaning</h3>
              <p>Comprehensive deep cleaning for the most thorough results</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Casa Mendoza Cleaning</h2>
          <p>
            We are a family-owned cleaning business dedicated to providing exceptional 
            cleaning services to both residential and commercial clients. From basic 
            maintenance to detailed deep cleaning, we handle it all with care and 
            professionalism.
          </p>
          <p>
            Every job is unique, which is why we provide personalized estimates 
            based on your specific needs and space requirements.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get Your Free Estimate</h2>
          <p>Contact us today for a personalized cleaning estimate</p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Call Us</h3>
              <p>(XXX) XXX-XXXX</p>
            </div>
            <div className="contact-item">
              <h3>Email Us</h3>
              <p>"email address"</p>
            </div>
            <div className="contact-item">
              <h3>Service Area</h3>
              <p>San Antonio, TX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Casa Mendoza Cleaning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
