import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import AOS from 'aos';
import 'aos/dist/aos.css'

import Home from '../src/imports/ui/Home.jsx';
import AboutUs from '../src/imports/ui/AboutUs.jsx';
import Menu from '../src/imports/components/Menu.jsx';
import Footer from '../src/imports/components/Footer.jsx';

let skewScroll;

class App extends React.Component {
	constructor(props, context) {
        AOS.init();                
		super(props, context);
        this.state = {
            redirect: '',
            prevLocation:'/',
            scrollPos: 0,
            skewY: 0,
        }
        this.changePage = this.changePage.bind(this);
        this.scrollTo = this.scrollTo.bind(this);
        // this.onScroll = this.onScroll.bind(this);
    }

    // componentDidMount() {
    //     window.addEventListener('scroll',this.onScroll);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll',this.onScroll);
    // }
    
    // onScroll() {
    //     console.log( this.state.scrollPos - document.body.scrollTop / 1000 );
    //     clearTimeout(skewScroll);
    //     this.setState({
    //         skewY: Math.abs(this.state.scrollPos - document.body.scrollTop / 1000)
    //     }, () => {
    //         skewScroll = setTimeout(() => {
    //             this.setState({
    //                 scrollPos: document.body.scrollTop / 1000,
    //                 skewY: 0
    //             })
    //         }, 1);
    //     })
    // }

    changePage(path) {
        this.setState({
            redirect: path
        });
    }

    scrollTo( url ) {
            window.scrollTo({
                top: document.getElementById(url.replace('/','')).offsetTop - 70,
                behavior: "smooth"
            });
    }
	
	render() {
        let route = this.props.location.pathname;
        let redirect = this.state.redirect;
        if (redirect && redirect !== route) {
            return (
                <Redirect to={redirect}/>
            )
        }

        if (route !== this.state.prevLocation) {
            window.scrollTo(0, 0)
            this.state.prevLocation = route;
          }
          console.log( route )
        return (
            <ParallaxProvider ref="parallaxController">
                <div className="container">
                    {(() => {
                        switch (route) {
                            case '/':  case '/projects': default:
                                return (
                                    <Home route={route} scrollTo={this.scrollTo} />
                                );
                            case '/about-us':
                                return (
                                    <AboutUs route={route} />
                                )
                        }
                    })()}
                    <Menu scrollTo={this.scrollTo} />
                    <Footer />
                </div>
            </ParallaxProvider>
        );
	}
}

//Router
render(
    <Router basename="/">
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/projects" component={App}/>
                <Route path="/projects/:id" component={App}/>
                <Route exact path="/about-us" component={App}/>

                {/* Main Pages */}
    test
                {/* 404 Error */}
                {/* <Route component={NotFound}/> */}
            </Switch>
        </div>
	</Router>,
    document.getElementById('app')
);