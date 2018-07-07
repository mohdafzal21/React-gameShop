import React, { Component } from 'react';

import './App.css';
import GameForm from './GameForm';
import GameList from './GameList';
import d3 from './icons/d3.jpg';
import d5 from './icons/d5.jpeg';
import d6 from './icons/d6.jpg';
import d7 from './icons/d7.jpg';
import _orderBy from 'lodash/orderBy'

const publishers = [
    {
        _id : 1,
        name : "EA GAMES"
    },
    {
        _id : 2,
        name: "UbiSoft"
    }
]

const games = [{

    id: 1,
    publisher:1,
    name: "Call Of Duty",
    thumbnail : d3,
    price : 100,
    players: "2",
    duration : 10,
    featured : true

},
    {
        id: 2,
        thumbnail : d7,
        price : 1002,
        name : "Tomb Raider",
        duration : 20,
        featured : true,
        players : "3",
        publisher:1

    },
    {

        id: 3,
        name: "Transformers",
        thumbnail : d5,
        price : 100,
        players: "2",
        featured : false,
        duration : 10,
        publisher:2

    },
    {

        id: 4,
        name: "Star Trek",
        thumbnail : d6,
        price : 100,
        players: "2",
        featured : true,
        duration : 10,
        publisher:2

    }

];

class App extends Component {
    constructor(props){
        super(props);
       this.state = {
            games : []
        };
       this.toggleFeatured = this.toggleFeatured.bind(this);
       this.sortGames = this.sortGames.bind(this);
    }

    componentDidMount(){
        this.setState({
            games :this.sortGames(games)
        })
    }

    sortGames(games){
        return _orderBy(games, ["featured","name"],["desc", "asc"])
    };

    toggleFeatured(gameId){

        const newGames =
            this.state.games.map(game => {
            if(game.id === gameId) return{...game , featured : !game.featured};
            return game;
        });

         this.setState({games: this.sortGames(newGames)});
    };
    render(){
        return (
            <div className="ui container">
                <GameForm publishers={publishers}/>
                <GameList
                    games = {this.state.games}
                    toggleFeatured = {this.toggleFeatured}
                />
            </div>
        );
    }
}

export default App;
