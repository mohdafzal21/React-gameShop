import React from 'react';

class GameForm extends React.Component{
    render(){
        return(
        <form className="ui form">
            <div className="field">
                <label htmlFor="name">Game Title</label>
                <input type="text" placeholder="full game title"/>
            </div>
                <button className="ui button" type="submit">Create</button>

        </form>
        )
    }
}

export default GameForm;