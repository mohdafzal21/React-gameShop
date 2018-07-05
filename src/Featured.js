import React from 'react';
import PropTypes from 'prop-types';


const Featured = ({featured,id, toggleFeatured})=>(
<span>
    { featured ? (
            <a onClick={()=>toggleFeatured(id)} className= "ui icon yellow right corner label">
                <i className= "i star icon">
                </i>
            </a>
        ) : (
            <a  onClick={()=>toggleFeatured(id)} className= "ui icon right corner label">
                <i className= "i star icon">
                </i>
            </a>
        )}

</span>
)

Featured.propTypes = {
    featured : PropTypes.bool,
    toggleFeatured : PropTypes.func.isRequired,
    id : PropTypes.number
}

export default Featured;