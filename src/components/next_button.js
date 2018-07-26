import React, { Component } from 'react';

class NextButton extends Component {
    render() {
    return <button onClick={event => console.log(event)} />;
  }
}


export default NextButton;