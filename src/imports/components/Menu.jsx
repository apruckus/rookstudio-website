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
                    scrollTo: true,
                    name: 'Projects',
                    url: '/projects'
                },
                {
                    ext: true,
                    newTab: true,
                    name: 'Blog',
                    url: 'https://medium.com/@amal.paul'
                },
                {
                    name: 'About us',
                    url: '/about-us'
                },
                {
                    ext: true,
                    name: 'Contact',
                    url: 'mailto:contact@rookstudio.co'
                }
            ]
        }
        
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu( item ){
        this.setState({
            menuOpen: !this.state.menuOpen
        }, () => {
            if( item.scrollTo ) {
                this.props.scrollTo( item.url );
           }
        })
    }

    render() {
        return (
            <div className={"menuWrapper columns " + (this.state.menuOpen ? " menu-open" : "")}>
                <a href='/' className="logoWrapper">
                    <img src="/build/images/logo_white.png" />
                </a>
                <div id="menuBackground" className="menuBackground" ></div>
              
                        <div className="menuFullscreen">
                             <div className="menuFullscreen-background" ></div>
                            <ul className="col-12 abs-center-center">
                                {this.state.links.map((item,index) => {
                                    if(item.ext){
                                        return (
                                            <li key={index}>
                                                <a href={item.url} target={item.newTab ? '_blank' : '_self'} onClick={() => {
                                                    this.toggleMenu( item );
                                                }}>
                                                    <h1>{item.name}</h1>
                                                </a>
                                            </li>
                                        )
                                    }else{
                                        return (
                                            <li key={index}>
                                                <Link to={item.url} onClick={() => {
                                                    this.toggleMenu( item );
                                                }}>
                                                    <h1>{item.name}</h1>
                                                </Link>
                                            </li>
                                        )
                                    }
                                    
                                })}
                            </ul>
                        </div>
                  
                        
                <button className="menu-btn" onClick={this.toggleMenu}>
                    Menu
                    <div className="menuIcon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        );
    }
}