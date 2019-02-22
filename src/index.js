import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
   // call to the geolocation API
   window.navigator.geolocation.getCurrentPosition(
      (position ) => console.log(position),
      (err) => console.log(err)
   );
   return <div>Hello!</div>
};

ReactDOM.render(<App />, document.querySelector('#root'));