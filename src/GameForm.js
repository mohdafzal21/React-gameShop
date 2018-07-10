import React from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';

class GameForm extends React.Component{
    state ={
        name : "",
        description: "",
        price : 0,
        duration : 0,
        players : "",
        featured : false,
        publisher : 0,
        thumbnail: ""

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
                <div className=" ui grid">
                    <div className="twelve wide column">
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
                            <textarea
                                type="text"
                                id="description"
                                placeholder="full game title"
                                value= {this.state.description}
                                name= "description"
                                onChange={this.handleStringChange}
                            />
                        </div>
                    </div>
                    <div className="four wide column">
                        <div>
                        <ReactImageFallback
                            style={{width: '250px', height:'250px'}}
                            src={this.state.thumbnail}
                            classname="ui image"
                            alt="thumbnail"
                            fallbackImage="http://via.placeholder.com/250x250"
                        />
                        </div>
                    </div>
                </div>
                    <div className="field">
                        <label htmlFor="name">Thumbnail</label>
                        <input
                            type="text"
                            id="thumbnail"
                            placeholder="full game image"
                            value= {this.state.thumbnail}
                            name= "thumbnail"
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
                <div className="field">
                    <label>Publishers</label>
                    <select
                        value={this.state.publisher}
                        name="publisher"
                        onChange={this.handleNumberChange}
                    >
                        <option value="0">Choose Pubisher</option>
                        {this.props.publishers.map(publisher=>(
                            <option key={publisher._id} value={publisher._id}>{publisher.name}</option>
                        ))}

                        </select>
                </div>
                <div className="ui fluid buttons">
                    <button className="ui primary button" type="submit">Create</button>
                    <div className="or"> </div>
                        <a className="ui button" onClick={this.props.cancel}>Cancel</a>

                </div>

            </form>
        )
    }
}

GameForm.propTypes = {
    publishers : PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.number.isRequired,
        name : PropTypes.string.isRequired
    })).isRequired,
    cancel: PropTypes.func.isRequired

};

GameForm.defaultProps = {
    publishers : []
};

export default GameForm;