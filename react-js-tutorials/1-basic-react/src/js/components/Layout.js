import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {

    // constructor() {
    //     super();
    //     //this.state = {name: "Saravan"};

    // }

    constructor() {
        super();
        this.state = {
            title: "Welcome"
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        // setTimeout(() => {
        //     this.setState({name:"sorna"});
        // }, 10000);
            //  {this.state.name}
        // setTimeout(() => {
        //     this.setState({title: "saravanan"});
        // }, 3000);
        const title = "Welcome saravan";
        return (
            <div>
            <Header changeTitle2={this.changeTitle.bind(this)} title={this.state.title} />


            <Footer />

            </div>
        );
    }
}