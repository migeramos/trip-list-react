import React, {Component} from "react";
import HeaderComponent from "./HeaderComponent";
import DataComponent from "./DataComponent";

class TripListApp extends Component{
    render(){
        return(
            <di>
                <HeaderComponent/>
                <DataComponent/>
            </di>
        );
    }
}

export default TripListApp;