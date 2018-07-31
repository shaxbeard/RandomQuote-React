import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';

import Card from './components/card';
import NextButton from './components/next_button';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { quotes: [] };
    
  } // Does this close the Constructor??

componentWillMount(){
  var url = "http://www.omdbapi.com?s=star&y=&r=json&plot=short";
  Request.get(url).then((response) => {
    this.setState({ 
      movies: response
    });
    
  });
  
}
  


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
