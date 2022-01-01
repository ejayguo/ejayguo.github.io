import React from "react";
// import '../../App.css';
import Button from 'react-bootstrap/Button';

export default function Introduction() {
    return (
        
        <>
        {/*<div id="tag-introduction">
            <h1 className="introduction">Introduction</h1>
            <Button variant="outline-primary">Resume</Button>
        </div>*/}
        <section id="tag-introduction" class="home-section wg-about">
            <div class="container">
                <div class="row" itemprop="author" itemscope itemtype="http://schema.org/Person" itemref="person-email">
                    <div class="col-12 col-lg-4">
                        <div id="profile">
                            <img class="portrait" src="/authors/admin/avatar_hu32caed0065c846fe869d7db23301e522_35339_250x250_fill_q90_lanczos_center.jpg" itemprop="image" alt="Avatar"/>
                                <div class="portrait-title">
                                    <h2 itemprop="name">Nikoloz Sirmpilatze</h2>
                                    <h3 itemprop="jobTitle">Postdoctoral Researcher</h3>
                                    <h3 itemprop="worksFor" itemscope itemtype="http://schema.org/Organization">
                                        <a href="https://www.dpz.eu" target="_blank" itemprop="url" rel="noopener">
                                            <span itemprop="name">German Primate Center</span>
                                        </a>
                                    </h3>
                                    <h3 itemprop="worksFor" itemscope itemtype="http://schema.org/Organization">
                                        <a href="https://www.gpneuro.uni-goettingen.de/" target="_blank" itemprop="url" rel="noopener">
                                            <span itemprop="name">IMPRS for Neurosciences</span>
                                        </a>
                                    </h3>
                                    <h3 itemprop="worksFor" itemscope itemtype="http://schema.org/Organization">
                                        <a href="http://www.uni-goettingen.de/" target="_blank" itemprop="url" rel="noopener">
                                            <span itemprop="name">University of Göttingen</span>
                                        </a>
                                    </h3>
                                </div>
                                <link itemprop="url" href="">
                                    <ul class="network-icon" aria-hidden="true">
                                        <li>
                                            <a itemprop="sameAs" href="https://twitter.com/niksirbi" target="_blank" rel="noopener">
                                                <i class="fab fa-twitter big-icon"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a itemprop="sameAs" href="https://scholar.google.com/citations?user=vGwoc7oAAAAJ&amp;hl=en" target="_blank" rel="noopener">
                                                <i class="ai ai-google-scholar big-icon"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a itemprop="sameAs" href="https://github.com/niksirbi" target="_blank" rel="noopener">
                                                <i class="fab fa-github big-icon"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </link>
                            </div>
                        <div class="col-12 col-lg-8" itemprop="description">
                            <h1>About me</h1>
                            <p>My name is Nikoloz (Niko) Sirmpilatze and I am a postdoctoral researcher at the <a href="https://www.dpz.eu/en/unit/functional-imaging-laboratory/about-us.html" target="_blank">Functional Imaging Lab</a> of the German Primate Center in Göttingen, Germany. My research focuses on the effects of anesthesia on brain function – a topic that I explore with neuroimaging techniques, including functional Magnetic Imaging (fMRI) and in vivo 2‐photon calcium imaging. I collect and analyze data from multiple mammalian species – including humans, various non‐human primates and rats. I am particularly interested in the neural activity patterns that arise across various depths of anesthesia, either spontaneously or in reaction to sensory stimulation. I am a strong proponent of open and collaborative science. In my free time I enjoy dancing to swing music and playing the saxophone.</p>
                            <div class="row">
                                <div class="col-md-5">
                                    <h3>Interests</h3>
                                    <ul class="ul-interests">
                                        <li>Neuroscience</li>
                                        <li>Neuroimaging</li>
                                        <li>Anesthesia</li>
                                        <li>Open science</li>
                                    </ul>
                                </div>
                                <div class="col-md-7">
                                    <h3>Education</h3>
                                    <ul class="ul-edu fa-ul">
                                        <li>
                                            <i class="fa-li fas fa-graduation-cap"></i>
                                            <div class="description">
                                                <p class="course">PhD in Neuroimaging, May 2017 - Sep 2021</p>
                                                <p class="institution">German Primate Center</p>
                                            </div>
                                        </li>
                                        <li>
                                            <i class="fa-li fas fa-graduation-cap"></i>
                                            <div class="description">
                                                <p class="course">MSc in Neuroscience, Sep 2015 - Apr 2017</p>
                                                <p class="institution">University of Göttingen</p>
                                            </div>
                                        </li>
                                        <li>
                                            <i class="fa-li fas fa-graduation-cap"></i>
                                            <div class="description">
                                                <p class="course">Medical Degree, Sep 2009 - Jul 2015</p>
                                                <p class="institution">Aristotle University of Thessaloniki</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>);
}