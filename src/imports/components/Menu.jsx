import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/components/menu.less';

export default class Menu extends React.Component {
    
    constructor(props, context) {
        super(props, context);
        this.state = {
            menuOpen: false,
            links: [
                {
                    name: 'Tell Your Employer',
                    url: '/tell-your-employer'
                },
                {
                    name: 'About Us',
                    url: '/about-us'
                },
                {
                    ext:true,
                    name: 'Blog',
                    url: 'http://growsuper.com/blog'
                },
                {
                    ext:true,
                    newTab:true,
                    name: 'FAQs',
                    url: 'https://intercom.help/growsuper/for-faqs-sake'
                },
                {
                    ext:true,
                    newTab:true,
                    name: 'Login',
                    url: 'http://app.growsuper.com/login'
                }
            ]
        }
        
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }


    render() {
        return (
            <div className={"menuWrapper columns " + (this.state.menuOpen ? " menu-open" : "")}>
                <a href='/' className="logoWrapper">
                    <img src="./build/images/logo_white.png" />
                </a>
                <div id="menuBackground" className="menuBackground" ></div>
                {/* <ul>
                    {this.state.links.map((item,index) => {
                        if(item.ext){
                            return (
                                <li key={index}>
                                    <a href={item.url} target={item.newTab ? '_blank' : '_self'} onClick={this.toggleMenu}>{item.name}</a>
                                </li>
                            )
                        }else{
                            return (
                                <li key={index}>
                                    <Link to={item.url} onClick={this.toggleMenu}>{item.name}</Link>
                                </li>
                            )
                        }
                        
                    })}
                </ul> */}

                {/* MOBILE MENU */}
                <div className="menu-overlay" onClick={this.toggleMenu}></div>
                <button className="menu-btn show-md" onClick={this.toggleMenu}>
                    <i className="material-icons">menu</i>
                </button>
            </div>
        );
    }
}