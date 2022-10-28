import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="logo">
        <i className="fa fa-plane" aria-hidden="true">
          <span>ACB</span>
        </i>
      </div>
      <a className="menu-toggle rounded" href="#">
        <i className="fa fa-bars"></i>
      </a>
      <nav id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a className="smooth-scroll" href="#Header"></a>
          </li>
          <li className="sidebar-nav-item">
            <a className="smooth-scroll" href="#Banner">
              Home
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a className="smooth-scroll" href="#About">
              About
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a className="smooth-scroll" href="#Services">
              Services
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a className="smooth-scroll" href="#Portfolio">
              Portfolio
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a className="smooth-scroll" href="#Testimonials">
              Testimonials
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a className="smooth-scroll" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section id="Banner" className="content-section">
        <div className="container content-wrap text-center">
          <h2>Welcome to</h2>
          <h3>
            <em>Antiquity Cloud Based Service</em>
          </h3>
          <a className="btn btn-primary btn-xl smooth-scroll" href="#About">
            Find Out More
          </a>
        </div>
        <div className="overlay"></div>
      </section>

      <section id="About" className="content-section">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="block-heading">
                <h2>About Us</h2>
              </div>
              <p className="lead">
                Migrating to the cloud and optimizing cloud operations is a
                significant undertaking htmlFor most organizations. Meeting
                aspirational goals with reality requires knowledge, resources,
                and expertise that can only be acquired by being in the trenches
                helping companies architect and manage complex workloads on the
                cloud. Our team of AWS & Azure experts work closely with your
                team to dive deep to understand your unique requirements,
                business objectives, budget, stakeholder support, and future
                plans to develop a comprehensive cloud strategy to meet your
                timelines and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="Services" className="content-section text-center">
        <div className="container">
          <div className="block-heading">
            <h2>What We Offer</h2>
            <p>Leverage our experts to build a foundation for cloud success.</p>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="service-box">
                <div className="service-icon yellow">
                  <div className="front-content">
                    <i className="fa fa-globe" aria-hidden="true"></i>
                    <h3>Cloud Readiness Consultation</h3>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Cloud Readiness Consultation</h3>
                  <p>
                    Our team of AWS & Azure experts will do a deep dive into
                    your current environment to uncover application readiness,
                    uncover security gaps, issues to remediate, and outline a
                    comprehensive plan to architect for your cloud success.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-box">
                <div className="service-icon orange">
                  <div className="front-content">
                    <i className="fa fa-suitcase"></i>
                    <h3>Cloud TCO Analysis</h3>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Cloud TCO Analysis</h3>
                  <p>
                    Understand the total cost of ownership, how to calculate
                    cloud ROI, financial impact to CapEx/Opex, depreciation
                    schedules, leases, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-box ">
                <div className="service-icon red">
                  <div className="front-content">
                    <i className="fa fa-male" aria-hidden="true"></i>
                    <h3>Cloud Partner Funding Initiatives</h3>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Cloud Partner Funding Initiatives</h3>
                  <p>
                    Logicworks will help navigate Microsoft and AWS funding
                    options to help offset the cost of your migration or
                    optimization initiatives.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-box">
                <div className="service-icon grey">
                  <div className="front-content">
                    <i className="fa fa-users"></i>
                    <h3>Unstick Cloud Migration & Modernization Projects</h3>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Unstick Cloud Migration & Modernization Projects</h3>
                  <p>
                    Cloud migrations can stall due to lack of stakeholder
                    support, unexpected issues or interdependencies, and general
                    lack of the right resources and expertise to execute. Our
                    team will work with you to get your migration moving in the
                    right direction and architected for long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section text-center" id="Portfolio">
        <div className="container">
          <div className="block-heading">
            <h2>Our customers</h2>
            <p></p>
          </div>
          <div className="portfolio-wrapper clearfix">
            <a
              className="each-portfolio"
              data-fancybox="gallery"
              href="images/p-two.jpeg"
            >
              <div className="content hover-cont-wrap">
                <div className="content-overlay"></div>
                <img className="content-image" src="assets/images/p-two.jpeg" />
                <div className="content-details fadeIn-bottom">
                  <h5 className="p-title">Title</h5>
                  <p className="p-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span className="zoom">
                    <i className="fa fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </a>
            <a
              className="each-portfolio"
              data-fancybox="gallery"
              href="images/p-three.jpeg"
            >
              <div className="content hover-cont-wrap">
                <div className="content-overlay"></div>
                <img
                  className="content-image"
                  src="assets/images/p-three.jpeg"
                />
                <div className="content-details fadeIn-bottom">
                  <h5 className="p-title">Title</h5>
                  <p className="p-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span className="zoom">
                    <i className="fa fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </a>
            <a
              className="each-portfolio"
              data-fancybox="gallery"
              href="images/p-four.jpeg"
            >
              <div className="content hover-cont-wrap">
                <div className="content-overlay"></div>
                <img
                  className="content-image"
                  src="assets/images/p-four.jpeg"
                />
                <div className="content-details fadeIn-bottom">
                  <h5 className="p-title">Title</h5>
                  <p className="p-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span className="zoom">
                    <i className="fa fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </a>
            <a
              className="each-portfolio"
              data-fancybox="gallery"
              href="images/p-five.jpeg"
            >
              <div className="content hover-cont-wrap">
                <div className="content-overlay"></div>
                <img
                  className="content-image"
                  src="assets/images/p-five.jpeg"
                />
                <div className="content-details fadeIn-bottom">
                  <h5 className="p-title">Title</h5>
                  <p className="p-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span className="zoom">
                    <i className="fa fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </a>
            <a
              className="each-portfolio"
              data-fancybox="gallery"
              href="images/p-six.jpeg"
            >
              <div className="content hover-cont-wrap">
                <div className="content-overlay"></div>
                <img className="content-image" src="assets/images/p-six.jpeg" />
                <div className="content-details fadeIn-bottom">
                  <h5 className="p-title">Title</h5>
                  <p className="p-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span className="zoom">
                    <i className="fa fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </a>
            <a
              className="each-portfolio"
              data-fancybox="gallery"
              href="images/p-three.jpeg"
            >
              <div className="content hover-cont-wrap">
                <div className="content-overlay"></div>
                <img
                  className="content-image"
                  src="assets/images/p-three.jpeg"
                />
                <div className="content-details fadeIn-bottom">
                  <h5 className="p-title">Title</h5>
                  <p className="p-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span className="zoom">
                    <i className="fa fa-search-plus"></i>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="Testimonials" className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="block-heading">
                <h2></h2>
                <p>Some Of Our customer Review</p>
              </div>
              <div id="customers-testimonials" className="owl-carousel">
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="assets/images/sarah.jpg"
                      alt=""
                    />
                    <p>best service</p>
                  </div>
                  <div className="testimonial-name">Saran</div>
                </div>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="assets/images/tangelia.jpg"
                      alt=""
                    />
                    <p>Awsome Service</p>
                  </div>
                  <div className="testimonial-name">Dinakaran</div>
                </div>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="assets/images/john-doe.jpg"
                      alt=""
                    />
                    <p>very Good Service</p>
                  </div>
                  <div className="testimonial-name">Akshai</div>
                </div>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="assets/images/amy.jpg"
                      alt=""
                    />
                    <p>best Place for Cloud</p>
                  </div>
                  <div className="testimonial-name">Varun</div>
                </div>
                <div className="item">
                  <div className="shadow-effect">
                    <img
                      className="img-circle"
                      src="assets/images/daniel.jpg"
                      alt=""
                    />
                    <p>No Word simply Awsome</p>
                  </div>
                  <div className="testimonial-name">Arun</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Contact" className="content-section">
        <div className="container">
          <div className="block-heading">
            <h2>Contact Us</h2>
            <p>
              Learn how you can leverage Logicworks AWS & Azure experts to build
              a foundation for success on the cloud
            </p>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="contact-wrapper">
                <div className="address-block border-bottom">
                  <h3 className="add-title">Headquaters</h3>
                  <div className="c-detail">
                    <span className="c-icon">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <span className="c-info"> Street Addess</span>
                  </div>
                  <div className="c-detail">
                    <span className="c-icon">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    <span className="c-info">+0000000000</span>
                  </div>
                  <div className="c-detail">
                    <span className="c-icon">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <span className="c-info">email@yourdomain.com</span>
                  </div>
                </div>
                <div className="address-block">
                  <h3 className="add-title">Branch</h3>
                  <div className="c-detail">
                    <span className="c-icon">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    <span className="c-info"> 985698 Street</span>
                  </div>
                  <div className="c-detail">
                    <span className="c-icon">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                    <span className="c-info">+0000000000</span>
                  </div>
                  <div className="c-detail">
                    <span className="c-icon">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                    <span className="c-info">email@yourdomain.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="form-wrap">
                <form action="javascript:void(0)" method="post">
                  <div className="fname floating-label">
                    <input
                      type="text"
                      className="floating-input"
                      name="full name"
                    />
                    <label htmlFor="title">First Name</label>
                  </div>
                  <div className="fname floating-label">
                    <input
                      type="text"
                      className="floating-input"
                      name="full name"
                    />
                    <label htmlFor="title">Last Name</label>
                  </div>
                  <div className="email floating-label">
                    <input
                      type="email"
                      className="floating-input"
                      name="email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="contact floating-label">
                    <input
                      type="tel"
                      className="floating-input"
                      name="contact"
                    />
                    <label htmlFor="email">Mobile</label>
                  </div>
                  <div className="company floating-label">
                    <textarea
                      type="text"
                      className="floating-input"
                      name="company"
                    ></textarea>
                    <label htmlFor="email">Message</label>
                  </div>
                  <div className="submit-btn">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer text-center">
        <div className="container">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="javascript:void(0)"
              >
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white mr-3"
                href="javascript:void(0)"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="social-link rounded-circle text-white"
                href="javascript:void(0)"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <p className="text-muted small mb-0">Copyright © Your Website 2020</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
