import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameForm from './GameForm';
import GameList from './GameList';
import download from './download.jpeg'
const games = [{

    id: "1",
    name: "gta",
    img : download,
    price : 100,
    players: "2",
    duration : 10,

},
    {
        id: "2",
        img : "url2",
        price : 1002,
        name : " gta2",
        duration : 20,
        players : "3"

    },
    {

        id: "3",
        name: "gta",
        img : download,
        price : 100,
        players: "2",
        duration : 10,

    },
    {

        id: "4",
        name: "gta",
        img : download,
        price : 100,
        players: "2",
        duration : 10,

    }

];

class App extends Component {
  render() {
    return (
      <div className="App">
       Game shop
        <GameForm/>
          <GameList games = {games}/>
      </div>
    );
  }
}

export default App;
