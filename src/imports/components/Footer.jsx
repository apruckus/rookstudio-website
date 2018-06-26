import React from 'react';
import '../../styles/components/footer.less';
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
        }
    }

    render() {
        return (
            <div className="footerWrapper columns">
                <div className="column col-12 text-center">
                    <img src="./build/images/logo.png" />
                    <p className="margin-top-40">Let’s work together <a href="mailto:contact@rookstudio.co">contact@rookstudio.co</a></p>
                    <small>copyright Rook Studio 2018</small>

                </div>
            </div>
        );
    }
}