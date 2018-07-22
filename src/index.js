import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';

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
