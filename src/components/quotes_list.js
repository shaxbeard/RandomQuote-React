import React from 'react';

const QuotesList = (props) => {
    return (
        <ul className="col-md-4 list-group">
        {props.quotes.length}
        </ul>
    );
}


export default QuotesList;