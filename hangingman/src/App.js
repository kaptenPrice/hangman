import React from 'react';
import './App.css';
import hanger from './images/hanger.jpg';


function App() {
  return (
    <div className="container">
  
       <h2>**"Hänga gubbe"**</h2>
       <p> Hänga gubbe är ett spel. Spelet går ut på att gissa bokstäver i ett ord vars bokstäver
      initialt är helt dolda,<br></br> men som visas som ledtrådar när spelaren lyckats gissa på dem.</p>
    <img src={hanger} className="hanger"/>
    <h2>- - - - - -</h2>
    <p>**"Antal gissningar: 0"**</p>
<button id="button">a</button>


       
   
    </div>
  );
}

export default App;
