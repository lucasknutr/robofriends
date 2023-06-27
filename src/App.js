import React, { Component } from "react";
import { robots } from './components/robots';
import CardList from './components/CardList.js';
import SearchBar from "./components/SearchBar";

class App extends Component {
    // ? como q eu faço state mesmo ein mansho
    constructor () {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }

    render() {
        const filteredRobots = this.state.robots.filter(element => {
            return element.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
        <>
            <h1 className="text-5xl font-bold text-center p-10">Robofriends</h1>
            <div className="search-bar text-center pb-5">
                <SearchBar className="text-center" searchChange={this.onSearchChange} />
            </div>
            <CardList robots={filteredRobots} />
        </>
    );
}
}

export default App;