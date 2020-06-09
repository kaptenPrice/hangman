import React, { Component, useState, useEffect } from 'react';
import hanger1 from './imageMapp/1.jpg';
import hanger2 from './imageMapp/2.jpg';
import hanger3 from './imageMapp/3.jpg';
import hanger4 from './imageMapp/4.jpg';
import hanger5 from './imageMapp/5.jpg';
import hanger6 from './imageMapp/6.jpg';
import hanger7 from './imageMapp/7.jpg';
import './style/hangman.css';
import randWordGenerator from './words';
import Keyboard from './components/Keyboard';
const explanationText = "Bakom strecken döljer sig ett ord.Gissa ordet och tryck på reset om du vill få fram ett nytt ord.";

const Hangman = () => {
    const images = [hanger1, hanger2, hanger3, hanger7, hanger4, hanger5, hanger6];
    const maxWrong = 6;
    const [answer, setAnswer] = useState(randWordGenerator);
    const [clickedButtons, setClickedButtons] = useState([]);
    const [wrongGuess, setwrongGuess] = useState(0);
    const [guessedLtr, setGuessedLtr] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const gameOver = wrongGuess >= maxWrong;

    const isDisabled = (e) => {
        setClickedButtons(clickedButtons.concat(e))
    };

    const handleGuess = (letter) => {
        setGuessedLtr(guessedLtr.concat(letter));
        setwrongGuess((answer.includes(letter.toLowerCase()) ? wrongGuess : wrongGuess + 1))
    }

    const guessWord = () => {
        let splittedWord = answer.split("");
        return splittedWord.map((elem) => (guessedLtr.includes(elem.toLowerCase()) ? elem : "_"));
        console.log(test);
        // return test;
    }
    const reset = () => {
        setClickedButtons([]);
        setwrongGuess(0);
        setGuessedLtr([]);
        setAnswer(randWordGenerator);
    }


    const isWinner = () => {
        if (wrongGuess < maxWrong) {
            return guessWord().includes("_") ? "" : "You won";

        }
        else {
            return "Lost"
        }
    };


    return (

        <div className="hangman">
            <h2>**Hänga gubbe**</h2>
            <p>{explanationText}</p>
            <img src={images[wrongGuess]} alt="hanger" />
            <p style={{fontWeight:"bold", fontSize:"35px"}}>{isWinner()}</p>
            <h2 className="hangman-Word">{!gameOver ? guessWord() : answer}</h2>
            <p >Antal felgissningar: {wrongGuess}</p>
            <div className="hangman-btns">
                <Keyboard
                    isDisabled={clickedButtons}
                    handleOnClick={(e) => { isDisabled(e); handleGuess(e) }}
                />
            </div>
            <button
                className="resetBtn"
                onClick={reset}
            >
                Återställ </button>

        </div>
    );
}


export default Hangman;
