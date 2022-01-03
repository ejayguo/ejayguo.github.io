import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import CardItem from '../CardItem';

import './Grid.css';
import './Project.css';

export default function Project() {
    var interval_carousel_craniorate = 3000;
    var interval_carousel_utm = 4000;
    var interval_carousel_KB = 7000;

    return (
        
        <section id="project">
            <div className="row research">
                <h1 className="title">Research</h1>
            </div>

            <div className="row item research">
                <div className="eight columns">
                    <div className="name">
                        <h3>Training Data Reconstruction from Black-box Models</h3>
                    </div>
                    <div className="desc">
                        <p className="info">
                        I partially reconstructed training data of a neural network trained on the MNIST dataset. The reconstruction process is data-free in black-box settings. The key idea was to distinguish data solely via labels and reconstruct data by searching the feature space. The project proved that neural networks remembered training data distribution internally and operated on their memories. In addition, this technique could be utilized for information querying or data/model stealing.
                        </p>
                    </div>
                </div>
                <div className="four columns">
                    <video className="demo-spark" src='/videos/demo_spark.mp4' autoPlay loop muted/>
                </div>
                <div className="tech">
                    <h5>
                        <span class="badge badge-dl">Deep Learning</span>
                        <span class="badge badge-ml">Machine Learning</span>
                        <span class="badge badge-cv">Computer Vision</span>
                        <span class="badge badge-imgproc">Image Processing</span>
                        <span class="badge badge-mlsec">ML Security</span>
                        <span class="badge badge-python">Python</span>
                    </h5>
                </div>
            </div>

            <div className="row item research">
                <div className="eight columns">
                    <div className="name">
                        <h3>Shape Anomaly Analysis</h3>
                    </div>
                    <div className="desc">
                        <p className="info">
                        In this project, I have two roles: Machine Learning Engineer and Full-Stack Developer.
                        </p>
                        {/* <p className="info">
                        Machine Learning Engineer
                        </p> */}
                        <p className="info">
                        I created the machine learning pipeline and cooperated with PhDs to integrate their ML models of different phases into the pipeline, including image registrations, 3D modeling, anomaly detections and deformation visualizations.
                        </p>
                        {/* <p className="info">
                        Full-Stack Developer
                        </p> */}
                        <p className="info">
                        I individually built the entire web platform for physicians to upload, label and review patient skulls and metopic scores/ratings. I used Angular for frontend, .Net CORE for backend, MongoDB for database and Auth0 for user management. All major web services were deployed on AWS. After experimenting Serverless, Docker and Sagemaker, the ML service was decided being hosted on a Flask server.
                        </p>
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
                <div className="tech">
                    <h5>
                        <span class="badge badge-dl">Deep Learning</span>
                        <span class="badge badge-ml">Machine Learning</span>
                        <span class="badge badge-cg">Computer Graphics</span>
                        <span class="badge badge-imgproc">Image Processing</span>
                        <span class="badge badge-vis">Visualization</span>
                        <span class="badge badge-web">Web</span>
                        <span class="badge badge-html">HTML</span>
                        <span class="badge badge-bootstrap">Bootstrap</span>
                        <span class="badge badge-aws">AWS</span>
                        <span class="badge badge-mlmed">Medical</span>
                        <span class="badge badge-python">Python</span>
                        <span class="badge badge-typescript">Typescript</span>
                        <span class="badge badge-csharp">C#</span>
                    </h5>
                </div>
            </div>

            <div className="row item research">
                <div className="eight columns">
                    <div className="name">
                        <h3>UAV Traffic Management (UTM)</h3>
                    </div>
                    <div className="desc">
                        <p className="info">
                        I coded our deconfliction algorithm in C to schedule UAV flights in the UAV network. The optimization problem was to avoid collisions of UAVs while maximize the network throughput, i.e. schedule and complete flights as many as possible while fly UAVs as fast and safe as possible.
                        </p>
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
                <div className="tech">
                    <h5>
                        <span class="badge badge-ml">Machine Learning</span>
                        <span class="badge badge-opt">Optimization</span>
                        <span class="badge badge-cv">Computer Vision</span>
                        <span class="badge badge-imgproc">Image Processing</span>
                        <span class="badge badge-mlrob">Robotics</span>
                        <span class="badge badge-cpp">C++</span>
                    </h5>
                </div>
            </div>

            <div className="row item research">
                <div className="eight columns">
                    <div className="name">
                        <h3>Probabilistic Knowledge Base and Object Detection</h3>
                    </div>
                    <div className="desc">
                        <p className="info">
                        I personally built an automated system to identify and record videos with single object moving in the scene. Therefore, I could label video frames in batches and create our own dataset easily. Later, we implemented a decision tree from that image dataset and converted that dataset to a probabilistic knowledge base. Using our optimization algorithm, this probabilistic knowledge base could provide query result with probability and reasoning with the same accuracy as the original decision tree.
                        </p>
                    </div>
                </div>
                <div className="four columns">
                    <Carousel className="carousel_KB">
                        <Carousel.Item interval={interval_carousel_KB}>
                            <img className="d-block w-100" src="/images/KB1.png" alt="One"/>
                        </Carousel.Item>
                        <Carousel.Item interval={interval_carousel_KB}>
                            <img className="d-block w-100" src="/images/KB2.png" alt="Two"/>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="tech">
                    <h5>
                        <span class="badge badge-ml">Machine Learning</span>
                        <span class="badge badge-krr">Knowledge Representation & Reasoning</span>
                        <span class="badge badge-cv">Computer Vision</span>
                        <span class="badge badge-imgproc">Image Processing</span>
                        <span class="badge badge-mlrob">Robotics</span>
                        <span class="badge badge-python">Python</span>
                    </h5>
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
                            <CardItem src='/images/game1.png'
                                text='Mobile, Computer Graphics, Gameplay, C++'
                                label='Card Game'
                            />
                            <CardItem
                                src='/images/game2.jpg'
                                text='PC, Computer Graphics, Unity, Gameplay, C#'
                                label='FPS'
                            />
                            <CardItem
                                src='/images/game3.jpg'
                                text='Mobile, Gameplay, C++'
                                label='STG'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}


