import React from 'react';
import '../../styles/ui/aboutUs.less';
import { Link } from 'react-router-dom'

import Herosection from '../../imports/components/HeroSection.jsx';

export default class Home extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
           
        }
    }


    render() {

        return (
            <div className="AboutUs page columns">
                <div className="column col-12 projectSection">
                    <div className="columns">
                        <div className="column col-6 col-md-12">
                            <h1 className="text-primary" >About us</h1>
                            <p>At Rook Studios we create software.</p>
                            <p>From customer management tools, mobile applications, augmented reality and programs utilising machine learning components we build build software big or small.</p>
                            <p>Our software products are aesthetic, efficient and most of all functional. </p>
                            <p>We understand that digital is one piece of a client's business, so out talented in-house team enables us to be focused on the client's bigger picture whilst delivering solutions that address the finer details.</p>
                            <p>We are meticulous in the way we deliver our projects and we are driven by adding the most amount of value for our clients and in return their customers. We've found that this is where the magic lies.</p>
                        </div>
                        <div className="column col-6 col-md-12">
                            
                        </div>
                    </div>

                    <div className="columns margin-top-80">
                        <div className="column col-6 col-md-12">
                            
                        </div>
                        <div className="column col-6 col-md-12">
                            <h1 className="text-primary margin-top-40" >Our Work</h1>
                            <p>Our work has spanned across many different industries. From creating software platforms for startups that service government agencies and the largest real estate firms in the Asia Pacific region to universities that are experimenting with new health tech solutions to help reduce at risk pregnancies and ASX listed companies be on the forefront of digital solutions through their devices we are doing all that we can to add our piece of magic to help solve their problems.</p>
                            <p>Take a look below to see what we've been working on these last few months.</p>
                        </div>
                    </div>

                    <div className="columns margin-top-80">
                        <div className="column col-6 col-md-12">
                            <h1 className="text-primary margin-top-40" >What we do</h1>
                            <p>At Rook Studios we create software. From inception to delivery and implementation we take care of it all. From the UX/UI to ensuring your product is beautiful and practical to implementing a digital marketing strategy to ensuring it gets the traction it needs, we have it covered.</p> 
                            <p>From customer management tools, mobile applications, augmented reality and programs utilising machine learning components we build build software big or small using the most up to date technology.</p>
                            <p>Our software products are aesthetic, efficient and most of all functional.</p> 
                            <p>We understand that digital is one piece of a client's business, so out talented in-house team enables us to be focused on the client's bigger picture whilst delivering solutions that address the finer details.</p>
                            <p>We are meticulous in the way we deliver our projects and we are driven by adding the most amount of value for our clients and in return their customers. We've found that this is where the magic lies.</p>
                        </div>
                        <div className="column col-6 col-md-12">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}