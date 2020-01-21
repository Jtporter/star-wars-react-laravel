import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import Router from "next/router";
import $ from "jquery";
// COMPONENTS
import Card from "../card/card";

class HeroResults extends Component {
    constructor(props) {
        super(props);
        const {
            router: {
                query: { zip }
            }
        } = Router;
        let url = `http://127.0.0.1:8000/api/people`;
        zip === ""
            ? (url = `${url}/location/${this.state.zip}`)
            : url;

        this.state = { people: [], zip, message: "", url };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getPeopleByZip = this.getPeopleByZip.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert("An essay was submitted: " + this.state.value);
        event.preventDefault();
    }

    getPeopleByZip = () => {
        $.ajax({
            url: this.state.url
        }).done(response => {
            const { data } = response;
            data.forEach(function(obj) {
                obj.key = obj.id;
            });
            this.setState({
                people: data
            });
        });
    };

    componentDidMount() {
        function setMessage(msg) {
            return (
                <div className="ui visible message">
                    <p>{msg}</p>
                </div>
            );
        }

        this.state.message = !this.state.zip
            ? setMessage("Seeing All")
            : setMessage(
                  `Seeing heros close to planet zip code ${this.state.zip}`
              );

        this.getPeopleByZip();
    }

    render() {
        return (
            <div>
                <div className="ui basic segment">
                    <h1 className="ui header">Hero Results</h1>
                </div>
                {this.state.message}
                <div className="ui menu">
                    <div className="header item">
                        Results ({this.state.people.length})
                    </div>
                    <div className="right item">
                        <div className="ui action input">
                            <input
                                type="text"
                                value={this.state.zip}
                                onChange={() => ""}
                                placeholder="Planet zip code..."
                            ></input>
                            <div className="ui blue button">Go</div>
                        </div>
                    </div>
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

export default withRouter(HeroResults);
