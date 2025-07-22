
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="NavSection">
        <nav className="navbar navbar-expand-lg bg-white shadow">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="./images/nav-logo2.svg" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Book Services
                  </a>
                  {/* <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li>
                <a class="dropdown-item" href="#">Another action</a>
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul> */}
                  <div className="dropdown-menu menu1">
                    <div className="d-flex">
                      <div className="dropdown-item border-end">
                        <ul className="dropdown-item">
                          <li className="category-name">
                            <a
                              href="/self-publishing/"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Self-Publishing');"
                              title="Self-Publishing"
                            >
                              <h6>Self-Publishing</h6>
                            </a>
                            <i className="icon-right-open" />
                          </li>
                          <li>
                            <a
                              href="/self-publishing/"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Self-Publishing Services');"
                              title="Self-Publishing Services"
                            >
                              <span>Self-Publishing Services</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/self-publishing/book-genres-and-styles"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Book Styles');"
                              title="Book Styles & Genres"
                            >
                              <span>Book Styles &amp; Genres</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/self-publishing/amazon-book-publishing"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Amazon Publishing');"
                              title="Amazon Publishing"
                            >
                              <span>Amazon Publishing</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/self-publishing/print-on-demand"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Print On Demand');"
                              title="Print On Demand Distribution"
                            >
                              <span>
                                Print On Demand <br />
                                Distribution
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/self-publishing/bookshop-store"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Bookshop Store');"
                              title="Sell Direct on Bookshop"
                            >
                              <span>Sell Direct on Bookshop</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/self-publishing/translation-services"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Translation');"
                              title="Translation Services"
                            >
                              <span>Translation Services</span>
                            </a>
                          </li>
                        </ul>
                        <ul className="dropdown-item">
                          <li className="category-name">
                            <a
                              href="/audiobooks"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Audiobooks');"
                              title="Audiobooks"
                            >
                              <h6>Audiobooks</h6>
                            </a>
                          </li>
                        </ul>
                        <ul className="dropdown-item">
                          <li className="category-name">
                            <a
                              href="/book-design"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Design');"
                              title="Design"
                            >
                              <h6>Design</h6>
                            </a>
                            <i className="icon-right-open" />
                          </li>
                          <li>
                            <a
                              href="/book-design"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Design Services');"
                              title="Design Services"
                            >
                              <span>Design Services</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/book-design/book-cover-design"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Book Cover Design');"
                              title="Book Cover Design"
                            >
                              <span>Book Cover Design</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/book-design/book-formatting"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Interior Formatting Printed Books');"
                              title="Interior Formatting for Printed Books"
                            >
                              <span>
                                Interior Formatting for <br />
                                Printed Books
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/book-design/ebook-formatting"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'eBook Interior Formatting');"
                              title="Interior Formatting for eBooks"
                            >
                              <span>
                                Interior Formatting for <br />
                                eBooks
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="dropdown-item border-end">
                        <ul className="dropdown-item">
                          <li className="category-name">
                            <a
                              href="/book-printing"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Book Printing');"
                              title="Book Printing"
                            >
                              <h6>Book Printing</h6>
                            </a>
                            <i className="icon-right-open" />
                          </li>
                          <li>
                            <a
                              href="/book-printing"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Book Printing Services');"
                              title="Book Printing Services"
                            >
                              <span>Book Printing Services</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/book-printing/book-trim-sizes-and-binding-options"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Trim Size');"
                              title="Trim Size, Binding, & Paper"
                            >
                              <span>Trim Size, Binding, &amp; Paper</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/book-printing/paperback-book-printing"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Paperback');"
                              title="Paperback Book Printing"
                            >
                              <span>Paperback Book Printing</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/book-printing/hardcover-book-printing"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Hardcover');"
                              title="Hardcover Book Printing"
                            >
                              <span>Hardcover Book Printing</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/book-printing/yearbook-printing"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Yearbook Printing');"
                              title="Yearbook Printing"
                            >
                              <span>Yearbook Printing</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/book-printing/destructive-book-scanning"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Destructive Book Scanning');"
                              title="Destructive Book Scanning"
                            >
                              <span>Destructive Book Scanning</span>
                            </a>
                          </li>
                        </ul>
                        <ul className="dropdown-item" id="book-editing-list">
                          <li className="category-name">
                            <a
                              href="/book-editing-services"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Editing');"
                              title="Editing"
                            >
                              <h6>Editing</h6>
                            </a>
                            <i className="icon-right-open" />
                          </li>
                          <li>
                            <a
                              href="/book-editing-services"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Editing Services');"
                              title="Editing Services"
                            >
                              <span>Editing Services</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/book-editing-services/line-editing-services"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Line Editing');"
                              title="Line Editing"
                            >
                              <span>Line Editing</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/book-editing-services/copy-editing-services"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Copy Editing');"
                              title="Copy Editing"
                            >
                              <span>Copy Editing</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/book-editing-services/proofreading-services"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Proofreading');"
                              title="Proofreading"
                            >
                              <span>Proofreading</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/book-editing-services/query-letter-book-synopsis-review-and-editing"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Query Editing');"
                              title="Query Letter & Book Synopsis"
                            >
                              <span>
                                Query Letter &amp; Book <br />
                                Synopsis
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="dropdown-item">
                        <ul className="dropdown-item">
                          <li className="category-name">
                            <a
                              href="/ebooks"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'eBooks');"
                              title="eBooks"
                            >
                              <h6>eBooks</h6>
                            </a>
                            <i className="icon-right-open" />
                          </li>
                          <li>
                            <a
                              href="/ebooks"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'eBooks Services');"
                              title="eBook Services"
                            >
                              <span>eBook Services</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/ebooks/ebook-conversion"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'eBook publishing & conversion');"
                              title="eBook Conversion"
                            >
                              <span>eBook Conversion</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/sell-your-book/ebook-distribution"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'eBook Distribution');"
                              title="eBook Distribution"
                            >
                              <span>eBook Distribution</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/ebooks/fixed-layout-ebooks"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Fixed Layout');"
                              title="Fixed Layout for eBooks"
                            >
                              <span>Fixed Layout for eBooks</span>
                            </a>
                          </li>
                        </ul>
                        <ul className="dropdown-item">
                          <li className="category-name">
                            <a
                              href="/sell-your-book/book-marketing-services"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Marketing Services');"
                              title="Marketing Services"
                            >
                              <h6>Marketing Services</h6>
                            </a>
                            <i className="icon-right-open" />
                          </li>
                          <li>
                            <a
                              href="/sell-your-book/book-marketing-services"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Marketing Services Overview');"
                              title="Marketing Services Overview"
                            >
                              <span>Marketing Services Overview</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/sell-your-book/metadata-optimization"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Meta Data Optimization');"
                              title="Book Metadata Optimization"
                            >
                              <span>Book Metadata Optimization</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/sell-your-book/ads-for-authors"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'AdsForAuthors');"
                              title="Ads for Authors"
                            >
                              <span>Ads for Authors</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/sell-your-book/custom-bookmarks-and-posters"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Custom Bookmarks Posters');"
                              title="Bookmarks & Posters"
                            >
                              <span>Bookmarks &amp; Posters</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="/sell-your-book/consultation-services"
                              onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Consultation Services');"
                              title="Consultation Services"
                            >
                              <span>Consultation Services</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="dropdown-item">
                        <ul>
                          <li>
                            <img src="./images/icon-book-printing.svg" alt="" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resources
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    BookShop
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <li class="nav-item ms-3">
            <a class="nav-link btn btn-danger">Pricing</a>
             <a href=""> <button class="btn btn-danger">Pricing</button> </a>
              
          </li> */}
                <li id="li-pricing">
                  <a
                    className="link-pricing btn btn-danger"
                    href="/pricing"
                    onclick="AVL.UTILITIES.ANALYTICS.TriggerEventPush('Click', 'navigation', 'Get Started');"
                    title="Pricing"
                  >
                    <span>Pricing</span>
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                <button className="btn" type="submit">
                  Q Search
                </button>
                <button className="btn" type="submit">
                  1-877-961-6878
                </button>
                <button className="btn" type="submit">
                  Contact Us
                </button>
                <button className="btn" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

    </div>
  )
}

export default Navbar