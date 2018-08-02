import React from 'react';
import QuotesListItem from './quotes_list_item';

const QuotesList = (props) => {
   const quoteItems = props.quotes.map((quote) => {
        return <QuotesListItem key ={quote.cell} quote={quote} />
    });


    return (
        <ul className="col-md-4 list-group">
        {quoteItems}
        </ul>
    );
}


export default QuotesList;