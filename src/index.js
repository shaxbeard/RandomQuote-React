import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import NextButton from './components/next_button';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { quotes: [] };

    function nextQuote() { 
      $.ajax({
        url: 'https://talaikis.com/api/quotes/random/',
        type: 'GET', 
        dataType: 'json',
        success: (quotes) => {
          console.log(quotes.quote);
          this.setState({ quotes });
        }
    }); // AJAX method ??
    } // do It Function
    nextQuote();
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
