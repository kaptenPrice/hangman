import React from 'react';
import './App.css';
import hanger from './images/hanger.jpg';

const buttonStyle={
  background:"#bdbdbd",
  boxShadow:"0px 3px rgba(63, 63, 63, 0.521)",
  color:"white"


}
var keyPressed=(e)=>{
document.getElementById(e).style.boxShadow=buttonStyle.boxShadow;  
document.getElementById(e).style.background=buttonStyle.background;  
document.getElementById(e).style.color=buttonStyle.color;  

//document.getElementById(e).id="pressed";
//console.log(document.getElementById(e).style);
}


const alphabet = "abcdefghijklmnopqrstuvwxyzåäö";
const keyboard = alphabet.split('').map( letter =>(
     <button id={letter} key={letter} onClick={()=>keyPressed(letter)}>
     {letter}
     </button>
   )
   );

function App() {
  return (
    <div className="container">

      <h2>**"Hänga gubbe"**</h2>
      <p>Spelets  regler: spelet går ut på att gissa bokstäver i ett ord vars bokstäver
      är helt dolda,<br></br> men som visas som ledtrådar när spelaren lyckats gissa på dem.</p>
      <img src={hanger} className="hanger" alt="hanger" />
      <h2>- - - - - -</h2>
      <p>**"Antal gissningar: 0"**</p>
      <button id="test">Test</button>
      <div className="buttonBox">
        {keyboard} 
      </div>



    </div>
  );
}

export default App;
