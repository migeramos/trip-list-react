import React, {Component} from "react";
import HeaderComponent from "./HeaderComponent";
import DataComponent from "./DataComponent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ItemComponent from "./ItemComponent";
import FooterComponent from "./FooterComponent";

class TripListApp extends Component{
    render(){
        return(
            <div className="TropListApp">
                <Router>
                    <>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/items/:id" component={ItemComponent}/>
                        <Route component={DataComponent}/>
                    </Switch>
                    <FooterComponent/>
                    </>
                </Router>
            </div>
        );
    }
}

export default TripListApp;