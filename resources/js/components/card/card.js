import React, { Component } from "react";
import Link from "next/link";

export default class Card extends Component {
    render() {
        const {
            id,
            name,
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender,
            planet_id,
            planet: {
                name: planetName
            },
            image_url
        } = this.props;
        const cartImgStyle = {
            backgroundImage: "url('" + image_url + "')"
        };
        return (
            <div className="column">
                <div className="ui card fluid centered">
                    <div style={cartImgStyle} className="card-image"></div>
                    <div className="content">
                        <Link href={`/heros/${id}`}>
                            <a className="header">{name}</a>
                        </Link>
                        <div className="meta">
                            <span className="date">Height: {height}</span>
                        </div>
                        <div className="meta">
                            <span className="date">Mass: {mass}</span>
                        </div>
                        <div className="meta">
                            <span className="date">
                                Hair Color: {hair_color}
                            </span>
                        </div>
                        <div className="meta">
                            <span className="date">
                                Skin Color: {skin_color}
                            </span>
                        </div>
                        <div className="meta">
                            <span className="date">Eye Color: {eye_color}</span>
                        </div>
                        <div className="meta">
                            <span className="date">
                                Birth Year: {birth_year}
                            </span>
                        </div>
                        <div className="description">
                            Born on Planet: {planetName}
                        </div>
                    </div>
                    <div className="extra content">
                        <i className="user icon"></i>
                        Gender: {gender}
                    </div>
                </div>
            </div>
        );
    }
}
