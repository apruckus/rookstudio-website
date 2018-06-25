import React from 'react';
import '../../styles/components/heroSection.less';

export default class HeroSection extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            menuOpen: false
        }
    }

    componentDidMount(){
        let range = 200;
        document.getElementById('menuBackground').style.opacity = 0;
        window.onscroll = () => {
            this.refs.scrollImage.style.transform = 'translateY(' +  window.pageYOffset * .3 + 'px)';
            let scrollTop = window.pageYOffset;
            let height = this.refs.heroImage.clientHeight;
            let offset = height / 2;
            let calc = 1 - (scrollTop - offset + range) / range;
            this.refs.scrollImage.style.opacity = calc;

            document.getElementById('menuBackground').style.opacity = (scrollTop - (height - 300) + range) / range - 1;
        }
    }


    render() {
        return (
            <div ref="heroImage" className="heroSection column col-12 rel">
                {(() => {
                    if(this.props.background){
                        return (
                            <div ref="scrollImage" className="scrollImage" style={{'backgroundImage':'url(' + this.props.background + ')'}}></div>
                        )
                    }
               })()}
                <div className="heroSection-details">
                    {this.props.children}
                </div>
            </div>
        );
    }
}