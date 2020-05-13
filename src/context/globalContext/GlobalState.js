import React, {useReducer } from "react";
import Reducer from './Reducer';
import GlobalContext from './GlobalContext';
import Axios from 'axios';
import PropsType from 'prop-types';
import {
    SET_ALERT,
    SET_COUNTRIES,
    SET_LOADING,
    REMOVE_ALERT
} from '../types';

const GlobalState = props =>{
    //initialize state
    const initialState = {
        countries: [],
        loading: false,
        alertMsg: ' '
      }
      //initialize reducer
      const [state, dispatch] = useReducer(Reducer, initialState);



      //get a specific county
 const getCountry = async (country) => {
    setLoading();
    dispatch({type: SET_ALERT, payload: "If country abbreviations don't work try typing in full name"});
    const res = await Axios({
      "method":"GET",
      "url":"https://covid-19-data.p.rapidapi.com/country",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
      "x-rapidapi-key":`${process.env.REACT_APP_APIKEY}`,
      "useQueryString":true
      },"params":{
      "format":"undefined",
      "name":`${country}`
      }
      });
      setLoading();
      //console.log(res.data)
      dispatch({type: SET_COUNTRIES, payload: res.data});
      dispatch({type: SET_ALERT, payload: "If country abbreviations don't work try typing in full name"});
      setTimeout(()=>{
        removeMsg();
      }, 6000);
  }

  const removeMsg = ()=>{
    dispatch({type: REMOVE_ALERT});
  }
  const setLoading = ()=> dispatch({type: SET_LOADING});
  



      return <GlobalContext.Provider value={{
          countries: state.countries,
          loading: state.loading,
          alertMsg: state.alertMsg,
          getCountry,
          removeMsg
      }}>

        {props.children}
        </GlobalContext.Provider>
      
}
GlobalState.propsType = {
  countries: PropsType.object.isRequired,
  loading: PropsType.bool.isRequired,
  showMsg: PropsType.string.isRequired,
  getCountry: PropsType.func.isRequired,
  removeMsg: PropsType.func.isRequired

}
export default GlobalState;