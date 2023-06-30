import React, { Component } from "react";
import CardList from './components/CardList.js';
import SearchBar from "./components/SearchBar";
import './App.css';
import Scroll from './components/Scroll'

// * I actually started learning React by using hooks, but this time I'm following ZTM's tutorial and trying to make sense out of
// * those class components. So far so good.

class App extends Component {
    // ! If anything goes wrong, check this out
    constructor () {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // ? This will only load after everything is rendered
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({ robots: users })})

    }

    // * Just a simple onChange function

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });

    }

    render() {

        // Months of codewars experience made me nail the logic on filtering any array

        const filteredRobots = this.state.robots.filter(element => {
            return element.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
        <>
            <h1 className="text-6xl font-bold text-center p-10 text-cyan-900">Robofriends</h1>
            <div className="search-bar text-center pb-5">
                <SearchBar className="text-center" searchChange={this.onSearchChange} />
            </div>
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>

            {/* A footer imported from bootstrap with some small modifications to its styles. I'd rather use TailwindCSS tho, it's still a really popular way of doing styles here in Brazil */}

            <footer class=" rounded-lg m-4 ">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-black sm:text-center dark:text-black">© 2023 <a href="https://github.com/lucasknutr" class="hover:underline">Lucas Canuto™</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-black sm:mt-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
                </div>
            </footer>
        </>
    );
}
}

export default App;