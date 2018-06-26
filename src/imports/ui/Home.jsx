import React from 'react';
import '../../styles/ui/home.less';

import Herosection from '../../imports/components/HeroSection.jsx';

export default class Home extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            projects: [
                {
                    title: 'HomeVue',
                    description: 'Audio player software is used to play back sound recordings in one of the many formats available for computers today.',
                    url: 'homevue'
                },
                {
                    title: 'Vleep',
                    description: 'Audio player software is used to play back sound recordings in one of the many formats available for computers today.',
                    url: 'vleep'
                },
                {
                    title: 'uPaged',
                    description: 'Audio player software is used to play back sound recordings in one of the many formats available for computers today.',
                    url: 'upaged'
                }
            ]
        }
    }

    render() {

        return (
            <div className="Home page columns">
                <div className="column col-12 heroSection">
                    <img className="abs-left-bottom col-12" src="./build/images/home/hero_background.png" style={{ 'maxWidth' : '500px' }} />
                    <div className="abs-left-center heroText">
                        <h1>We make rooking good stuff</h1>
                        <h6>Your problems. Our magic</h6>
                    </div>
                </div>
                <div className="column col-12 projectSection">
                    <h2 className="text-primary">Projects</h2>
                    <div className="columns">
                        {this.state.projects.map(( project, index ) => {
                            let isEven = index % 2 == 0;
                            return (
                                <div key={ index } className="project column col-12">
                                    
                                        { isEven ? 
                                            <div className="columns">
                                                <div className="column col-6 padding-right-80">
                                                    <h4>{project.title}</h4>
                                                    <p>{project.description}</p>
                                                    <button className="btn btn-primary">
                                                        View Project
                                                    </button>
                                                </div>
                                                <div className="rel column col-6 imageSection">
                                                    <div className="abs-right-center imageBackground" style={{ 'backgroundImage' : 'url(./build/images/projects/' + project.url + '/cover-back.jpg)'}}>
                                                        <img className="abs-left-center " src={'./build/images/projects/' + project.url + '/cover-front.png'} />
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className="columns">
                                                <div className="rel column col-6 imageSection even">
                                                    <div className="abs-left-center imageBackground" style={{ 'backgroundImage' : 'url(./build/images/projects/' + project.url + '/cover-back.jpg)'}}>
                                                        <img className="abs-right-center " src={'./build/images/projects/' + project.url + '/cover-front.png'} />
                                                    </div>
                                                </div>
                                                <div className="column col-6 padding-left-80">
                                                    <h4>{project.title}</h4>
                                                    <p>{project.description}</p>
                                                    <button className="btn btn-primary">
                                                        View Project
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                </div>
                            )
                        })}
                       
                    </div>
                    <div className="columns hireUsSection">
                        <div className="column col-6" style={{ 'backgroundImage' : 'url(./build/images/projects/hire.jpg)' }}>
                            <h4>Your next project?</h4>
                        </div>
                        <div className="rel column col-6">
                            <div className="text-center abs-center-center col-10">
                                <h4><b>Let’s make something truly awesome.</b></h4>
                                <button className="btn btn-primary btn-white margin-top-20">Talk to us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}