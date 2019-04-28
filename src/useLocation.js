import { useState, useEffect } from 'react';

// everything in this exported function was originally written in the src/index.js file as part of the App functional component. 
export default () => { 
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
   
   // after this function is called, we want to return only the lat and errorMessage properties. These two properties can be returned a couple of different ways:
   // 1. return them inside of an object
   // return {
   //    lat: lat,
   //    errorMessage: errorMessage
   // }
   // Return them inside of an array, which is the accepted best practice in the React community right now because it allows the array destructuring syntax to be used:
   return [lat, errorMessage];

};