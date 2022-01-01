import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import CardItem from '../CardItem';

import './Grid.css';
import './Project.css';

export default function Project() {
    var interval_carousel_craniorate = 3000;
    var interval_carousel_utm = 4000;

    return (
        
        <section id="project">
            <div className="row research">
                <h1 className="title">Research</h1>
            </div>

            <div className="row item research">
                <div className="eight columns">
                    <div className="name">
                        <h3>Training Data Reconstruction/Stealing</h3>
                    </div>
                    <div className="desc">
                        <p className="info">TEST PROJECT DESCRIPTION</p>
                    </div>
                    <div className="tech">
                        <h5>
                            <span class="badge badge-dl">Deep Learning</span>
                            <span class="badge badge-ml">Machine Learning</span>
                            <span class="badge badge-cv">Computer Vision</span>
                            <span class="badge badge-imgproc">Image Processing</span>
                            <span class="badge badge-mlsec">Security</span>
                            <span class="badge badge-python">Python</span>
                        </h5>
                    </div>
                </div>
                <div className="four columns">
                    <video className="demo-spark" src='/videos/demo_spark.mp4' autoPlay loop muted/>
                </div>
            </div>

            <div className="row item research">
                <div className="eight columns">
                    <div className="name">
                        <h3>Deformation Analysis Project</h3>
                    </div>
                    <div className="desc">
                        <p className="info">TEST PROJECT DESCRIPTION</p>
                    </div>
                    <div className="tech">
                        <h5>
                            <span class="badge badge-dl">Deep Learning</span>
                            <span class="badge badge-ml">Machine Learning</span>
                            <span class="badge badge-cv">Computer Vision</span>
                            <span class="badge badge-imgproc">Image Processing</span>
                            <span class="badge badge-mlsec">Security</span>
                            <span class="badge badge-python">Python</span>
                        </h5>
                    </div>
                </div>
                <div className="four columns">
                    <Carousel className="carousel_craniorate">
                        <Carousel.Item interval={interval_carousel_craniorate}>
                            <img className="d-block w-100" src="/images/craniorate1.png" alt="One"/>
                        </Carousel.Item>
                        <Carousel.Item interval={interval_carousel_craniorate}>
                            <img className="d-block w-100" src="/images/craniorate2.png" alt="Two"/>
                        </Carousel.Item>
                        <Carousel.Item interval={interval_carousel_craniorate}>
                            <img className="d-block w-100" src="/images/craniorate3.png" alt="Three"/>
                        </Carousel.Item>
                        <Carousel.Item interval={interval_carousel_craniorate}>
                            <img className="d-block w-100" src="/images/craniorate4.png" alt="Four"/>
                        </Carousel.Item>
                        <Carousel.Item interval={interval_carousel_craniorate}>
                            <img className="d-block w-100" src="/images/craniorate5.png" alt="Five"/>
                        </Carousel.Item>
                        <Carousel.Item interval={interval_carousel_craniorate}>
                            <img className="d-block w-100" src="/images/craniorate6.png" alt="Six"/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div className="row item research">
                <div className="eight columns">
                    <div className="name">
                        <h3>UAV Traffic Management Project</h3>
                    </div>
                    <div className="desc">
                        <p className="info">TEST PROJECT DESCRIPTION</p>
                    </div>
                    <div className="tech">
                        <h5>
                            <span class="badge badge-dl">Deep Learning</span>
                            <span class="badge badge-ml">Machine Learning</span>
                            <span class="badge badge-cv">Computer Vision</span>
                            <span class="badge badge-imgproc">Image Processing</span>
                            <span class="badge badge-mlsec">Security</span>
                            <span class="badge badge-python">Python</span>
                        </h5>
                    </div>
                </div>
                <div className="four columns">
                    <Carousel className="carousel_utm">
                        <Carousel.Item interval={interval_carousel_utm}>
                            <img className="d-block w-100" src="/images/utm1.png" alt="One"/>
                        </Carousel.Item>
                        <Carousel.Item interval={interval_carousel_utm}>
                            <img className="d-block w-100" src="/images/utm2.png" alt="Two"/>
                        </Carousel.Item>
                        <Carousel.Item interval={interval_carousel_utm}>
                            <img className="d-block w-100" src="/images/utm3.png" alt="Three"/>
                        </Carousel.Item>
                        <Carousel.Item interval={interval_carousel_utm}>
                            <img className="d-block w-100" src="/images/utm4.png" alt="Four"/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

            <div className="row separator"></div>

            <div className="row game">
                <h1 className="title">Game</h1>
            </div>

            <div className="row item game">
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='/images/game1.png'
                                text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                                label='Mobile Card Game'
                            />
                            <CardItem
                                src='/images/game2.jpg'
                                text='Experience Football on Top of the Himilayan Mountains'
                                label='PC FPS'
                            />
                            <CardItem
                                src='/images/game3.jpg'
                                text='Ride through the Sahara Desert on a guided camel tour'
                                label='Mobile STG'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    
    );
}


