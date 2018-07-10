import React from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';
import FormInlineMessage from './FormInlineMessage';
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
    validate(data)  {
        const errors = {};

        if(!data.name) errors.name = "this field cannot be blank";
        if(!data.players) errors.players = "this field cannot be blank";
        if(!data.publisher) errors.publisher = "this field cannot be blank";
        if(!data.thumbnail) errors.thumbnail = "this field cannot be blank";

        if(data.price <0 ) errors.price = "too cheap ";
        if(data.duration <0 ) errors.duration = "too less ";

        return errors;
}

    handleSubmit = (e)=>{
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({errors});

        if(Object.keys(errors).length === 0){
            console.log(this.state.data)
        }
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
        const {data,errors} = this.state;
        return(
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className=" ui grid">
                    <div className="twelve wide column">
                        <div className={errors.name ? "field error" : "field"} >
                        <label htmlFor="name">Game Title</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="full game title"
                            value= {this.state.name}
                            name= "name"
                            onChange={this.handleStringChange}
                        />
                            <FormInlineMessage content={errors.name} type="error"/>
                    </div>
                        <div className={errors.description ? "field error" : "field"} >
                            <label htmlFor="name">Game Description</label>
                            <textarea
                                type="text"
                                id="description"
                                placeholder="full game title"
                                value= {data.description}
                                name= "description"
                                onChange={this.handleStringChange}
                            />
                            <FormInlineMessage content={errors.description} type="error"/>
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
                <div className={errors.thumbnail ? "field error" : "field"} >
                        <label htmlFor="name">Thumbnail</label>
                        <input
                            type="text"
                            id="thumbnail"
                            placeholder="full game image"
                            value= {data.thumbnail}
                            name= "thumbnail"
                            onChange={this.handleStringChange}
                        />
                    <FormInlineMessage content={errors.thumbnail} type="error"/>
                    </div>

                <div className= "three fields">
                    <div className={errors.price ? "field error" : "field"} >
                        <label htmlFor="name">Price</label>
                        <input
                            type="number"
                            id="price"
                            placeholder="Price"
                            value= {data.price}
                            name= "price"
                            onChange={this.handleNumberChange}
                        />
                        <FormInlineMessage content={errors.price} type="error"/>
                    </div>
                    <div className={errors.duration ? "field error" : "field"} >
                        <label htmlFor="name">Duration in mins</label>
                        <input
                            type="number"
                            id="duration"
                            placeholder="full game durationn"
                            value= {data.duration}
                            name= "duration"
                            onChange={this.handleNumberChange}
                        />
                        <FormInlineMessage content={errors.duration} type="error"/>
                    </div>
                    <div className={errors.players ? "field error" : "field"} >
                        <label htmlFor="name">Game Players</label>
                        <input
                            type="text"
                            id="players"
                            placeholder="Players"
                            value= {data.players}
                            name= "players"
                            onChange={this.handleStringChange}
                        />
                        <FormInlineMessage content={errors.players} type="error"/>
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
                <div className={errors.publisher ? "field error" : "field"} >
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
                    <FormInlineMessage content={errors.publisher} type="error"/>
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