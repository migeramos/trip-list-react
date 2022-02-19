import React, {Component} from "react";

class HeaderComponent extends Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-static-top">
                    <div><h1 className="navbar-brand">Oaxaca Friends Trip</h1></div>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent;