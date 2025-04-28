import React from 'react'
import logo from '../assets/logo.png'

function About() {
  return (
    <div>
      <section class="section about-section gray-bg" id="about">
            <div class="container">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-lg-6">
                        <div class="about-text go-to">
                            <h3 class="dark-color">About Me</h3>
                            <h6 class="theme-color lead">A Lead UX &amp; UI designer based in Canada</h6>
                            <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                           
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-avatar">
                            <img src={logo} title="" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="counter">
                    <div class="row">
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2" data-to="500" data-speed="500">500</h6>
                                <p class="m-0px font-w-600">Happy Clients</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2" data-to="150" data-speed="150">150</h6>
                                <p class="m-0px font-w-600">Project Completed</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2" data-to="850" data-speed="850">850</h6>
                                <p class="m-0px font-w-600">Photo Capture</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2" data-to="190" data-speed="190">190</h6>
                                <p class="m-0px font-w-600">Telephonic Talk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



      <div class="container">
<div class="main-timeline">
                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month">2 Years</span>
                                    <span class="year">2013</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title">Visual Art &amp; Design</h5>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                                </p>
                            </div>
                        </div>
                        
                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month">1 Years</span>
                                    <span class="year">2015</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title">Product Designer</h5>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                                </p>
                            </div>
                        </div>
                        
                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month">2 Years</span>
                                    <span class="year">2016</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title">Web Designer</h5>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                                </p>
                            </div>
                        </div>
                        
                        <div class="timeline">
                            <div class="icon"></div>
                            <div class="date-content">
                                <div class="date-outer">
                                    <span class="date">
                                            <span class="month">2 Years</span>
                                    <span class="year">2018</span>
                                    </span>
                                </div>
                            </div>
                            <div class="timeline-content">
                                <h5 class="title">Graphic Designer</h5>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                                </p>
                            </div>
                        </div>
                       

                    </div>
</div>
    </div>
  )
}

export default About