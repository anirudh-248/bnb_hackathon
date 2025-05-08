import React from 'react';
import '../App.css';


function Index({ isAuthenticated, user }) {
  return (
    <div>
    <header id="header" className="header d-flex align-items-center fixed-top" >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center" style={{ textDecoration: 'none' }}>
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="/assets/img/logo.png" alt="Logo" /> */}
            <h1 className="sitename">Virtual Wardrobe</h1>
          </a>

          <nav id="navmenu" className="navmenu" >
            <ul>
              {isAuthenticated ? (
                <>
                  <li><a href="/" className="active">Home</a></li>
                  <li><a href="wardrobe">Wardrobe </a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a className="btn-getstarted" href="logout">Logout</a></li>
                </>
              ) : (
                <>
                  <li><a href="/" className="active">Home</a></li>
                  <li><a href="login">Wardrobe</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a className="btn-getstarted" href="login">Login</a></li>
                </>
              )}
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <div
            id="hero-carousel"
            data-bs-interval="5000"
            className="container carousel carousel-fade"
            data-bs-ride="carousel"
          >
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="carousel-container">
                {isAuthenticated ? (
                  <>
                    <h2 className="animate__animated animate__fadeInDown">
                      Welcome, {user.firstName}
                    </h2>
                    <p
                      className="animate__animated animate__fadeInDown"
                      style={{ fontSize: 'large' }}
                    >
                      "Your Fashion, Digitized and Personalized!" Step inside
                      your virtual wardrobe and unlock endless outfit
                      possibilities.
                    </p>
                    <a
                      href="wardrobe"
                      className="btn-get-started animate__animated animate__fadeInUp scrollto"
                    >
                      Go to Wardrobe
                    </a>
                  </>
                ) : (
                  <>
                    <h2 className="animate__animated animate__fadeInDown">
                      Welcome to your Virtual Wardrobe
                    </h2>
                    <p
                      className="animate__animated animate__fadeInDown"
                      style={{ fontSize: 'large' }}
                    >
                      "Your Fashion, Digitized and Personalized!" Step inside
                      your virtual wardrobe and unlock endless outfit
                      possibilities.
                    </p>
                    <a
                      href="login"
                      className="btn-get-started animate__animated animate__fadeInUp scrollto"
                    >
                      Login
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>

          <svg
            className="hero-waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="wave1">
              <use xlinkHref="#wave-path" x="50" y="3"></use>
            </g>
            <g className="wave2">
              <use xlinkHref="#wave-path" x="50" y="0"></use>
            </g>
            <g className="wave3">
              <use xlinkHref="#wave-path" x="50" y="9"></use>
            </g>
          </svg>
        </section>
        {/* /Hero Section */}

        {/* About Section */}
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>Who we are</p>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-6 content"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <ul>
                  <li>
                    <i className="bi bi-check2-circle"></i>{' '}
                    <span>
                      A fashion-tech company focused on simplifying wardrobe
                      management.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-circle"></i>{' '}
                    <span>
                      We offer a virtual wardrobe platform for organizing,
                      visualizing, and curating outfits.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-circle"></i>{' '}
                    <span>
                      Our mission is to blend fashion with technology, making
                      style decisions effortless.
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-check2-circle"></i>{' '}
                    <span>
                      Committed to helping you maximize your wardrobe and make
                      sustainable fashion choices.
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p>
                  We believe that fashion should be fun, accessible, and
                  sustainable. With our virtual wardrobe, you can mix and match
                  pieces, create outfits for any occasion, and even get
                  recommendations based on your style preferences. Plus, with
                  detailed tracking of your wardrobe usage, you’ll always know
                  what you have and can make mindful decisions about new
                  purchases.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* /About Section */}

    {/* Features Section */}
    <section id="features" class="features section">

      <div class="container">

        <ul class="nav nav-tabs row  d-flex" data-aos="fade-up" data-aos-delay="100">
          <li class="nav-item col-3">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-1">
              <i class="bi bi-door-open-fill"></i>
              <h4 class="d-none d-lg-block">Virtual Wardrobe Management</h4>
            </a>
          </li>
          <li class="nav-item col-3">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2">
              <i class="fas fa-tshirt"></i>
              <h4 class="d-none d-lg-block">Outfit Visualization</h4>
            </a>
          </li>
          <li class="nav-item col-3">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3">
              <i class="bi bi-lightbulb-fill"></i>
              <h4 class="d-none d-lg-block">Sustainable Fashion Insights</h4>
            </a>
          </li>
        </ul>{/* End Tab Nav */}

        <div class="tab-content" data-aos="fade-up" data-aos-delay="200">

          <div class="tab-pane fade active show" id="features-tab-1">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Our Virtual Wardrobe Management system allows users to create a complete digital inventory of their clothing.</h3>
                <ul>
                  <li><i class="bi bi-check2-all"></i>
                    <spab>By uploading photos of individual items, users can easily categorize their wardrobe based on multiple attributes like type, color, season, occasion, or even specific events</spab>
                  </li>
                  <li><i class="bi bi-check2-all"></i> <span>The platform's intuitive tagging and filtering features ensure that users can quickly find specific items without the hassle of searching through physical drawers and closets.</span>.</li>
                  <li><i class="bi bi-check2-all"></i> <span>Whether you're planning a vacation wardrobe or organizing your seasonal clothing, the virtual wardrobe is accessible anytime from any device.</span></li>
                </ul>
                <p>
                  Our goal is to simplify and enhance the way people manage their wardrobes, helping them stay organized, save time, and keep their closet in top condition year-round.
                </p>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src='assets/img/working-1.jpg'  alt="" class="img-fluid" />
              </div>
            </div>
          </div>{/* End Tab Content Item */}

          <div class="tab-pane fade" id="features-tab-2">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Our Outfit Visualization tool empowers users to mix, match, and plan outfits virtually.</h3>
                <p>
                  The Outfit Visualization tool also allows users to create style boards and collections, perfect for curating seasonal looks or creating capsule wardrobes. 
                  It's more than just an outfit planner—it's a creative space for users to explore their style, discover new combinations, and express their fashion sense effortlessly.
                </p>
              
                <ul>
                  <li><i class="bi bi-check2-all"></i> <span>This feature allows users to be their own stylists, helping them experiment with new combinations without having to try everything on in front of a mirror.</span></li>
                  <li><i class="bi bi-check2-all"></i> <span>Users can save their favorite outfits for future reference, making it easy to revisit looks they loved.</span></li>
                  <li><i class="bi bi-check2-all"></i> <span>The Outfit Visualization tool also allows users to create style boards and collections, perfect for curating seasonal looks or creating capsule wardrobes</span></li>
                </ul>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src= 'assets/img/working-2.jpg'  alt="" class="img-fluid"/>
              </div>
            </div>
          </div>{/* End Tab Content Item */}

          <div class="tab-pane fade" id="features-tab-3">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Empower Your Wardrobe with Sustainable Fashion Insights</h3>
                <p>
                  Our Sustainable Fashion Insights feature enables you to track clothing usage, discover eco-friendly brands, and repurpose existing items. In helping you make mindful, sustainable fashion choices that reduce waste and promote conscious consumption.
                </p>
                <ul>
                  <li><i class="bi bi-check2-all"></i> <span>Clothing Usage Tracking helps users track how often they wear each item, reducing unnecessary purchases and minimizing wardrobe waste</span></li>
                  <li><i class="bi bi-check2-all"></i> <span>Upcycling and Repurposing Tips offers creative ideas to repurpose or upcycle clothing items, extending their life and promoting sustainability.
                 </span></li>
                  <li><i class="bi bi-check2-all"></i> <span>Environmental Impact Analytics provides insights on the environmental impact of wardrobe choices, empowering users to make eco-conscious decisions.</span></li>
                </ul>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src= 'assets/img/working-3.jpg'  alt="" class="img-fluid"/>
              </div>
            </div>
          </div>{/* End Tab Content Item */}

        </div>

      </div>

    </section>{/* /Features Section */}

    {/* Section Title */}
    <div class="container section-title" data-aos="fade-up">
      <h2>TIPS</h2>
      <p>A video on how to organize your wardrobe</p>
    </div>{/* End Section Title */}

    <div className="video-container" style={{ maxWidth: '100%', margin: '0 auto', padding: '10px' }}>

      <center>
      <video
        controls
        style={{ width: '100%', height: 'auto', borderRadius: '15px' }}
        data-aos="fade-up"
      >
        <source src="/assets/Tips video/videoplayback.mp4" type="video/mp4" />
      </video>
      </center>
    </div>    

    {/* Testimonials Section */}
    <section id="testimonials" class="testimonials section">

      {/* Section Title */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What they are saying about us</p>
      </div>{/* End Section Title */}

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="swiper-container init-swiper">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src= 'assets/img/testimonials/testimonials-1.jpg'  class="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>An absolute game-changer for organizing my closet! I love how easy it is to manage my wardrobe with this platform. The virtual closet and outfit planning features save me so much time every morning. Highly recommend!
                 </span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>{/* End testimonial item */}

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src= 'assets/img/testimonials/testimonials-2.jpg'  class="testimonial-img" alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>A stylish, eco-friendly fashion platform.This site has helped me make better fashion choices. I’ve reduced unnecessary shopping and learned how to repurpose clothes I already own. The sustainable insights are eye-opening and incredibly useful for eco-conscious fashionistas.</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>{/* End testimonial item */}

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src= 'assets/img/testimonials/testimonials-3.jpg'  class="testimonial-img" alt=""/>
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>Perfect for fashion lovers and minimalists alike!  I’ve streamlined my wardrobe thanks to the analytics tool. I can see what I wear most and now focus on quality over quantity. The outfit visualization feature is also a lifesaver for planning outfits quickly.</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>{/* End testimonial item */}

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src= 'assets/img/testimonials/testimonials-4.jpg'  class="testimonial-img" alt=""/>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>Great for sustainable fashion enthusiasts.I'm really impressed with how this site promotes sustainability. It tracks how often I wear items and offers great tips on sustainable brands. I feel good about reducing my environmental footprint through mindful fashion choices.</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>{/* End testimonial item */}

            <div class="swiper-slide">
              <div class="testimonial-item">
                <img src= 'assets/img/testimonials/testimonials-5.jpg'  class="testimonial-img" alt=""/>
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <div class="stars">
                  <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                </div>
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>AI-powered outfit suggestions are brilliant.The AI outfit recommendations have completely transformed how I dress. It gives me fresh ideas for styling pieces I already own. I feel like I have a personal stylist at my fingertips every day!</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>{/* End testimonial item */}

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>

    </section>{/* /Testimonials Section */}

    {/* Faq Section */}
    <section id="faq" class="faq section">
      {/* Section Title */}
      <div class="container section-title" data-aos="fade-up">
        <h2>FAQs</h2>
        <p>Frequently Asked Questions</p>
      </div>{/* End Section Title */}

      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-12">
            <div class="custom-accordion" id="accordion-faq">
              <div class="accordion-item">
                <h2 class="mb-0">
                  <button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-faq-1">
                    How do I upload my wardrobe items?
                  </button>
                </h2>

                <div id="collapse-faq-1" class="collapse" aria-labelledby="headingOne" data-parent="#accordion-faq">
                  <div class="accordion-body">
                    To upload your wardrobe items, simply create an account and navigate to the "My Wardrobe" section. From there, you can easily upload photos of your clothing, tag them with relevant attributes, and categorize them for easy access.
                  </div>
                </div>
              </div>
              {/* .accordion-item */}

            <div class="accordion-item">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-faq-3">
                  Are there any subscription fees?
                </button>
              </h2>

              <div id="collapse-faq-3" class="collapse" aria-labelledby="headingThree" data-parent="#accordion-faq">
                <div class="accordion-body">
                  NO! It's absolutely free.
                </div>
              </div>
            </div>
            {/* .accordion-item */}

          </div>
        </div>
      </div>
      </div>
    </section>{/* /Faq Section */}

    {/* Team Section */}
    <section id="team" class="team section">

      {/* Section Title */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Our Hardworking Team</p>
      </div>{/* End Section Title */}

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member">
              <div class="member-img">
                <img src= 'assets/img/team/Anirudh.jpg'  class="img-fluid" alt=""/>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Anirudh P S</h4>
                <span>Member 1</span>
              </div>
            </div>
          </div>{/* End Team Member */}

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="team-member">
              <div class="member-img">
                <img src= 'assets/img/team/Akilesh.jpg'  class="img-fluid" alt=""/>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Akilesh</h4>
                <span>Member 2</span>
              </div>
            </div>
          </div>{/* End Team Member */}

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div class="team-member">
              <div class="member-img">
                <img src= 'assets/img/team/Aaryan.jpg'  class="img-fluid" alt=""/>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Aaryan P Shreyas</h4>
                <span>Member 3</span>
              </div>
            </div>
          </div>{/* End Team Member */}

        </div>

      </div>

    </section>{/* /Team Section */}

    {/* Contact Section */}
    <section id="contact" class="contact section">

      {/* Section Title */}
      <div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>{/* End Section Title */}

      <div class="container" data-aos="fade" data-aos-delay="100">

        <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style={{ border: 0, width: '100%', height: '270px',}}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7778.222542493343!2d77.5176278!3d12.900566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fa7243af9c3%3A0x9bed6669a38d1c3!2sRNS%20INSTITUTE%20OF%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1726553190142!5m2!1sen!2sin"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>{/* End Google Maps */}
    
        <div class="row gy-4 d-flex justify-content-between">
    
          <div class="col-lg-4 col-md-4">
            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i class="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>Dr. Vishnuvardhana Road Post,</p>
                <p>Channasandra, Rajarajeshwari Nagar,</p>
                <p>Bengaluru - 560098</p>
              </div>
            </div>{/* End Info Item */}
          </div>
  
          <div class="col-lg-4 col-md-4">
            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i class="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 9740791733, +91 8310086725</p>
              </div>
            </div>{/* End Info Item */}
          </div>
  
          <div class="col-lg-4 col-md-4">
            <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i class="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>anirudhphaniraj1@gmail.com</p>
              </div>
            </div>{/* End Info Item */}
          </div>
    
        </div>{/* End Row */}
    
        <div class="text-center" data-aos="fade-up" data-aos-delay="400">
        <a href="/contact"
        className="add-item"
        style={{
          width: '200px',
          border: 'none',
          transition: '0.5s',
          marginTop: '25px',
          display: 'inline-block', // optional for layout
          textAlign: 'center', // optional
          padding: '10px', // optional for button feel
          backgroundColor: '#3e414d',
          color: '#ffffff' // optional styling
        }}
      >Send Message</a>

        </div>
    
      </div>    

    </section>{/* /Contact Section */}

  </main>
  </div>
  );
}

export default Index;