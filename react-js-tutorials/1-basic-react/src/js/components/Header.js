import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {

    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle2(title);
    }

    render() {

        //this.props.changeTitle("newTitle");
        console.log(this.props);
        return (
            <div>

                <Title title={this.props.title} />
                <input value={this.props.title} onChange={this.handleChange.bind(this) } />
                    
            </div>
        );
    }
}