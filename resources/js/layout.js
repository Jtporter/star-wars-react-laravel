import React from "react";
import Head from "next/head";
// COMPONENTS
import Menu from "./components/menu/menu";

export default function Layout(props) {
    return (
        <div>
            <Head>
                <meta charset="utf-8"></meta>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                ></meta>
                <meta name="csrf-token" content="{{ csrf_token() }}"></meta>
                <title>Laravel</title>
                <link href="./css/app.css" rel="stylesheet"></link>
                <link
                    href="./semantic/dist/semantic.min.css"
                    rel="stylesheet"
                ></link>
                <script
                    src="https://code.jquery.com/jquery-3.1.1.min.js"
                    integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
                    crossorigin="anonymous"
                ></script>
                <script src="./semantic/dist/semantic.js"></script>
            </Head>
            <Menu />
            <div className="ui container">{props.children}</div>
        </div>
    );
}
