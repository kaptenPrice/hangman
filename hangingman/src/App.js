import React from 'react';
import './App.css';
import hanger from './images/hanger.jpg';
import wordGenerator from './words';

let wordToGuess = "";
let gussLeft=0;
let explanationText="Bakom strecken döljer sig ett ord.Gissa ordet och tryck på reset om du vill få fram ett nytt ord."


const alphabets = "abcdefghijklmnopqrstuvwxyzåäö".split('');
const keyboardList = 
alphabets.map(letter => (<button className="tangent" id={letter} key={letter}
onClick={() =>  keyPressed(letter)}>
      {letter}</button>
  )
);

const keyPressed = (e) => {document.getElementById(e).disabled = true;};
const reset = () => {alphabets.map(elem => {document.getElementById(elem).disabled = false;return elem;})}
let dashBuilder=()=> {
  wordToGuess = wordGenerator();
  let dashesToPrint = "";
  for (var i = 0; i < wordToGuess.length; i++) {
    dashesToPrint += "- ";
  }
  let dok=document.getElementById("word");
 return dok ? dok.innerHTML=dashesToPrint: dashesToPrint;

}

function App() {

  return (
    <div className="container">

      <h2>**Hänga gubbe**</h2>
      <p>{explanationText}</p>
      <img src={hanger} className="hanger" alt="hanger" />
      <h2 id="word">{dashBuilder()}
      </h2>
      <p>Antal gissningar: {gussLeft}</p>
      <div className="buttonBox">{keyboardList}</div>
      <button className="tangent" onClick={() => {reset(); dashBuilder();}}> **Reset** </button>

    </div>
  );
  
}

export default App;
