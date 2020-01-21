import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import Router from "next/router";
import $ from "jquery";
// COMPONENTS
import Card from "../card/card";

class Hero extends Component {
    constructor(props) {
        super(props);
        const {
            router: {
                query: { id }
            }
        } = Router;
        let url = `http://127.0.0.1:8000/api/people`;
        console.log(router);
        id ? (url = `${url}/${id}`) : url;
        this.state = { people: [], url };
        this.getPeopleByZip = this.getPeopleByZip.bind(this);
    }

    static async getInitialProps () {
        return {}
      }

    getPeopleByZip = () => {
        console.log(this.state.url);
        $.ajax({
            url: this.state.url
        }).done(response => {
            const { data } = response;
            data.key = data.id;
            this.setState({
                people: data
            });
        });
    };

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
                            {/* <input
                                type="text"
                                value={this.state.zip}
                                onChange={() => ""}
                                placeholder="Planet zip code..."
                            ></input> */}
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

export default withRouter(Hero);
