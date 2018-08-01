import React, { Component } from 'react';

class NextButton extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }


    render() {
    return <button onClick={event => console.log(event)} />;
  }
}


export default NextButton;