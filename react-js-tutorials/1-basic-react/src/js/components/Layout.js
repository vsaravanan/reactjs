import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {

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

        const title = "Welcome saravan";
        return (
            <div>
            <Header changeTitle2={this.changeTitle.bind(this)} title={this.state.title} />


            <Footer />

            </div>
        );
    }
}