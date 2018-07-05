import React from 'react';
import GameList from "./GameList";
import PropTypes from 'prop-types';
import Featured from './Featured';
//  functional component

const GameCard= ({game, toggleFeatured})=>(
    <div className="ui card">
        <div className="image">
            <span className= "ui blue ribbon label">rs{game.price}</span>

            <Featured
                featured={game.featured}
                toggleFeatured={toggleFeatured}
                id={game.id}
            />
            <img src={game.thumbnail} alt="game cover"/>
            <div className="content">
                <a href="#" className="header">{game.name}</a>
                <div className="meta">
                    <i className="icon users" />{game.players}&nbsp;
                    <i className="icon wait"/>{game.duration}min.
                </div>
            </div>

        </div>
    </div>
)

GameCard.propTypes = {
    game : PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        players: PropTypes.string.isRequired,
        price : PropTypes.number.isRequired,
        img : PropTypes.string,
        toggleFeatured : PropTypes.func,
        featured: PropTypes.bool.isRequired
    })).isRequired
};







export default  GameCard;