import React, { Component, useState } from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import randWordGenerator from './words';
//import hanger from './imageMapp/hangerPic';
let wordToGuess = "";
let gussLeft = 0;
let explanationText = "Bakom strecken döljer sig ett ord.Gissa ordet och tryck på reset om du vill få fram ett nytt ord.";

class Hangman extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled:  new Set(),
            answer: randWordGenerator()

        };
        this.keyPressed=this.setState.bind(this);
        this.reset=this.setState.bind(this);

    };

    keyboardList() {
        const alphabetsArr = "abcdefghijklmnopqrstuvwxyzåäö".split('');
        return alphabetsArr.map((elem) => (
            <ButtonComponent
                isClicked={this.keyPressed}
                key={elem}
                ltr={elem}
                isDisabled={this.state.isDisabled}
            />
        ));
    }

    keyPressed(e){
        let ltrValue=e.target.innerText;
        this.setState((status)=>({isDisabled : status.isDisabled.add(ltrValue)}));
     };

    reset(){
        this.setState((status)=>({
            isDisabled : new Set(),
        }));
    }

   guessWord(){
       let splittedWord=this.state.answer.split("");
       return splittedWord.map((elem)=>"_");
   }

    render() {
        return (<div className="container">

            <h2>Hänga gubbe</h2>
            <p>{explanationText}</p>
            <h2 id="word">{this.guessWord()}
            </h2>
            <p>Antal gissningar: {gussLeft}</p>
            <div className="buttonBox">{this.keyboardList()}</div>
            <button className="resetBtn" onClick={this.reset()}> Återställ </button>

        </div>);
    }
}

export default Hangman;







