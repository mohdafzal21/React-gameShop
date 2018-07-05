import React from 'react';
import PropTypes from 'prop-types';


const Featured = ({ featured,toggleFeatured ,gameId})=>(
<span>
    { featured ? (
            <a  onClick={()=> toggleFeatured(gameId)} className= "ui icon yellow right corner label">
                <i className= "i star icon"/>
            </a>
        ) : (
            <a onClick={ ()=>toggleFeatured(gameId) } className= "ui icon right corner label">
                <i className= "i star icon">
                </i>
            </a>
        )}

</span>
);

Featured.propTypes = {
    featured : PropTypes.bool.isRequired,
    toggleFeatured : PropTypes.func.isRequired,
    gameId : PropTypes.number.isRequired
};

export default Featured;