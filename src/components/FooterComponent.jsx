import React, {Component} from "react";

class FooterComponent extends Component{
    render(){
        return(
            <div>
                <footer className="bg-light text-center text-lg-start ">
                    <div className="text-center p-3">
                        © 2022 Copyright:
                        <a className="text-dark" href="https://github.com/migeramos">Miguel Ramos Repos SA. de CV.</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;