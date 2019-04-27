import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
   // initialize the 'lat' state property.
   // 'lat' is the state property; 
   // setLat is a function that can be used to change the state property, lat.
   const [lat, setLat] = useState(null);

   // initialize the 'errorMessage' state property.
   // errorMessage is the state property
   // setErrorMessage is the function that is used to change the value of errorMessage
   const [errorMessage, setErrorMessage] = useState('');

   // useEffect should be invoked exactly one time, when the component is first rendered. To elicit this behavior, an empty array is passed to useEffect as the second argument.
   useEffect(() => {
      window.navigator.geolocation.getCurrentPosition(
         position  =>  setLat(position.coords.latitude),
         err => setErrorMessage(err.message) 
      );
   }, []); 

   // replaces renderContent() function
   let content;
   if(errorMessage) {
      content = <div>Error: {errorMessage}</div>;
   } else if (lat) {
      content = <SeasonDisplay lat={lat} />;
   } else {
      content = <Spinner message="Please accept the location request"/>;
   }

   return <div className="border red">{content}</div>

};

ReactDOM.render(<App />, document.querySelector('#root'));

// class App extends React.Component {
//    state = {
//       lat: null,
//       errorMessage: ''
//    };
// componentDidMount() {
//    window.navigator.geolocation.getCurrentPosition(
//       position  => this.setState({ lat: position.coords.latitude }),
//       err => this.setState({ errorMessage: err.message})
//    );
// } 
// renderContent () {
//    if ( this.state.errorMessage && !this.state.lat) {
//       return <div>Error: {this.state.errorMessage} </div>
//    }
//    if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />; 
//    } 
//    return <Spinner message="Please accept the location request"/>;
// }

// render () {
//    return (
//       <div className="border red">
//          {this.renderContent()}
//       </div>
//    )
// }
// }