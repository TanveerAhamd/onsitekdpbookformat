
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white pt-5">
  <div className="container text-center">
    {/* TOP ROW SPLIT IN 2 COLUMNS */}
    <div className="row">
      {/* Left Column: Join Over 200,000... */}
      <div className="col-md-6 text-center text-md-start mb-4">
        <h2 className="fw-bold">Join over 200,000 self-published authors</h2>
        <p>
          Subscribe to our weekly newsletter to receive articles on writing,
          author marketing, and the business of self-publishing.
        </p>
        {/* Newsletter form */}
        <div className="row align-items-center">
          <div className="col-8">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              name="ctl00$ctl00$ctl20$btnSignUp"
              defaultValue="Sign me up!"
              onclick="return AVL.RESPONSIVEFORM.VALIDATION.POSTBACKS.ValidateInputs(event, $('#newsletter-form'), null, true);"
              id="ctl20_btnSignUp"
              title="Sign up"
              className="btn btn-center btn-orange btn-lg py-0 text-white"
              style={{ height: 50 }}
            />
          </div>
        </div>
      </div>
      {/* Right Column: Links and Icons */}
      <div className="col-md-6 text-center text-md-start">
        <div className="row pb-3">
          <div className="col-4 d-flex flex-column">
            <a href="" className="text-white mx-2 foot-link">
              {" "}
              Self-Publishing
            </a>
            <a href="" className="text-white mx-2 foot-link">
              {" "}
              Book Printing
            </a>
            <a href="" className="text-white mx-2 foot-link">
              {" "}
              eBooks
            </a>
            <a href="" className="text-white mx-2 foot-link">
              {" "}
              Audiobooks
            </a>
          </div>
          <div className="col-4 d-flex flex-column">
            <a href="" className="text-white mx-2 foot-link">
              {" "}
              Template
            </a>
            <a href="" className="text-white mx-2 foot-link">
              {" "}
              Editing
            </a>
            <a href="" className="text-white mx-2 foot-link">
              {" "}
              Book Design
            </a>
            <a href="" className="text-white mx-2 foot-link">
              {" "}
              Sell Your Book
            </a>
          </div>
          <div className="col-4 d-flex flex-column">
            <a href="#" className="text-white mx-2 foot-link">
              Help
            </a>
            <a href="#" className="text-white mx-2 foot-link">
              Learn
            </a>
            <a href="#" className="text-white mx-2 foot-link">
              Pricing
            </a>
          </div>
        </div>
        <div className="mt-5 d-flex">
          <div className="ico text-center">
            <a href="#">
              <i className="ri-facebook-circle-fill fs-3 hovIcon mx-2" />
            </a>
          </div>
          <div className="ico text-center">
            <a href="#">
              <i className="ri-twitter-x-fill fs-3 mx-2 hovIcon" />
            </a>
          </div>
          <div className="ico">
            <a href="#">
              <i className="ri-instagram-fill fs-3 mx-2 hovIcon" />
            </a>
          </div>
          <div className="ico">
            <a href="#">
              <i className="ri-pinterest-fill fs-3 mx-2 hovIcon" />
            </a>
          </div>
          <div className="ico">
            <a href="#">
              <i className="ri-youtube-fill fs-3 mx-2 hovIcon" />
            </a>
          </div>
          <div className="ico">
            <a href="#">
              <i className="ri-wordpress-fill fs-3 mx-2 hovIcon" />
            </a>
          </div>
          <div className="ico">
            <a href="#">
              <i className="ri-linkedin-box-fill fs-3 mx-2 hovIcon" />
            </a>
          </div>
          <div className="ico">
            <a href="#">
              <i className="ri-rss-fill fs-3 mx-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* The rest of your footer (logo, links, support, trustpilot, etc.) stays same as before */}
    {/* line */}
    <hr className="border-light mt-5" />
    {/* Logo and Links */}
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
      <img
        src="./images/footer-logo.svg"
        alt="BookBaby logo"
        className="mb-3 mb-md-0"
      />
      <div className="text-center">
        <a href="#" className="text-white mx-2 foot-link">
          Sitemap
        </a>
        <a href="#" className="text-white mx-2 foot-link">
          Careers
        </a>
        <a href="#" className="text-white mx-2 foot-link">
          Privacy Policy
        </a>
        <a href="#" className="text-white mx-2 foot-link">
          Terms of Service
        </a>
        <a href="#" className="text-white mx-2 foot-link">
          Return Policy
        </a>
        <a href="#" className="text-white mx-2 foot-link">
          Cookie Preferences
        </a>
      </div>
    </div>
    {/* Contact Info */}
    <div className=" small text-end">
      <p className="mb-0">
        © 2025 Bookbaby · 7905 N. Crescent Blvd, Pennsauken, NJ 08110 ·
        1-877-961-6878 · info@bookbaby.com · Made in the U.S.A. 🇺🇸
      </p>
    </div>
    <hr className="border-light" />
    {/* Trustpilot */}
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
      <span className="me-2">Excellent</span>
      <span className="mt-2 mb-2 px-2">
        <span className="star-icon">
          <i className="ri-star-fill" />
        </span>
        <span className="star-icon">
          <i className="ri-star-fill" />
        </span>
        <span className="star-icon">
          <i className="ri-star-fill" />
        </span>
        <span className="star-icon">
          <i className="ri-star-fill" />
        </span>
        <span className="star-icon">
          <i className="ri-star-fill" />
        </span>
      </span>
      <span>5,332 reviews on</span>
      <div>
        <i className="ri-star-fill text-success ps-2" />
      </div>
      <span>Trustpilot</span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer