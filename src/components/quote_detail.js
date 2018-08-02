import React from 'react';

const QuoteDetail = ({quote}) => { 

    if (!quote) {
        return <div>Loading...</div>;
    }

    const imageURL = quote.picture.large;

    return (
    <div className="quote-detail col-md-12">
        <img src={imageURL} />
      <div className="details">
        <div>{quote.name.last}</div>
        <div>{quote.location.street}</div>
      </div>
    </div>
  );
};

export default QuoteDetail;
