import React from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';

class GameForm extends React.Component{
    state ={
        data:{
            name : "",
            description: "",
            price : 0,
            duration : 0,
            players : "",
            featured : false,
            publisher : 0,
            thumbnail: ""
        },
        errors:{

        }

    };

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state.data)
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
           data : {...this.state.data,  [e.target.name] : e.target.value}
        })
    };

    handleNumberChange = e=>{
        this.setState({
           data : {...this.state.data,  [e.target.name] : e.target.value}
        })
    };

    handleCheckboxChange = e=>{
        this.setState({
            data : { ...this.state.data,[e.target.name] : e.target.checked}
        });
    };

    render(){
        const {data} = this.state;
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
                                value= {data.description}
                                name= "description"
                                onChange={this.handleStringChange}
                            />
                        </div>
                    </div>
                    <div className="four wide column">
                        <div>
                        <ReactImageFallback
                            style={{width: '200px', height:'200px'}}
                            src={data.thumbnail}
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
                            value= {data.thumbnail}
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
                            value= {data.price}
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
                            value= {data.duration}
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
                            value= {data.players}
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
                        checked={data.featured}
                        onChange={this.handleCheckboxChange}
                    />
                    <label htmlFor="featured">Featured</label>
                </div>
                <div className="field">
                    <label>Publishers</label>
                    <select
                        value={data.publisher}
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