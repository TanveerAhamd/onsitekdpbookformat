
import React from 'react'

const Hero = () => {
    return (
        <div>
            <>
                {/* Hero-section start */}
                <div className="container-fluid bg-light ebook-section py-5 px-3">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Left Content */}
                            <div className="col-sm-12 col-md-8 col-lg-7 mb-3 mb-md-0 content mt-2">
                                <h1 className="text-black-mobile display-5 title">
                                    Expert eBook publishing services
                                </h1>
                                <h2 className="fs-3 mt-4 subtitle extralineheight my-10">
                                    Professional eBook conversion, design, and formatting all at an
                                    affordable price.
                                </h2>
                                <a
                                    href="#"
                                    className="btn btn-center text-white rounded-pill shadow mb-5"
                                >
                                    Create Your eBook
                                </a>
                            </div>
                            <div className="support">
                                <img src="./images/download" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default Hero