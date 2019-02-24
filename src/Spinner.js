import React from 'react';

const Spinner = (props) => {
   return (
      <div className="ui active dimmer">
         <div className="ui big text loader">
            {props.message}
         </div> 
      </div>
   );
};

// If an instance of the Spinner Component is used/created and nothing is passed in for the message when Spinner runs, this default message will be used.
Spinner.defaultProps = {
   message: "Loading..."
};

export default Spinner;