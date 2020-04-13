import React, { Component } from 'react';
import './App.css';
import Countries from './components/Countries';
import Search from './components/Search';
import Axios from 'axios';
import Title from './components/Title';
import PropsType from 'prop-types';
 
class App extends Component {

state = {
  countries: [],
  loading: false,
  correctSyntax: '',
  dontMsg: false
}

propsType = {
  countries: PropsType.object.isRequired,
  loading: PropsType.bool.isRequired,
  correctSyntax: PropsType.string.isRequired,
  showMsg: PropsType.bool.isRequired
}


//get a specific county
 getCountry = async (country) => {
   this.setState({coutries: [], loading: true, correctSyntax: "If country abbreviations don't work try typing in full name"});
  const res = await Axios({
    "method":"GET",
    "url":"https://covid-19-data.p.rapidapi.com/country",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
    "x-rapidapi-key":`${process.env.REACT_APP_APIKEY}`
    },"params":{
    "format":"undefined",
    "name":`${country}`
    }
    });
    this.setState({countries: res.data, loading: false, correctSyntax: "If country abbreviations don't work try typing in full name"});
}

removeMsg = ()=>{
  this.setState({correctSyntax: ''});
}


  render(){
    const { countries, loading, correctSyntax} = this.state;
    return (
      <div className="container">
        <Search  getCountry = {this.getCountry} clearTxt={this.clearTxt} removeMsg = {this.removeMsg}/>
        <Title />
        <Countries correctSyntax = {correctSyntax} loading= {loading} countries= {countries} onClick={this.props.onClick}/>
      </div>
    );
  }
}

export default App;
