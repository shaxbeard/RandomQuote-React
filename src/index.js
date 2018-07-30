import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import NextButton from './components/next_button';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { quotes: [] };
    
  } // Does this close the Constructor??

componentDidMount(){
  this.fetchData();
}
  
fetchData(){
  
         
    fetch('https://randomuser.me/api/?results=50&nat=us,dk,fr,gb')
    .then(response => response.json())
    .then(parsedJSON => console.log( parsedJSON.results))
    .catch(error => console.log('parsing failed', error))


  } // Constructor?

    render() {
      return (
      <div>
        <Card />
        <NextButton />
      </div>
      ); 
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
