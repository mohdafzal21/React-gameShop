import React from 'react';
import PropTypes from 'prop-types';

const TopNavigation = ({showGameForm})=>(
    <div className="ui secondary pointing menu">
        <a href="/" className="item" >
            Shop
        </a>
        <a  className="item" onClick={showGameForm}>
           <i className="icon plus"/>Add new game
        </a>

    </div>

        );

TopNavigation.propTypes = {
    showGameForm: PropTypes.func.isRequired
};

export default TopNavigation;