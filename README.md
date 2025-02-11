# React Router v6 useParams Hook Error: Handling undefined 'userId'

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6 with nested routes. The error occurs when trying to access parameters before the component mounts or when the route doesn't match, resulting in an undefined `params` object.

The `useParamsBug.js` file showcases the problematic code that throws the error. The `useParamsSolution.js` file provides a corrected version, incorporating checks to prevent the error.

The solution includes robust error handling and conditional rendering to ensure a smooth user experience.