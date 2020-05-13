import React, {useContext} from 'react';
import GlobalContext from '../context/globalContext/GlobalContext';

const ShowCountries = ()=>{
    const globalContext = useContext(GlobalContext);
    const {countries} = globalContext;
    return(
        <div className="jumbotron">
            <div className="container" >
            {countries.map(countries => (
                <div className='card text-center' key={countries.country}>
                <div style={{backgroundColor: 'gray'}}>
                <h3 className='btn btn-primary'>{`COUNTRY: ${countries.country}`}</h3>
                    <h3>{`CONFIRMED CASES: ${countries.confirmed}`}</h3>
                    <h3>{`RECOVERED: ${countries.recovered}`}</h3>
                    <h3>{`CRITICAL: ${countries.critical}`}</h3>
                </div>
                <h3 className='btn btn-danger'>{`DEATHS ${countries.deaths}`}</h3>
                </div>
                ))}
                
            </div>
        </div>
    )
}
export default ShowCountries;