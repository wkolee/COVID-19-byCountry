import React, { Component } from 'react';
import PropsTypes from 'prop-types';


class Search extends Component{
    state = {
        country: ''
    }
 
   propsType = {
       getCountry: PropsTypes.func.isRequired,
       
       clearTxt: PropsTypes.func.isRequired
   }
onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
        //console.log(this.state.country);
        this.props.removeMsg();
}

onSubmit = (e)=>{
    e.preventDefault();
    this.props.getCountry(this.state.country);
    
    //clear input field after data is fetch
    this.setState({country: ''});



   
}
render(){
    const {country} = this.state;
    return(
        
        <form onSubmit={this.onSubmit}>
            <input 
            type="text" 
            onChange={this.onChange} 
            value = { country } 
            name='country' 
            className="form-control" 
            placeholder="Search Countries" 
            />
            <button  type="submit" className="btn btn-primary btn-block">Search</button>
        </form>

    )
 }
        
}
        


export default Search;