import React from 'react';
const Home = ()=>{
    return (
        
        <div>
            <div class="preloader">
                <div class="preloader-body">
                    <div class="cssload-container"><span></span><span></span><span></span><span></span></div>
                </div>
            </div>
            <div class="Page">
                <header class="section page-header-custom">
                    {/* <!-- Page Header-->
                    <!--RD Navbar--> */}
                    <div class="rd-navbar-wrap">
                        <nav class="rd-navbar rd-navbar-classic" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-md-device-layout="rd-navbar-fixed" data-lg-device-layout="rd-navbar-fixed" data-xl-device-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="46px" data-xl-stick-up-offset="46px" data-xxl-stick-up-offset="46px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
                        <div class="rd-navbar-main">
                            {/* <!--RD Navbar Panel--> */}
                            <div class="rd-navbar-panel">
                            {/* <!--RD Navbar Brand--> */}
                            <div class="rd-navbar-brand">
                                {/* <!--Brand--> */}
                                <a class="brand" href="index.html"><img class="brand-logo-dark" src="images/logo-default-121x110.png" alt="" width="60" height="55"/><img class="brand-logo-light" src="images/logo-inverse-121x110.png" alt="" width="60" height="55"/>
                                <div class="brand-text">Interior Design</div></a>
                            </div>
                            {/* <!--RD Navbar Toggle--> */}
                            <div class="rd-navbar-project-hamburger" data-multitoggle=".rd-navbar-nav-wrap" data-multitoggle-isolate="">
                                <div class="project-hamburger"><span class="project-hamburger-arrow-top"></span><span class="project-hamburger-arrow-center"></span></div>
                                <div class="project-hamburger-text">Menu</div>
                            </div>
                            {/* <!--RD Navbar Social--> */}
                            <ul class="rd-navbar-list-social">
                                <li><a class="icon fa fa-facebook" href="#"></a></li>
                                <li><a class="icon fa fa-twitter" href="#"></a></li>
                                <li><a class="icon fa fa-instagram" href="#"></a></li>
                            </ul>
                            {/* <!--RD Navbar Aside--> */}
                            <div class="rd-navbar-aside">
                                {/* <!-- RD Navbar Search--> */}
                                <div class="rd-navbar-search"><a class="rd-navbar-search-toggle" href="#"><span></span></a>
                                <form class="rd-search" action="#" data-search-live="rd-search-results-live" method="GET">
                                    <div class="form-wrap">
                                        <label class="form-label" for="rd-navbar-search-form-input">Search...</label>
                                        <input class="rd-navbar-search-form-input form-input" id="rd-navbar-search-form-input" type="text" name="s" autocomplete="off"/>
                                        <div class="rd-search-results-live" id="rd-search-results-live"></div>
                                        <button class="rd-search-form-submit fl-soft-icons-search63" type="submit"></button>
                                    </div>
                                </form>
                                </div>
                                {/* <!-- RD Navbar Switcher--> */}
                                <div class="rd-navbar-switcher-wrap">
                                <button class="rd-navbar-switcher fl-soft-icons-contrast15" data-rd-navbar-toggle=".switcher-inline"></button>
                                <div class="switcher-inline">
                                    <div class="switcher-inline-header">
                                    <h6 class="switcher-inline-title styleswitcher_title">This customization tool allows you to make color changes in your theme.</h6>
                                    </div>
                                    <div class="switcher-inline-body">
                                    <button class="styleswitcher_scheme active" id="colorScheme0" style="background: rgb(0, 0, 0) none repeat scroll 0% 0% / cover;"></button>
                                    <button class="styleswitcher_scheme" id="colorScheme1" data-url="css/style-1.css" style="background: rgb(255, 255, 255) none repeat scroll 0% 0% / cover;"></button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* <!-- RD Navbar Nav Wrap--> */}
                            <div class="rd-navbar-nav-wrap">
                            <div class="rd-navbar-sidebar-toggle" data-multitoggle=".rd-navbar-nav-wrap" data-multitoggle-isolate=""><span class="fl-soft-icons-cross68"></span></div>
                            <ul class="rd-navbar-nav">
                                <li class="rd-nav-item"><a class="rd-nav-link" href="#about-us">about</a></li>
                                <li class="rd-nav-item"><a class="rd-nav-link" href="#gallery">gallery</a></li>
                                <li class="rd-nav-item"><a class="rd-nav-link" href="#contacts">contact</a></li>
                            </ul>
                            {/* <!--RD Navbar Social--> */}
                            <ul class="rd-navbar-list-social">
                                <li><a class="icon fa fa-facebook" href="#"></a></li>
                                <li><a class="icon fa fa-twitter" href="#"></a></li>
                                <li><a class="icon fa fa-instagram" href="#"></a></li>
                            </ul>
                            </div>
                        </div>
                        </nav>
                    </div>

                    <div class="container custom-container">
                        <div class="row">
                        <div class="col-xl-7 offset-xl-1 offset-xxl-1 swiper-container-wrap">
                            {/* <!-- Swiper--> */}
                            <div class="swiper-container swiper-slider swiper-slider-modern" data-slide-effect="fade" data-loop="true" data-autoplay="4000" data-nav="true" data-thumb="#swiper-thumbs">
                            <div class="swiper-wrapper text-left">
                                <div class="swiper-slide bg-image-lg bg-overlay-2" data-slide-bg="images/slider-1.jpg"></div>
                                <div class="swiper-slide bg-image-lg bg-overlay-2" data-slide-bg="images/slider-2.jpg"></div>
                                <div class="swiper-slide bg-image-lg bg-overlay-2" data-slide-bg="images/slider-3.jpg"></div>
                                <div class="swiper-slide bg-image-lg bg-overlay-2" data-slide-bg="images/slider-4.jpg"></div>
                            </div>
                            <div class="swiper-pagination__module">
                                <div class="swiper-pagination"></div>
                                <div class="swiper-counter"></div>
                            </div>
                            </div>
                            {/* <!-- Swiper Thumb--> */}
                            <div class="swiper-container swiper-slider swiper-thumbs" id="swiper-thumbs" data-nav="true" data-slides-per-view="3" data-secondary="" data-center="true" data-space-between="30" data-loop="true">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" data-slide-bg="images/slider-1.jpg"></div>
                                <div class="swiper-slide" data-slide-bg="images/slider-2.jpg"></div>
                                <div class="swiper-slide" data-slide-bg="images/slider-3.jpg"></div>
                                <div class="swiper-slide" data-slide-bg="images/slider-4.jpg"></div>
                            </div>
                            </div>
                        </div>
                        <div class="col-xl-7 col-xxl-6 offset-xl-5 offset-xxl-6">
                            <div class="swiper-modern-content">
                            <h3>Featured Project</h3>
                            <h1>94 Smith Dr.</h1>
                            <p class="font-weight-regular">
                                In this project, our designers tried to combine several styles in a single interior.
                                <br class='d-none d-xl-block'/> It features some modern and classic elements in the decor.
                            </p>
                            <a class="link-decorative link-decorative-2" href="#">more</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </header>
                <footer class="section footer-modern">
                    <div class="footer-modern-content">
                    <div class="container custom-container">
                        <div class="row row-50 justify-content-start">
                        <div class="col-sm-12 col-xl-3 text-center text-md-left">
                            <h3 class="text-white">Our Contacts</h3>
                            <ul class="footer-contacts">
                                <li><a class="link-color-2" href="mailto:#">info@demolink.org</a></li>
                                <li><a class="link-color-2" href="tel:#">1 800 1234 567</a></li>
                                <li class="text-white">4730 Crystal Springs Dr, Los Angeles, CA 90027</li>
                            </ul>
                        </div>
                        <div class="col-sm-12 col-xl-3 text-center text-md-left">
                            <h3 class="text-white">Follow Us</h3>
                            <ul class="list-inline list-inline-xs footer-social-list-2">
                            <li><a class="link-color-2 icon fa fa-facebook icon-xl" href="#"></a></li>
                            <li><a class="link-color-2 icon fa fa-twitter icon-xl" href="#"></a></li>
                            <li><a class="link-color-2 icon fa fa-instagram icon-xl" href="#"></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="footer-modern-bottom-panel text-md-left">
                    <div class="container custom-container">
                        <p class="rights"><span>&copy;&nbsp;</span><span class="copyright-year"></span><span>&nbsp;</span><span>ID</span><span>.&nbsp;</span><span>All rights reserved</span><span>.&nbsp;</span><span></span><a href="#">Privacy Policy</a></p>
                    </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
export default Home;