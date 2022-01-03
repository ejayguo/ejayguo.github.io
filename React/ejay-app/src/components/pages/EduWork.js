import React from "react";
// import Slide from "react-reveal";
import './Grid.css';
import './EduWork.css';

export default function EduWork() {
    // if (!this.props.data) return null;

    // const skillmessage = "SKILL MESSAGE";

    // const education = function () {
    //   return (
    //     <div key="Shanghai University">
    //       <h3>Bachelor of Economics</h3>
    //       <p className="info">
    //       Bachelor of Economics <span>&bull;</span>
    //         <em className="date">May 2011</em>
    //       </p>
    //       <p>"TTTTEEEESSSSTTTT"</p>
    //     </div>
    //   );
    // };

    // const education = this.props.data.education.map(function (education) {
    //   return (
    //     <div key={education.school}>
    //       <h3>{education.school}</h3>
    //       <p className="info">
    //         {education.degree} <span>&bull;</span>
    //         <em className="date">{education.graduated}</em>
    //       </p>
    //       <p>{education.description}</p>
    //     </div>
    //   );
    // });

    // const work = this.props.data.work.map(function (work) {
    //   return (
    //     <div key={work.company}>
    //       <h3>{work.company}</h3>
    //       <p className="info">
    //         {work.title}
    //         <span>&bull;</span> <em className="date">{work.years}</em>
    //       </p>
    //       <p>{work.description}</p>
    //     </div>
    //   );
    // });

    // const skills = this.props.data.skills.map((skills) => {
    //   const backgroundColor = this.getRandomColor();
    //   const className = "bar-expand " + skills.name.toLowerCase();
    //   const width = skills.level;

    //   return (
    //     <li key={skills.name}>
    //       <span style={{ width, backgroundColor }} className={className}></span>
    //       <em>{skills.name}</em>
    //     </li>
    //   );
    // });

    return (
        <>
        {/* <div id="eduwork">
            <h1 className="education">EDUCATION</h1>
        </div> */}
            <section id="eduwork">
                <div className="row education">
                    <div className="three columns main-col">
                        <h1>
                            <span>Educations</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item school">
                            {/* <div className="one columns"></div> */}
                            <div className="eight columns">
                                <div key="University of Toronto">
                                    <h3>MSc in Applied Computing</h3>
                                    <p className="info">University of Toronto, Canada</p>
                                    <p className="info">Sept 2021 - Dec 2022</p>
                                    <p className="desc">The Vector Scholarship in Artificial Intelligence</p>
                                </div>
                            </div>
                            <div className="four columns div-logo">
                                <img className="logo-uoft-vi" src="/images/logo-uoft-vi.png" alt="logo uoft"/>
                            </div>
                        </div>

                        <div className="row item school">
                            {/* <div className="one columns"></div> */}
                            <div className="eight columns">
                                <div key="University of Utah">
                                    <h3>BSc in Computer Science</h3>
                                    <p className="info">University of Utah, USA</p>
                                    <p className="info">Jan 2016 - May 2019</p>
                                    <p className="desc">GPA 3.99 / 4.00, Graduated with Summa Cum Laude</p>
                                    <p className="desc">The Wilford and Dana Druk Scholarship</p>
                                </div>
                            </div>
                            <div className="four columns div-logo">
                                <img className="logo-utah" src="/images/logo-utah.png" alt="logo utah"/>
                            </div>
                        </div>

                        <div className="row item school">
                            {/* <div className="one columns"></div> */}
                            <div className="eight columns">
                                <div key="Shanghai University">
                                    <h3>BSc in Economics</h3>
                                    <p className="info">Shanghai University, China</p>
                                    <p className="info">Sept 2007 - May 2011</p>
                                </div>
                            </div>
                            <div className="four columns div-logo">
                                <img className="logo-shanghai" src="/images/logo-shanghai.png" alt="logo shanghai"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row separator"></div>

                <div className="row work">
                    <div className="three columns main-col">
                        <h1>
                            <span>Works</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item job">
                            {/* <div className="one columns"></div> */}
                            <div className="eight columns">
                                <div key="Research Assistant">
                                    <h3>Research Assistant</h3>
                                    <p className="info">University of Utah</p>
                                    <p className="info">May 2018 - June 2020</p>
                                    <p className="desc">
                                    I worked with a computer vision and knowledge representation & reasoning project, a deep learning anomaly detection medical project a UAV traffic management project. I worked all ends, from researching on machine learning algorithms to building automation systems and web applications.
                                    </p>
                                </div>
                            </div>
                            <div className="four columns">
                                <img className="logo-utah-sci" src="/images/logo-utah-sci.jpg" alt="logo utah-sci"/>
                            </div>
                        </div>

                        <div className="row item job">
                            {/* <div className="one columns"></div> */}
                            <div className="eight columns">
                                <div key="Senior Software Engineer">
                                    <h3>Senior Software Engineer</h3>
                                    <p className="info">Shanda Games: Immortal Studio</p>
                                    <p className="info">May 2013 - Apr 2015</p>
                                    <p className="desc">
                                    I coded several key features of our game engine, including graphics, AI and physics engine. In addition, I implemented the character, AI, combat, skill, guild, player interaction systems on two mobile game clients.
                                    </p>
                                </div>
                            </div>
                            <div className="four columns">
                            <img className="logo-shanda" src="/images/logo-shanda.png" alt="logo shanda"/>
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <p>{skillmessage}</p>

                        <div className="bars">
                            <ul className="skills">{skills}</ul>
                        </div>
                    </div>
                </div> */}
            </section>
        </>);
}

