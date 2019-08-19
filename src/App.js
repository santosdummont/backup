import React from 'react';
import Home from 'containers/Home'
import data from 'api/data.js';

function App() {
  console.log(data);
  return (
    <div className="App">
      <Home 
        data={data}/>
    </div>
  );
}

export default App;
