import React from 'react';
import '../../styles/ui/home.less';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Herosection from '../../imports/components/HeroSection.jsx';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';


export default class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            projects: [
                {
                    title: 'HomeVue',
                    oversize: true,
                    shortDescription: 'HomeVue(HV) is a business that is ensuring that the home buying process for potential home buyers is as seamless as possible.',
                    description: (
                        <div>
                            <p>HomeVue(HV) is a business that is ensuring that the home buying process for potential home buyers is as seamless as possible.</p>
                            <p>The brief was to create a platform that will illustrate to the potential homebuyer their closest mortgage broker and conveyancer and enable them with complete transparency on the purchase of their house. This meant integration of APIs into the 3rd party systems as well as creating our own platform to ensure all parties can communicate with one another.</p>
                            <p>From the UI/UX, API integration to the messaging system we delivered a complete bespoke solution. Built on ReactJS ensures that the web application is a hybrid solution that works on all operating systems and works seamlessly on mobile.</p>
                        </div>
                    ),
                    url: 'homevue'
                },
                {
                    title: 'Vleep',
                    oversize: true,
                    shortDescription: 'Vleep is a business that enables medical practitioners to communicate with one another and create patient records in a secure and closed environment through a messaging platform.',
                    description: (
                        <div>
                            <p>Vleep is a business that enables medical practitioners to communicate with one another and create patient records in a secure and closed environment through a messaging platform.</p>
                            <p>The brief was to create an application where photos could be taken, edited and used to start a conversation with other medical professionals however, these photos couldn't be stored in the photos file in the smart phone so as to adhere to privacy laws. In addition to this, we had to create the template for patient details to be captured and then present in a PDF to be sent to external programs.</p>
                            <p>From working on the UX/UI to ensure that the journey was simple and intuitive, to ensure that we met the unique requirements of where the data was to be stored to having a seamless messaging service we did it all. We built the mobile application on React Native since Vleep is exclusively a mobile application that still can utilise the camera and other functionalities on the smart phone more efficiently.</p>
                        </div>
                    ),
                    url: 'vleep'
                },
                {
                    title: 'uPaged',
                    oversize: true,
                    shortDescription: 'uPaged is a business that facilitates hospitals to hire medical practitioners to fill in shifts where they are understaffed.',
                    description: (
                        <div>
                            <p>uPaged is a business that facilitates hospitals to hire medical practitioners to fill in shifts where they are understaffed.</p>
                            <p>The brief was to create a two sided marketplace with two very unique platforms. This meant that we had to capture information on both the practitioner and the hospital and cross reference the information to show the practitioner the jobs they will be well suited for that met their criteria and for hospitals to be given a workforce that met their standards. Additionally, the platforms enable both parties to message each other and the practitioner gets paid for their work through the platform.</p>
                            <p>From the UI/UX, the creation of the database and security for the abundance of data we are storing and the messaging system, we created both sides of this platform. Built on both ReactJS and React Native, to ensure that it the solution can be used as a web application and as a stand alone mobile app so that practitioners can find shifts from the comfort of their smart phone.</p>
                        </div>
                    ),
                    url: 'upaged'
                }
            ]
        }
    }

    componentDidMount() {
        if (this.props.route === '/projects') {
            setTimeout(() => {
                this.props.scrollTo('projects');
            }, 1)
        }
    }

    render() {
        let projectUrl = this.props.route.split('/')[2];
        if (!projectUrl) {
            return (
                <div className="Home page columns">
                    <div className="column col-12 heroSection">
                        <div className="abs-left-bottom" >
                            <img className="text-animate col-12" src="/build/images/home/hero_background.png" style={{ 'maxWidth': '500px', 'animationDuration': '6s' }} />
                        </div>
                        <div className="abs-left-center heroText">
                                <h1>
                                    <span className="text-animate" style={{ "animationDelay": '.5s' }}>We make</span>
                                    <span className="text-animate" style={{ "animationDelay": '1s' }}>rooking</span>
                                    <span className="text-animate" style={{ "animationDelay": '1.5s' }}>good stuff</span>
                                </h1>
                                <h6>
                                    <span className="text-animate" style={{ "animationDelay": '2.5s' }}>Your problems.</span>
                                    <span className="text-animate margin-left-20" style={{ "animationDelay": '3.5s' }}>Our magic</span>
                                </h6>
                        </div>
                    </div>
                    <div id="projects" className="column col-12 projectSection">
                        <h2 className="text-primary" data-aos="skew-tranition">Projects</h2>
                        <div className="columns">
                            {this.state.projects.map((project, index) => {
                                let isEven = index % 2 == 0;
                                return (
                                    <div key={index} className="project column col-12">

                                        {isEven ?
                                            <div className="columns">
                                                <div className="column col-6 padding-right-80">
                                                    <h2>{project.title}</h2>
                                                    <p>{project.shortDescription}</p>
                                                    <Link to={'/projects/' + project.url}>
                                                        <button className="btn btn-primary margin-top-40">
                                                            View Project
                                                            </button>
                                                    </Link>
                                                </div>
                                                <div className="rel column col-6 imageSection">
                                                    <ParallaxBanner className={`abs-right-center imageBackground ${ project.oversize ? 'parrallaxBanner-100-right' : '' }`}
                                                        layers={[
                                                            {
                                                                image: 'build/images/projects/' + project.url + '/cover-back.jpg',
                                                                amount: 0.1,
                                                                slowerScrollRate: false,
                                                            },
                                                            {
                                                                image: 'build/images/projects/' + project.url + '/cover-front.png',
                                                                amount: 0.5,
                                                                slowerScrollRate: false,
                                                            },

                                                        ]}/>
                                                </div>
                                            </div>
                                            :
                                            <div className="columns">
                                                <div className="rel column col-6 imageSection even">
                                                    <ParallaxBanner className={`abs-left-center imageBackground ${ project.oversize ? 'parrallaxBanner-100-left' : '' }`}
                                                        layers={[
                                                            {
                                                                image: 'build/images/projects/' + project.url + '/cover-back.jpg',
                                                                amount: 0.1,
                                                                slowerScrollRate: false,
                                                            },

                                                            {
                                                                image: 'build/images/projects/' + project.url + '/cover-front.png',
                                                                amount: 0.5,
                                                                slowerScrollRate: false,
                                                            },
                                                        ]}/>
                                                </div>
                                                <div className="column col-6 padding-left-80">
                                                    <h2>{project.title}</h2>
                                                    <p>{project.shortDescription}</p>
                                                    <Link to={'/projects/' + project.url}>
                                                        <button className="btn btn-primary margin-top-40">
                                                            View Project
                                                            </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            })}

                        </div>
                        <div className="columns hireUsSection">
                            <div className="column col-6" style={{ 'backgroundImage': 'url(/build/images/projects/hire.jpg)' }}>
                                <h4>Your next project?</h4>
                            </div>
                            <div className="rel column col-6">
                                <div className="text-center abs-center-center col-10">
                                    <h4><b>Let’s make something truly awesome.</b></h4>
                                    <a href="mailto:contact@rookstudio.co">
                                        <button className="btn btn-primary btn-white margin-top-20">Talk to us</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            let project = _.find(this.state.projects, (item) => {
                return item.url === projectUrl
            });
            return (
                <div className="Home page columns">
                    <div className="column col-12 projectSection">
                        <div className="project" style={{ 'margin': '0px' }}>
                            <div className="columns">
                                <div className="column col-6 padding-right-80">
                                    <h1 className="text-primary" >{project.title}</h1>
                                    {project.description}
                                </div>
                                <div className="rel column col-6 imageSection">
                                    <div className="abs-right-center imageBackground" style={{ 'backgroundImage': 'url(/build/images/projects/' + project.url + '/cover-back.jpg)' }}>
                                        <img className="abs-left-center " src={'/build/images/projects/' + project.url + '/cover-front.png'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
}