import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';

var quoteFull;	
var quoteArray = [];
var authorArray = [];
var i = -1;

(function () { 
  quoteFull = $.ajax({
    url: 'https://talaikis.com/api/quotes/random/',
    type: 'GET', 
    dataType: 'json',
    success: function(data) {
      quoteArray.push(data.quote);
      authorArray.push(data.author);
      i+=1; 
      console.log(i);
      console.log(quoteArray[i]);
    //   document.getElementById("output").innerHTML = quoteArray[i];
    //   document.getElementById("author").innerHTML = authorArray[i];
        }
}); // AJAX method ??
})(); // doIt Function



// Create a new component. This //component should produce
// some HTML

const App = () => {
    return (
    <div>
      <Card />
    </div>
    ); 
}

// Take this component’s generated HTML // and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
