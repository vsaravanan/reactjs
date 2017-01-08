/**
 * Created by Saravanan on 7/1/2017.
 */

import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import Bootstrap from "bootstrap-without-jquery";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            homeLink: "Home3"
        };
    }
    onGreet() {
        alert("Hello");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName 
        });
    }

    render() {

        var user = {
            name: "Anna",
            hobbies: ["Sports","Music"]
        };

        return (
            <div class="container" >
                <div class="row">
                    <div class="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-10 col-xs-offset-1">
                        <Home 
                            name={"Max"} 
                            initialAge={27} 
                            user={user} 
                            greet={this.onGreet}
                            changeLink={this.onChangeLinkName.bind(this)}
                            initialLinkName={this.state.homeLink}
                            >
                            <p>this is a paragraph</p>
                            <hr />
                        </Home>
                    </div>
                </div>
            </div>

            );


    }
}


const app = document.getElementById('app');

render(<App></App>, app);