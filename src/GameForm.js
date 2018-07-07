import React from 'react';

class GameForm extends React.Component{
    state ={
        name : "",
        description: "",
        price : 0,
        duration : 0,
        players : "",
        featured : false

    };
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state)
    };
    // handleNameChange = (e) =>{
    //     this.setState({
    //         name: e.target.value
    //     });
    // };
    // handleDescriptionChange = (e)=>{
    //     this.setState({
    //         description : e.target.value
    //     });
    // };

    // handleChange = (e)=>{
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     })
    // };

    handleStringChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    handleNumberChange = e=>{
        this.setState({
            [e.target.name] : parseInt(e.target.value, 10)
        })
    };

    handleCheckboxChange = e=>{
        this.setState({
            [e.target.name] : e.target.checked
        });
    };

    render(){
        return(
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Game Title</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="full game title"
                        value= {this.state.name}
                        name= "name"
                        onChange={this.handleStringChange}
                    />
                </div>
                <div className="field">
                    <label htmlFor="name">Game Description</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="full game title"
                        value= {this.state.description}
                        name= "description"
                        onChange={this.handleStringChange}
                    />
                </div>
                <div className= "three fields">
                    <div className="field">
                        <label htmlFor="name">Price</label>
                        <input
                            type="number"
                            id="price"
                            placeholder="Price"
                            value= {this.state.price}
                            name= "price"
                            onChange={this.handleNumberChange}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="name">Duration in mins</label>
                        <input
                            type="number"
                            id="duration"
                            placeholder="full game durationn"
                            value= {this.state.duration}
                            name= "duration"
                            onChange={this.handleNumberChange}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="name">Game Players</label>
                        <input
                            type="text"
                            id="players"
                            placeholder="Players"
                            value= {this.state.players}
                            name= "players"
                            onChange={this.handleStringChange}
                        />
                    </div>
                </div>
                <div className="inline field">
                    <input
                        type="checkbox"
                        id="featured"
                        name="featured"
                        placeholder= "featured"
                        checked={this.state.featured}
                        onChange={this.handleCheckboxChange}
                    />
                    <label htmlFor="featured">Featured</label>
                </div>

                <button className="ui button" type="submit">Create</button>

            </form>
        )
    }
}

export default GameForm;