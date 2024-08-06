import logo from './logo.svg';
import './App.css';
import React from 'react';
import OpenLayersMap from './Map';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Maplinker an Openlayers map application for visualising merged data usng the RestFul API based on OGC TJS.</h1>

        <p>Tutorials on how to use</p>
        <p>Map gallery </p>

        <OpenLayersMap/>
      </header>
    </div>
  );
}

export default App;

