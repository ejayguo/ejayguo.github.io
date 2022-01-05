import React from "react";
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// import '../../App.css';
// import Button from 'react-bootstrap/Button';

import './Grid.css';
import './About.css';

import PDF_RESUME from '../Yijie(EJay)_Guo_Resume_v4.pdf';

export default function About() {
    // return (
    //     <>
    //     {/*<div id="tag-introduction">
    //         <h1 className="introduction">Introduction</h1>
    //         <Button variant="outline-primary">Resume</Button>
    //     </div>*/}
        
    //     </>);

    // if (!this.props.data) return null;

    // const name = "EJay Guo"; //this.props.data.name;
    // const profilepic = "ejay.jpg"; //"images/" + this.props.data.image;
    // const bio = "I am Yijie Guo. My friends call me EJay. I am currently a graduate student pursuing the Master of Science in Applied Computing (MScAC) degree at University of Toronto. I have three-year experience in machine learning and deep learning research, two-year experience in web development and two-year experience in game development. I am passionate towards innovative AI technologies, because they are capable of modeling complex digital and natural world constructed by web and smart devices. From my perspective, humans could evolve into the next stage by interpreting AIs’ optimal solutions and achieve greater success in science area. Currently, I am fascinated by the Graph Convolutional Networks (GCN), because it could model the real world and human society by its nature, representing most of relations in the world as a sparse graph. Hopefully, I could figure out some interesting applications utilizing GCN in the future."; //this.props.data.bio;
    // const street = "Bay"; //this.props.data.address.street;
    // const city = "SLC"; //this.props.data.address.city;
    // const state = "Utah"; //this.props.data.address.state;
    // const zip = "84102"; //this.props.data.address.zip;
    // const phone = "385-259-9327"; //this.props.data.phone;
    // const email = "ejay.guo@gmail.com"; //this.props.data.email;
    

    return (
      <section id="about">
        {/* <Fade duration={1000}> */}
          <div className="row">
            <div className="three columns">
                <img
                    className="profile-pic"
                    src="/images/ejay.jpg"
                    alt="Nordic Giant Profile Pic"
                />
            </div>

            <div className="nine columns main-col">
              <h2>Yijie (EJay) Guo</h2>
              <p>
              I am Yijie Guo. My friends call me EJay. I am currently a graduate student pursuing the Master of Science in Applied Computing (MScAC) degree at University of Toronto. I am passionate towards innovative AI technologies, because they are capable of modeling complex digital and natural world constructed by web and smart devices. Also, I am amazed by the Graph Convolutional Networks (GCN), because it could model the real world and human society by its nature, representing most of relations in the world as a sparse graph. Hopefully, I could figure out some interesting applications utilizing GCN in the future.
              </p>
              <p>
              I am obsessed by Formula 1 due to its ultimate partnership between humans and machines as they push for optimizations together. BTW, the 2021 season was insane and congrats to Max Verstappen.
              </p>
              <p>
              PS: I am not a fan of any social network and disable most of them. :)
              </p>
              <div className="row">
              <div className="columns interests">
                <h3>Interests</h3>
                <p>
                  &bull;<span> Artificial Intelligence</span>
                  <br/>
                  &bull;<span> Machine Learning</span>
                  <br/>
                  &bull;<span> Deep Learning</span>
                  <br/>
                  &bull;<span> Reinforcement Learning</span>
                  <br/>
                  &bull;<span> Computer Vision</span>
                  <br/>
                  &bull;<span> Computer Graphics</span>
                  <br/>
                  &bull;<span> Web & Game</span>
                </p>
                </div>
                <div className="columns contacts">
                  <h3>Contacts</h3>
                  <p className="address">
                    <span>EJay Guo</span>
                    <br/>
                    <span>385-259-9327</span>
                    <br/>
                    <span>ejay.guo@gmail.com</span>
                    <br/>

                    <a href={PDF_RESUME} target='_blank' rel="noreferrer" className="download">
                      <Button className="btn btn-download">Download Resume</Button>
                    </a>
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        {/* </Fade> */}
      </section>
    );
}