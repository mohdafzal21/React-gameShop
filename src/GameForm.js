import React from 'react';

class GameForm extends React.Component{
   state = {
       name : "",
       description : ""
   };
   handleSubmit = e =>{
       e.preventDefault();
       console.log(this.state)
   };

   handleNameChange = (e)=>{
       this.setState({name : e.target.value} )
   };
    handleDescriptionChange = (e)=>{
        this.setState({description : e.target.value} )
    };

    render(){
        return(
        <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field">
                <label htmlFor="name">Game Title</label>
                <input
                    type="text"
                    placeholder="full game title"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <label htmlFor="name">Game Description</label>
                <input
                    type="text"
                    placeholder="full game description"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}


                />
            </div>
                <button className="ui button" type="submit">Create</button>

        </form>
        )
    }
}

export default GameForm;