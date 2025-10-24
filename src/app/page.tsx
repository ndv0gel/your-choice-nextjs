'use client';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section d-flex align-items-center justify-content-center">
        <div className="container text-center text-white">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <img 
                src="images/shamrock-main-logo.png" 
                alt="The Shamrock Irish Pub & Eatery" 
                className="hero-main-logo mb-5" 
              />
              <button className="btn btn-light btn-lg px-5 py-3">BOOK A RESERVATION</button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section id="features" className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card feature-card live-music-card border-0 rounded-3 overflow-hidden h-100">
                <div className="card-body d-flex align-items-end text-white p-4">
                  <h3 className="card-title h2 fw-bold">LIVE MUSIC<br />& EVENTS</h3>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card feature-card menu-card border-0 rounded-3 overflow-hidden h-100">
                <div className="card-body d-flex align-items-end text-white p-4">
                  <h3 className="card-title h2 fw-bold">VIEW<br />MENU</h3>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card feature-card reservation-card border-0 rounded-3 overflow-hidden h-100">
                <div className="card-body d-flex align-items-end text-white p-4">
                  <h3 className="card-title h2 fw-bold">MAKE A<br />RESERVATION</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Reviews & About Content Section */}
      <section id="reviews-about-combined-section" className="reviews-about-combined-section py-5">
        <div className="container position-relative">
          <div className="row">
            {/* Left Side: Restaurant Guru Badge, Branding, Description */}
            <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start text-white mb-4 mb-lg-0">
              <div className="restaurant-guru-badge mb-5">
                <div className="badge-inner">
                  <span className="badge-text-top">RECOMMENDED</span>
                  <span className="badge-text-middle">The Shamrock Irish Pub & Eatery</span>
                  <span className="badge-text-bottom">RESTAURANT GURU 2025</span>
                </div>
              </div>
              <h2 className="display-4 fw-bold mb-4">THE SHAMROCK<br />IRISH PUB & EATERY</h2>
              <p className="lead">
                The Shamrock Irish Pub & Eatery specializes in authentic Irish charm and hospitality.
                The food is a fusion of traditional Irish and American favorites. Live music is one of
                our many exciting factors in the success of the pub, mostly with a Celtic flavor to
                ensure we maintain our heritage and authenticity.
              </p>
            </div>
            
            {/* Right Side: Testimonials */}
            <div className="col-lg-6">
              <div className="reviews-box bg-light p-5 rounded-3">
                <h2 className="h1 fw-bold mb-3 text-dark">REVIEWS</h2>
                <p className="text-muted mb-4">See what our customers are saying about The Shamrock Pub & Eatery Murrieta CA</p>
                
                {/* Testimonial Carousel */}
                <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <blockquote className="blockquote">
                        <p className="text-dark">&quot;Great food and beer! Atmosphere is always fun! Make sure to do a reservation and if you&apos;re a party of 2 you should reserve as a party of 4.&quot;</p>
                        <footer className="blockquote-footer text-irish-green">
                          <strong>Daniel W.</strong> <cite>Hemet, CA</cite>
                        </footer>
                      </blockquote>
                    </div>
                    
                    <div className="carousel-item">
                      <blockquote className="blockquote">
                        <p className="text-dark">&quot;This is my favorite bar in the Temecula/Murrieta area. They have live entertainment throughout the week, and the food is spot on.&quot;</p>
                        <footer className="blockquote-footer text-irish-green">
                          <strong>Samantha A.</strong> <cite>Murrieta, CA</cite>
                        </footer>
                      </blockquote>
                    </div>
                    
                    <div className="carousel-item">
                      <blockquote className="blockquote">
                        <p className="text-dark">&quot;Great service, awesome food, and amazing people. Their team is very attentive as it is busy as soon as the doors open.&quot;</p>
                        <footer className="blockquote-footer text-irish-green">
                          <strong>Wen N.</strong> <cite>Moreno Valley, CA</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="2"></button>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <p className="mb-3 text-dark">Love The Shamrock Irish Pub & Eatery Murrieta, CA?<br />
                  <strong>Please Share Your Thoughts with Us</strong></p>
                  <div className="d-flex justify-content-center gap-3">
                    <img src="images/tripadvisor-logo.png" alt="TripAdvisor" className="review-logo" />
                    <img src="images/yelp-logo.png" alt="Yelp" className="review-logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="map-section">
        <div className="map-placeholder">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8!2d-117.1417172!3d33.5498196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db6c5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s39252%20Winchester%20Rd%20%23145%2C%20Murrieta%2C%20CA%2092563!5e0!3m2!1sen!2sus!4v1234567890" 
            width="100%" 
            height="500" 
            style={{border: 0}}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}