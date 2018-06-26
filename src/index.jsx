import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'

import Home from '../src/imports/ui/Home.jsx';
import Menu from '../src/imports/components/Menu.jsx';
import Footer from '../src/imports/components/Footer.jsx';

class App extends React.Component {
	constructor(props, context) {
        AOS.init();                
		super(props, context);
        this.state = {
            redirect: '',
            prevLocation:'/',
        }
        this.changePage = this.changePage.bind(this);
    }

    changePage(path) {
        this.setState({
            redirect: path
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

        return (
            <div className="container">
                {(() => {
                    switch (route) {
                        case '/': case '/home': default:
                            return (
                                <Home />
                            );
                    }
                })()}
                 <Menu />
                <Footer />
            </div>
        );
	}
}

//Router
render(
    <Router basename="/">
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                {/* Main Pages */}
    test
                {/* 404 Error */}
                {/* <Route component={NotFound}/> */}
            </Switch>
        </div>
	</Router>,
    document.getElementById('app')
);