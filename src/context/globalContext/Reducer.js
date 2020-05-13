import {SET_ALERT,SET_COUNTRIES,SET_LOADING, REMOVE_ALERT} from '../types';

const Reducer = (state, action)=>{
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_ALERT:
            return {
                ...state, 
                alertMsg: action.payload
            };
        case REMOVE_ALERT:
            return{
                ...state, 
                alertMsg: '' 
            };
        case SET_COUNTRIES:
            return{
                ...state, 
                countries: action.payload,
                loading: false
            };
       
        default:
            return state;
    }

}

export default Reducer;