import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import PDF_RESUME from '../Resume_EJay_Guo.pdf';
// import '../../App.css';
// import Button from 'react-bootstrap/Button';

import './Grid.css';
import './About.css';


export default function About() {
    // return (
    //     <>
    //     {/*<div id="tag-introduction">
    //         <h1 className="introduction">Introduction</h1>
    //         <Button variant="outline-primary">Resume</Button>
    //     </div>*/}
        
    //     </>);

    // if (!this.props.data) return null;

    const name = "EJay Guo"; //this.props.data.name;
    const profilepic = "logo512.png"; //"images/" + this.props.data.image;
    const bio = "Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in. Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in."; //this.props.data.bio;
    const street = "Bay"; //this.props.data.address.street;
    const city = "SLC"; //this.props.data.address.city;
    const state = "Utah"; //this.props.data.address.state;
    const zip = "84102"; //this.props.data.address.zip;
    const phone = "385-259-9327"; //this.props.data.phone;
    const email = "ejay.guo@gmail.com"; //this.props.data.email;
    

    return (
      <section id="about">
        {/* <Fade duration={1000}> */}
          <div className="row">
            <div className="three columns">
                <img
                    className="profile-pic"
                    src={profilepic}
                    alt="Nordic Giant Profile Pic"
                />
            </div>
  
            <div className="nine columns main-col">
              <h2>Yijie (EJay) Guo</h2>

              <p>{bio}</p>
              <div className="row">
              <div className="columns interests">
                <h3>Interests</h3>
                  <p>
                    &bull;<span> Artificial Intelligence</span>
                    <br/>
                    &bull;<span> Deep Learning</span>
                    <br/>
                    &bull;<span> Reinforcement Learning</span>
                    <br/>
                    &bull;<span> Machine Learning</span>
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
                    <span>{name}</span>
                    <br/>
                    <span>{phone}</span>
                    <br/>
                    <span>{email}</span>
                    <br/>

                    <a href={PDF_RESUME} target='_blank' className="download">
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