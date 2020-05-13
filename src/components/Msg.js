import React, {useContext} from 'react';
import GlobalContext from '../context/globalContext/GlobalContext';

const Msg = ()=>{
    const globalContext = useContext(GlobalContext);
    const {alertMsg} = globalContext;
    return(
    <p style={{textAlign:'center', color: 'blue'}}>{alertMsg}</p> 
    )
}

export default Msg;