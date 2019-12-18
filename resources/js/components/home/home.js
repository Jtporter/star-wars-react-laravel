import React, { Component } from "react";
// COMPONENTS
import Card from "../card/card";
// DATA
import people from "../../data/dummyData";

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { zip: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert("An essay was submitted: " + this.state.value);
        event.preventDefault();
    }

    isNumberKey(event) {
        console.log(event);
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
        return true;
    }

    render() {
        return (
            <div>
                <div className="ui basic segment">
                    <h1 className="ui header">Find a Star Wars Hero</h1>
                </div>
                <div className="ui center aligned segment">
                    <h3 className="ui header">
                        Find a Star Wars Hero near you!
                    </h3>
                    <form onSubmit={this.handleSubmit}>
                        <div className="ui action input">
                            <input
                                type="text"
                                placeholder="EX: 50392"
                                name="zip"
                                value={this.state.value}
                                onChange={this.handleChange}
                                pattern="\d*"
                                maxLength="5"
                                onKeyPress={this.isNumberKey}
                            ></input>
                            <button className="ui blue right labeled icon button">
                                <i className="search icon"></i>
                                Zip Code
                            </button>
                        </div>
                    </form>
                </div>
                <div className="ui divider"></div>
                <div className="ui basic segment">
                    <div className="ui three column stackable centered aligned grid">
                        {people.map(person => (
                            <Card {...person} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

// if (document.getElementById("root")) {
//     ReactDOM.render(<Layout />, document.getElementById("root"));
// }
