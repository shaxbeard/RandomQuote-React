import React from 'react';

const QuotesListItem = ({quote}) => {
    const imageUrl = quote.picture.thumbnail;
    return(
        <li className="list-group-item">
        <div className="quote-list media">
          <div className="media-left">
            <img className="media-object" src= {imageUrl} />
          </div>
        
        <div className="media-body">
          <div className="media-heading">
          {quote.email}
          
         </div>
        
        
        
        
        </div>
  
        </div>
        </li>
      );
  };
  

export default QuotesListItem;