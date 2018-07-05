import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameForm from './GameForm';
import GameList from './GameList';
import download from './icons/download.jpeg'
import download2 from './icons/download (1).jpeg';
import d3 from './icons/d3.jpg';
import d4 from './icons/d4.jpeg';
import d5 from './icons/d5.jpeg';
import d6 from './icons/d6.jpg';
import d7 from './icons/d7.jpg';
import _orderBy from 'lodash/orderBy'

const games = [{

    id: "1",
    name: "Call Of Duty",
    thumbnail : d3,
    price : 100,
    players: "2",
    duration : 10,
    featured : true

},
    {
        id: "2",
        thumbnail : d7,
        price : 1002,
        name : "Tomb Raider",
        duration : 20,
        featured : true,
        players : "3"

    },
    {

        id: "3",
        name: "Transformers",
        thumbnail : d5,
        price : 100,
        players: "2",
        featured : false,
        duration : 10,

    },
    {

        id: "4",
        name: "Star Trek",
        thumbnail : d6,
        price : 100,
        players: "2",
        featured : true,
        duration : 10,

    }

];

class App extends Component {
    state = {
        games : []
    };

    componentDidMount(){
        this.setState({ games : _orderBy(games, ["featured","name"],["desc", "asc"])})
    }

     toggleFeatured(id){
        alert(id)
    }


    render() {
        return (
            <div className="ui container">
                <GameList
                    games = {this.state.games}
                    toggleFeatured = {this.toggleFeatured}
                />
            </div>
        );
    }
}

export default App;