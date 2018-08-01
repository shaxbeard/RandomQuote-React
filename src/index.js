import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import NextButton from './components/next_button';
import QuotesList from './components/quotes_list';



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
  .then(parsedJSON => parsedJSON.results)
  .then(quotes => this.setState({
      quotes,
      isLoading: false
  }))
  .catch(error => console.log('parsing failed', error))

  } 




    render() {
      return (
      <div>
        <Card />
        <QuotesList quotes={this.state.quotes} />
        <NextButton />

      </div>
      ); 
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
