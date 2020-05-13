import React, {Fragment, useContext}from 'react';
import ShowCountries from './ShowCountries'
import Progress from './Progress';
import Msg from './Msg';
import GlobalContext from '../context/globalContext/GlobalContext';

const Countries = ()=>{
    const globalContext = useContext(GlobalContext);
    const { loading, countries} = globalContext;
    //if loading is true show loading bar
    if(loading){
        return(
            <Progress />
        )
    }else{
        //return data that was fetch if laoding is false
        return( 
            
            <Fragment>
                <Msg />
                 <div className="jumbotron">
                    <ShowCountries  />
                </div> 
            </Fragment>  
                      
        )
    } 
}
export default Countries;
