import React, {Component} from "react";

class FooterComponent extends Component{
    render(){
        return(
            <div>
                <footer class="bg-light text-center text-lg-start">
                    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                        © 2022 Copyright:
                        <a class="text-dark" href="https://github.com/migeramos">Miguel Ramos Repos SA. de CV.</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;