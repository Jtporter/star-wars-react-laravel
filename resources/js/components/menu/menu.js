import React, { Component } from "react";
import Link from "next/link";

export default class Menu extends Component {
    render() {
        return (
            <div className="ui attached stackable menu">
                <div className="ui container">
                    <Link href="/">
                        <a className="item">
                            <i className="home icon"></i>Home
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="item">
                            <i className="grid layout icon"></i>About
                        </a>
                    </Link>
                    <div className="ui simple dropdown item">
                        More
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <a className="item">
                                <i className="edit icon"></i> Edit Profile
                            </a>
                            <a className="item">
                                <i className="globe icon"></i> Choose Language
                            </a>
                            <a className="item">
                                <i className="settings icon"></i> Account
                                Settings
                            </a>
                        </div>
                    </div>
                    <div className="right item">
                        <div className="ui input">
                            <input type="text" placeholder="Search..."></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
