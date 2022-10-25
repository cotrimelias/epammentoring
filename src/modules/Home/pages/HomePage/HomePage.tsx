import React from "react";
import { Counter } from "./components/Counter";
import { Search } from "./components/Search";

export class HomePage extends React.Component {
    render() {
        return <>
            <Counter />
            <Search />
            <div id="toggle"></div>
        </>
    }
}