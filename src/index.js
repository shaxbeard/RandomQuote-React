import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import NextButton from './components/next_button';

function nextQuote() { 
  $.ajax({
    url: 'https://talaikis.com/api/quotes/random/',
    type: 'GET', 
    dataType: 'json',
    success: function(data) {
      console.log(data.quote);
    }
}); // AJAX method ??
} // doIt Function


// Create a new component. This //component should produce
// some HTML

const App = () => {
    return (
    <div>
      <Card />
      <NextButton />


    </div>
    ); 
}

// Take this component’s generated HTML // and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
