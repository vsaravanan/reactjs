/**
 * Created by Saravanan on 7/1/2017.
 */

import React from "react";


export class Home extends React.Component {

    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
    }

    inc() {
        this.setState({
           age: this.state.age + 3
        }); 
        //this.age += 3;
        //console.log(this.age);
    }

    onChangeLink() {
    	this.props.changeLink(this.state.homeLink); 
    }

    onHandleChange(event) {
    	this.setState({
    		homeLink: event.target.value
    	});

    }

    render() {
    		console.log(this.props);
        const {name} = this.props;
        const {user} = this.props;
        //const {a} = params;
        //const {b} = query;

        return (
            <div>
                <p>home component</p>

                <p>Your name is {name}, your age is {this.state.age} </p>
                <p>Status: {this.state.status}</p>

                <button onClick={() => this.inc()} class="btn btn-primary">Increment </button>
                <button onClick={this.props.greet} class="btn btn-primary">Greet </button>
                <hr/>
                <input type="text" value={this.state.homeLink} 
                									onChange={this.onHandleChange.bind(this)} />
								<button onClick={this.onChangeLink.bind(this)} class="btn btn-primary">Change Header Link </button>
            </div>

        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func,
    initialLinkName: React.PropTypes.string,


    //user: React.PropTypes.object,
    //children: React.PropTypes.element.isRequired

    // <p>User object => {user.name} {}</p>
    // <div>
    //     <h4>Hobbies</h4>
    //     <ul>
    //         {user.hobbies.map((hobby, i) => <li key={i}> {hobby}</li>)}
    //     </ul>
    //     <hr/>
    //     {this.props.children}
    // </div>

    //                <button onClick={() => this.onChangeLink()} class="btn btn-primary">Change Header Link </button>

};