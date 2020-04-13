import React, {Fragment}from 'react';
import ShowCountries from './ShowCountries'
import Progress from './Progress';
import Msg from './Msg';

const Countries = ({countries, loading, correctSyntax})=>{
    //if loading is true show loading bar
    if(loading){
        return(
            <Progress />
        )
    }else{
        //return data that was fetch if laoding is false
        return( 
            <Fragment>
                <Msg correctSyntax ={correctSyntax}/>
                 <div className="jumbotron">
                 
                    <ShowCountries countries = {countries}/>
                </div> 
            </Fragment>  
                      
        )
    } 
}

export default Countries;