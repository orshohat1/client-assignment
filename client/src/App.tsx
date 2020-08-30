import React from 'react';
import './App.css';
import { Country } from './components/Country';
import { CountryForm } from './components/countryForm';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <CountryForm></CountryForm>
        <Country></Country>
      </div>
    );
  }
}

export default App;
