import React from 'react';

//  functional component

const GameCard= ({game})=>(
    <div className="ui card">
        <div className="image">
            <label htmlFor="">{game.price}</label>
            <img src="{game.img}" alt="game cover"/>
            <div className="content">
                <a href="#" className="header">{game.name}</a>
                <div className="meta">
                    <i className="icon users">{game.players}</i>
                    <i className="icon wawit">{game.duration}</i>
                </div>
            </div>

        </div>
    </div>
)






export default  GameCard;