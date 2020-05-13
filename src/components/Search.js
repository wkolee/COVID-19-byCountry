import React, { useContext, useState } from 'react';
import PropsTypes from 'prop-types';
import GlobalContext from '../context/globalContext/GlobalContext';


const Search = () =>{
    const githubContext = useContext(GlobalContext);
    const [country, setCountry] = useState('');
 
  
const onChange = (e) =>{
        setCountry(e.target.value);
        //console.log(this.state.country);
       
}

const onSubmit = (e)=>{
    e.preventDefault();
    githubContext.getCountry(country);
    githubContext.removeMsg();
    //clear input field after data is fetch
    setCountry(' ')
}

    return(
        
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            onChange={onChange} 
            value = { country  } 
            name='country' 
            className="form-control" 
            placeholder="Search Countries" 
            />
            <button  type="submit" className="btn btn-primary btn-block">Search</button>
        </form>

    )

        
}
        

Search.propsType = {
    getCountry: PropsTypes.func.isRequired,
    
    clearTxt: PropsTypes.func.isRequired
}
export default Search;