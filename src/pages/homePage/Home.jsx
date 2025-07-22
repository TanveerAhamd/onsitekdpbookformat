
import React from 'react'
import Hero from '../../components/herosection/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <>
        {/* Newsletter section start */}
        <div className="container-fluid bg-black black mb-2">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4 border-end text-white">
                <p>GET YOUR BOOKBABY RESOURCES:</p>
              </div>
              <div className="col-md-4 border-end">
                <p>
                  <a href="" className="request">
                    {" "}
                    REQUEST OUR FREE CATALOG{" "}
                  </a>
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <a href="" className="request">
                    {" "}
                    SIGN UP FOR OUR NEWSLETTER{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Books section start */}
        <div className="container-fluid py-5 mt-1">
          <div className="container text-center">
            <h2 className="titles fs-1">
              Everything your eBook needs is right here:
            </h2>
            <div className="row ">
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 text-center book-item bgs-bookprint pb-5 px-3 ">
                <a href="" className="text-black text-decoration-none">
                  <img
                    src="./images/home-thumbs-amazonkdp.webp"
                    className="img-responsive mb-2"
                    alt=""
                    style={{ width: 360 }}
                  />
                  <h3 className="fs-5 lh-base mb-1 bold-med">
                    New! Amazon KDP Select
                  </h3>
                  <p className="lh-sm">
                    All the benefits of Kindle Select Publishing, plus BookBaby’s
                    global network!
                  </p>
                </a>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 text-center book-item pb-5">
                <a href="" className="text-black text-decoration-none">
                  <img
                    src="./images/home-thumbs-ebookconversion2.webp"
                    className="img-responsive mb-2"
                    alt=""
                  />
                  <h3 className="fs-5 lh-base mb-1 bold-med">eBook conversion</h3>
                  <p className="lh-sm">
                    Hands-on, expert eBook file conversion starting at just $99.
                  </p>
                </a>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 text-center book-item bgs-bookprint pb-5">
                <a href="" className="text-black text-decoration-none">
                  <img
                    src="./images/home-thumbs-edit.webp"
                    className="img-responsive mb-2"
                    alt=""
                  />
                  <h3 className="fs-5 lh-base mb-1 bold-med">
                    Professional book editing
                  </h3>
                  <p className="lh-sm">
                    Fast and affordable editing by experienced book editors.
                  </p>
                </a>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 text-center book-item bgs-bookprint pb-5">
                <a href="" className="text-black text-decoration-none">
                  <img
                    src="./images/home-thumbs-design.webp"
                    className="img-responsive mb-2"
                    alt=""
                  />
                  <h3 className="fs-5 lh-base mb-1 bold-med">
                    Professional eBook covers
                  </h3>
                  <p className="lh-sm">
                    Stand out on the digital shelf with a gorgeous eBook cover.
                  </p>
                </a>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 text-center book-item bgs-bookprint pb-5">
                <a href="" className="text-black text-decoration-none">
                  <img
                    src="./images/home-thumbs-fbinsta.webp"
                    className="img-responsive mb-2"
                    alt=""
                  />
                  <h3 className="fs-5 lh-base mb-1 bold-med">
                    Facebook Ads for Authors
                  </h3>
                  <p className="lh-sm">
                    Promote your book to readers on the world’s largest social media
                    platform.
                  </p>
                </a>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 text-center book-item bgs-bookprint pb-5">
                <a href="" className="text-black text-decoration-none">
                  <img
                    src="./images/home-thumbs-fixedlayout.webp"
                    className="img-responsive mb-2"
                    alt=""
                  />
                  <h3 className="fs-5 lh-base mb-1 bold-med">
                    Fixed layout for eBooks with many images
                  </h3>
                  <p className="lh-sm">
                    Perfect for children’s books, graphic novels, and cookbooks
                  </p>
                </a>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 text-center book-item bgs-bookprint pb-5">
                <a href="" className="text-black text-decoration-none">
                  <img
                    src="./images/home-thumbs-ebookdistribution2.webp"
                    className="img-responsive mb-2"
                    alt=""
                  />
                  <h3 className="fs-5 lh-base mb-1 bold-med">eBook distribution</h3>
                  <p className="lh-sm">
                    Sell your eBook in the world’s biggest bookstores.
                  </p>
                </a>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 text-center book-item bgs-bookprint pb-5">
                <a href="" className="text-black text-decoration-none">
                  <img
                    src="./images/home-thumbs-bookshop.webp"
                    className="img-responsive mb-2"
                    alt=""
                  />
                  <h3 className="fs-5 lh-base mb-1 bold-med">
                    Direct-to-Reader Sales
                  </h3>
                  <p className="lh-sm">
                    Set your own price and earn 85% of your retail sales with
                    Bookshop™.
                  </p>
                </a>
              </div>
            </div>
            {/* Grey line start */}
            <div className="greyline hidden-xs" />
            {/* Author review */}
            <div className="row">
              <div className="hidden-xs col-sm-3 col-md-3 col-lg-3">
                <img src="./images/testimonial-gino.webp" alt="" />
              </div>
              <div className="hidden-xs col-sm-9 col-md-9 col-lg-9 text-left text-center-mobile">
                <blockquote>
                  <p className="quote-box text-start">
                    Authors with coding experience can convert eBooks themselves with
                    third-party software. But for most, turning a manuscript into an
                    eBook is a complex process where it’s easy to miss steps, like
                    verifying metadata. The only guaranteed way to make a professional
                    eBook is with expert help. We’ll manually convert, check, and
                    publish your eBook then send you a free proof to approve our work
                    before it’s published.
                  </p>
                  <footer className="quote-author">
                    <cite>
                      Angelino Vazquez, <em>Conversion Team Leader</em>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="greyline" />
            {/* Babybook choice section */}
            <h2 className="titles fs-1 mt-4 mb-2">
              Why BookBaby is your best choice for eBooks
            </h2>
            <p className="text-center" style={{ marginBottom: 30 }}>
              We make taking your journey from writer to author as easy as possible
              with everything you need to make the eBook of your dreams. As a book
              publishing platform, you can expect the following from us:
            </p>
            <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                <img
                  src="./images/ebooks-callout.webp"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 text-start">
                <ul className="disc-list mt-xs-20 mt-sm-20 ps-2 ms-4 mb-4">
                  <li>
                    <strong>
                      We take zero commission. You keep 100% of your net eBook sales
                      from online retailers.
                    </strong>
                  </li>
                  <li>
                    Amazon Kindle Direct Publishing + BookBaby. The best of both
                    worlds! Enjoy all the benefits of the Kindle Select Publishing
                    program, plus the opportunity to expand your eBook sales through
                    BookBaby’s industry-leading global distribution network.
                  </li>
                  <li>
                    Our file conversion professionals will convert your digital
                    document to the highest quality so that it’s enjoyable on Amazon
                    Kindle, Apple iPad, Barnes &amp; Noble Nook, smartphones, tablets,
                    and every popular eBook reader around the globe.
                  </li>
                  <li>
                    We are{" "}
                    <strong>
                      <em>the only</em>
                    </strong>{" "}
                    eBook self-publishing company that sends you a finished ePub
                    formatting proof of your eBook for your review.
                  </li>
                  <li>
                    Self-publish eBooks and not only reach millions of readers on
                    Amazon, but also be able to sell your eBook on the largest eBook
                    retail network, introducing your book to more readers worldwide
                    than anyone else.
                  </li>
                  <li>
                    Fast to market. Your book will be ready to sell online in just a
                    day or two after proof approval.
                  </li>
                  <li>You keep control and retain 100% of your rights.</li>
                  <li>
                    Get paid every week. When your account reaches your set threshold,
                    we automatically pay you the following Monday.
                  </li>
                  <li>
                    Earn more royalties with your own sales page on Bookshop™—your
                    free one-stop shop to sell your eBook directly to your readers
                    while earning a whopping 85% of your retail sales.
                  </li>
                </ul>
              </div>
            </div>
            <div className="greyline" />
            {/* Ebook + video section */}
            <h2 className="titles fs-1">What is an eBook?</h2>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-half text-start">
                <p>
                  An eBook is an electronic version of a printed book that can easily
                  be read on a computer or handheld device, with properly formatted
                  text and images, no matter the size of the screen. The text of the
                  digital book is{" "}
                  <strong>
                    <em>reflowable</em>
                  </strong>{" "}
                  — meaning when one screen is full, it will flow to the next — and
                  the images will resize to fit screen proportions.
                </p>
                <p>
                  eBooks are also the fastest way to self-publish your book worldwide,
                  making it easy for millions of readers to find, buy, and enjoy your
                  book online on retail sites like Amazon’s Kindle Store, Barnes &amp;
                  Noble’s NOOK Store, Apple Books, and many more. With eBooks, readers
                  can take hundreds, even thousands of books on the go, and all on one
                  device.
                </p>
                <p>
                  There are a lot of ways you can benefit from understanding
                  <a
                    href="https://www.bookbaby.com/learn/how-to-make-an-ebook"
                    style={{ textDecorationLine: "underline", color: "#ad4d00" }}
                  >
                    how to create an eBook
                  </a>
                  . Learn the basics by watching our video and become a self-published
                  author with BookBaby today.
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-half embed-responsive embed-responsive-half">
                <lite-youtube
                  videotitle="What Is An eBook? BookBaby Explains eBooks & Self-Publishing eBooks"
                  videoid="GZosR1twLJs"
                  title="Play: What Is An eBook? BookBaby Explains eBooks & Self-Publishing eBooks"
                >
                  <noscript>
                    &lt;iframe credentialless frameborder="0" title="What Is An eBook?
                    BookBaby Explains eBooks &amp; Self-Publishing eBooks"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope;
                    picture-in-picture" allowfullscreen
                    src="https://www.youtube.com/embed/GZosR1twLJs?autoplay=1&amp;start=0&amp;null"&gt;&lt;/iframe&gt;
                  </noscript>
                  <noscript>
                    &lt;iframe credentialless frameborder="0" title="What Is An eBook?
                    BookBaby Explains eBooks &amp; Self-Publishing eBooks"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope;
                    picture-in-picture" allowfullscreen
                    src="https://www.youtube.com/embed/GZosR1twLJs?autoplay=1&amp;start=0&amp;null"&gt;&lt;/iframe&gt;
                  </noscript>
                  <a
                    className="lite-youtube-fallback"
                    href="https://www.youtube.com/watch?v=GZosR1twLJs"
                  >
                    What Is An eBook? BookBaby Explains eBooks &amp; Self-Publishing
                    eBooks
                  </a>
                </lite-youtube>
              </div>
            </div>
            <div className="greyline" />
            {/* Compatibility across the board section */}
            <h2 className="titles fs-1 mb-2">Compatibility across the board</h2>
            <p className="mb-30 text-center">
              Whether it’s your daughter’s iPad or your mom’s Kindle, our eBook
              publishing experts will produce high-quality eBook files that are
              viewable on ALL popular eReaders.
            </p>
            <img
              src="./images/ebooks-ereaders.webp"
              className="img-fluid center-block"
              alt="eReaders"
              title="eReaders"
            />
            <a
              href="https://www.bookbaby.com/quoter/confighandler.aspx"
              className="btn btn-center btn-orange btn-lg"
              role="button"
              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'ebooksB', 'hero-button-GetStarted'); return USERCONTROL.PREQUOTERS.FUNCTIONS.OpenPreQuoter(this, 'EBOOK');"
            >
              Get started
            </a>
          </div>
        </div>
        {/* Not sure where to start? */}
        <div className="container-fluid mb-2 bgcolor">
          <div className="container text-center">
            <h2 className="titles">Not sure where to start?</h2>
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ptb-20 center-text">
                <a
                  href="https://www.bookbaby.com/how-to-self-publish-a-book"
                  onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'ebooksB', 'Five Steps Guide');"
                >
                  <img
                    className="img-responsive center-block"
                    src="./images/icon-5steps.svg"
                    alt="How to Self Publish a Book guide"
                    title="How to Self Publish a Book guide"
                    width={93}
                    height={68}
                  />
                </a>
                <h3 className="title-bold">Five steps is all it takes</h3>
                <p className="plr-20">
                  All the essential information you need to go from manuscript to
                  market place.
                  <a
                    style={{ textDecorationLine: "underline", color: "#ad4d00" }}
                    href="https://www.bookbaby.com/how-to-self-publish-a-book"
                    onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'ebooksB', 'Five Steps Guide');"
                  >
                    Read on.
                  </a>
                </p>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ptb-20 center-text">
                <a
                  href="https://www.bookbaby.com/how-to-make-an-ebook"
                  onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'ebooksB', 'Book Genres & Styles');"
                >
                  <img
                    className="img-responsive center-block"
                    src="./images/icon-home-ebooks.svg"
                    alt="Prepare your eBook"
                    title="Prepare your eBook"
                    width={72}
                    height={68}
                  />
                </a>
                <h3 className="title-bold">Prepare your eBook</h3>
                <p className="plr-20">
                  Read these helpful tips for preparing your manuscript before you
                  make your eBook.
                  <a
                    style={{ textDecorationLine: "underline", color: "#ad4d00" }}
                    href="https://www.bookbaby.com/how-to-make-an-ebook"
                    onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'ebooksB', 'Prepare your eBook');"
                  >
                    Read on.
                  </a>
                </p>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ptb-20 center-text">
                <a
                  href="https://www.bookbaby.com/contact"
                  onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'ebooksB', 'Contact');"
                >
                  <img
                    className="img-responsive center-block"
                    src="./images/icon-home-experts.svg"
                    alt="Prefer to speak to friendly BookBaby Publishing Specialist? Give us a call."
                    title="Prefer to speak to friendly BookBaby Publishing Specialist? Give us a call."
                    width={100}
                    height={68}
                  />
                </a>
                <h3 className="title-bold">Real experts on call</h3>
                <p className="plr-20">
                  Need some help? We’re here for you. Just call us at 1-877-961-6878
                  to talk to a real Publishing Specialist or get a quote online.
                  <a
                    style={{ textDecorationLine: "underline", color: "#ad4d00" }}
                    href="https://www.bookbaby.com/contact"
                    onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'ebooksB', 'Contact');"
                  >
                    Start here.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Scrollbar section start */}
        <div className="container-fluid scrollbar py-5">
          <div className="d-flex justify-content-between align-items-center flex-wrap pb-4">
            <div className="d-flex align-items-center">
              <div className="me-2">
                <i className="ri-star-fill star-green" />
                <i className="ri-star-fill star-green" />
                <i className="ri-star-fill star-green" />
                <i className="ri-star-fill star-green" />
                <i className="ri-star-fill star-green" />
              </div>
              <div className="fs-4 fw-bold me-1">4.6</div>
              <div className="text-muted">
                / 5 • <strong>80</strong> reviews
              </div>
            </div>
            <div className="trustpilot-logo d-flex align-items-center">
              <i className="ri-star-fill me-1" /> Trustpilot
            </div>
          </div>
          {/* Scrollbar */}
          <div className="container border-top rounded py-4 overflow-auto scroll">
            {/* Ratings Breakdown and Categories */}
            <div className="row">
              {/* Left: Breakdown */}
              <div className="col-md-6">
                <h5 className="fw-bold mb-3">
                  Reviews <span className="text-muted">80</span>
                </h5>
                {/* Rating Rows */}
                <div className="d-flex align-items-center mb-2">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    disabled=""
                  />
                  <span className="me-2">Excellent</span>
                  <div className="rating-bar flex-grow-1">
                    <div className="rating-bar-fill" style={{ width: "79%" }} />
                  </div>
                  <span className="ms-2">79%</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    disabled=""
                  />
                  <span className="me-2">Great</span>
                  <div className="rating-bar flex-grow-1">
                    <div className="rating-bar-fill" style={{ width: "13%" }} />
                  </div>
                  <span className="ms-2">13%</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    disabled=""
                  />
                  <span className="me-2">Average</span>
                  <div className="rating-bar flex-grow-1">
                    <div className="rating-bar-fill" style={{ width: "3%" }} />
                  </div>
                  <span className="ms-2">3%</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    disabled=""
                  />
                  <span className="me-2">Poor</span>
                  <div className="rating-bar flex-grow-1">
                    <div className="rating-bar-fill" style={{ width: "6%" }} />
                  </div>
                  <span className="ms-2">6%</span>
                </div>
                <div className="d-flex align-items-center mb-2 text-muted">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    disabled=""
                  />
                  <span className="me-2">Bad</span>
                  <div className="rating-bar flex-grow-1">
                    <div
                      className="rating-bar-fill"
                      style={{ width: "0%", backgroundColor: "#ccc" }}
                    />
                  </div>
                  <span className="ms-2">0%</span>
                </div>
              </div>
              {/* Right: Categories */}
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="fw-semibold">Quality</div>
                  <div className="d-flex align-items-center">
                    <div className="me-2">
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
                    </div>
                    <div>
                      <strong>4.6</strong> / 5
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="fw-semibold">Value for money</div>
                  <div className="d-flex align-items-center">
                    <div className="me-2">
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
                    </div>
                    <div>
                      <strong>4.5</strong> / 5
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* Individual Review 1 */}
            <div className="mt-4">
              <div className="fw-semibold">Drew Chenault</div>
              <div className="text-muted mb-2">June 3</div>
              <div className=" mb-2">
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
                <span className="ms-2 text-muted">
                  More details <i className="ri-arrow-down-s-line" />
                </span>
              </div>
              <p>simple and relatively inexpensive.</p>
              <div className="verified-badge mt-2">
                <i className="ri-shield-check-line" /> Verified, collected by BookBaby
              </div>
            </div>
            <div className="review-card">
              <strong>Jason Fox</strong>, <span className="review-date">May 13</span>
              <div className="d-flex align-items-center mt-2">
                <div className=" mb-2">
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
                  <span className="ms-2 text-muted">
                    More details <i className="ri-arrow-down-s-line" />
                  </span>
                </div>
              </div>
              <p className="mt-2">Excellent format, conversion and distribution.</p>
              <div className="verified">
                <i className="ri-check-double-line" /> Verified, collected by BookBaby
              </div>
            </div>
            {/* Review 2 */}
            <div className="review-card">
              <strong>Amber</strong>, <span className="review-date">April 18</span>
              <div className=" mb-2">
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
                <span className="ms-2 text-muted">
                  More details <i className="ri-arrow-down-s-line" />
                </span>
              </div>
              <p className="mt-2">
                Very happy! I will use BookBaby eBook services for my future projects.
                I would not hesitate to try their print services as well, given my
                exceptional experience with them
                <span className="emoji">😍</span>
              </p>
              <div className="verified">
                <i className="ri-check-double-line" /> Verified, collected by BookBaby
              </div>
            </div>
            {/* Review 3 */}
            <div className="review-card">
              <strong>Eric Guay</strong>,{" "}
              <span className="review-date">March 21</span>
              <div className=" mb-2">
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
                <span className="ms-2 text-muted">
                  More details <i className="ri-arrow-down-s-line" />
                </span>
              </div>
              <p className="mt-2">
                Creating the eBook was super easy and fast! I recommend doing all the
                work on the print version first, so it's a no-brainer. Thanks,
                BookBaby!
              </p>
              <div className="d-flex align-items-center mb-2">
                <img
                  src="https://images.trustpilot.com/stars/5stars.svg"
                  alt="Stars"
                  width={120}
                />
              </div>
              <div className="verified">
                <i className="ri-check-double-line" /> Verified, collected by BookBaby
              </div>
            </div>
            {/* Review 4 */}
            <div className="review-card">
              <h6>
                <strong>Ivan</strong>, October 11
              </h6>
              <div className=" mb-2">
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
                <span className="ms-2 text-muted">
                  More details <i className="ri-arrow-down-s-line" />
                </span>
              </div>
              <p className="review-text">Great service 👍</p>
              <p className="verified">
                <i className="ri-checkbox-circle-line" /> Verified, collected by
                BookBaby
              </p>
            </div>
            {/* Review 5 */}
            <div className="review-card">
              <h6>
                <strong>Delbert York</strong>, June 9
              </h6>
              <div className=" mb-2">
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
                <span className="ms-2 text-muted">
                  More details <i className="ri-arrow-down-s-line" />
                </span>
              </div>
              <p className="review-text">
                BookBaby is the best and most affordable way I know of for independent
                authors to have their books published and distributed.
              </p>
              <p className="verified">
                <i className="ri-checkbox-circle-line" /> Verified, collected by
                BookBaby
              </p>
            </div>
            {/* Review 1 */}
            <div className="review-card">
              <h6>
                <strong>Sandra Hartsell</strong>, May 18
              </h6>
              <div className=" mb-2">
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
                <span className="ms-2 text-muted">
                  More details <i className="ri-arrow-down-s-line" />
                </span>
              </div>
              <p className="review-text">
                This is a great product. It distributes your ebooks and published
                books to Barnes and Nobles and other book distributors. Amazon was so
                behind 15 years ago and you never had a chance too get your book
                distributed to other book stores.
              </p>
              <p className="verified">
                <i className="ri-checkbox-circle-line" /> Verified, collected by
                BookBaby
              </p>
            </div>
            {/* Review 2 */}
            <div className="review-card">
              <h6>
                <strong>Dana zoe Gest</strong>, February 5
              </h6>
              <div className=" mb-2">
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
                <span className="ms-2 text-muted">
                  More details <i className="ri-arrow-down-s-line" />
                </span>
              </div>
              <p className="review-text">Thank you so much.</p>
              <p className="verified">
                <i className="ri-checkbox-circle-line" /> Verified, collected by
                BookBaby
              </p>
            </div>
            {/* Review 3 */}
            <div className="review-card">
              <h6>
                <strong>Pamela Gembica</strong>, January 24
              </h6>
              <div className=" mb-2">
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
                <span className="ms-2 text-muted">
                  More details <i className="ri-arrow-down-s-line" />
                </span>
              </div>
              <p className="review-text">
                Good instructions, prompt replies; great website; deliver what they
                promise. Thanks!
              </p>
              <p className="verified">
                <i className="ri-checkbox-circle-line" /> Verified, collected by
                BookBaby
              </p>
            </div>
            {/* Review 3 */}
            <div className="review-card">
              <h6>
                <strong>Pamela Gembica</strong>, January 24
              </h6>
              <div className=" mb-2">
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
                <span className="ms-2 text-muted">
                  More details <i className="ri-arrow-down-s-line" />
                </span>
              </div>
              <p className="review-text">
                Good instructions, prompt replies; great website; deliver what they
                promise. Thanks!
              </p>
              <p className="verified">
                <i className="ri-checkbox-circle-line" /> Verified, collected by
                BookBaby
              </p>
            </div>
            {/* Review 3 */}
            <div className="card border-0 shadow-sm p-3">
              <div className="d-flex justify-content-between">
                <div>
                  <strong>Nirmal Grossbart</strong>,{" "}
                  <span className="text-muted">January 18</span>
                </div>
                <div className="text-muted">
                  More details <i className="ri-arrow-down-s-line" />
                </div>
              </div>
              <div className="mt-2 mb-2">
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
              </div>
              <p>
                This was the fifth time I used BookBaby to create and distribute our
                books. Every time has been super easy and smooth. This last time, I
                made a mistake and they jumped in and fixed for me without comment.
              </p>
              <div className="verified-text">
                <i className="ri-check-double-line" /> Verified, collected by BookBaby
              </div>
            </div>
            <div className="load-more">Load more reviews</div>
          </div>
        </div>
        {/* Satisfaction Guaranteed */}
        <div className="container-fluid bgblue">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <a href="https://www.bookbaby.com/guarantee">
                  <img
                    src="./images/guarantee181.svg"
                    alt="100% Satisfaction Guarantee"
                    width={160}
                    height={160}
                    className="img-responsive center-block"
                  />
                </a>
              </div>
              <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9 text-left text-center-xs">
                <h2 className="titles fs-1 mb-2">100% Satisfaction Guaranteed</h2>
                <p className="bodyplus2 mt-10">
                  If you're not thrilled with our work—whether it's eBook conversion,
                  cover design, or print quality—we'll work with you until you are.
                  That's our publishing promise to you.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* last section */}
        <div className="container-fluid bg-light faq">
          <div className="container pt-5 pb-5 show-overflow">
            <h2 className="titles light mt-0 mb-4">Frequently Asked Questions</h2>
            {/* Accordian 1 */}
            <div className="accordion pb-4" id="faqAccordion">
              {/* Accordion Item 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Do eBooks Need a Fixed Layout?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      It all depends on what type of eBook you’re writing.{" "}
                      <a href="https://www.bookbaby.com/ebooks/fixed-layout-ebooks">
                        Fixed Layout files
                      </a>{" "}
                      allow your eBook to display images and text the same way across
                      different eBook readers...
                    </p>
                    <p>
                      <a href="https://www.bookbaby.com/contact">Contact us</a> today
                      for more information and to get started!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Accordian 2 */}
            <div className="accordion pb-4" id="faqAccordion">
              {/* Accordion Item 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How Can I Publish an eBook?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Publishing an eBook is simple when you work with BookBaby. We
                      have every self-publishing service you need...
                    </p>
                    <p>
                      Learn more today by contacting us at{" "}
                      <a href="tel:18779616878">1-877-961-6878</a> or{" "}
                      <a href="https://www.bookbaby.com/pricing">save a quote</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Accordian 3 */}
            <div className="accordion pb-4" id="faqAccordion">
              {/* Accordion Item 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How Do I Sell My eBook?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Selling your eBook has never been easier than with BookBaby's{" "}
                      <a href="https://www.bookbaby.com/sell-your-book/book-marketing-services">
                        marketing services
                      </a>
                      ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Accordian 4 */}
            <div className="accordion pb-4" id="faqAccordion">
              {/* Accordion Item 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Where Can You Buy an eBook?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      eBooks are becoming more and more popular, and can be bought
                      from Amazon, Google, Kindle, Barnes &amp; Noble, etc...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    </div>
  )
}

export default Home