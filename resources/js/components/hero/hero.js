import React, { Component } from "react";
import Link from "next/link";
import $ from "jquery";
// COMPONENTS
import Card from "../card/card";

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { people: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert("An essay was submitted: " + this.state.value);
        event.preventDefault();
    }

    componentDidMount() {
        console.log(this.props);

        const url = `http://127.0.0.1:8000/api/people`;

        this.props.planet_zip ? url = `http://127.0.0.1:8000/api/people/location/${this.props.planet_zip}` : url;

        $.ajax({
            url: url
        }).done(response => {
            const { data } = response;
            data.forEach(function(obj) {
                obj.key = obj.id;
            });
            this.setState({
                people: data
            });
        });
    }

    render() {
        return (
            <div>
                <div className="ui basic segment">
                    <h1 className="ui header">Hero Results</h1>
                </div>
                <div className="ui divider"></div>
                <div className="ui basic segment">
                <div className="ui three column stackable centered aligned grid">
                        {this.state.people.map(person => (
                            <Card {...person} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
