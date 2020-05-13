import React, {Fragment} from "react";
import Gif from './giphy.gif';

const Progress = ()=>{
    return(
        <Fragment>
            <img src={Gif} alt='loading...' style={{width: '200px', margin: 'auto', display: 'block'}} />
        </Fragment>

    )
}

export default Progress;