import React from 'react';
import GameCard from "./GameCard";
import PropTypes from 'prop-types';

//functional component
const GameList = ({games})=>(
<div className="ui four cards">
    {games.map(game=> <GameCard game={game} key={game.id}/>)}
</div>
)

GameList.propTypes = {
    games : PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        players: PropTypes.string.isRequired,
        price : PropTypes.number.isRequired,
        img : PropTypes.string
    })).isRequired
};

export default GameList;
