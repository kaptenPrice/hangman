import React from 'react';
import ButtonComponent from './ButtonComponent'

const Keyboard = ({isDisabled,handleOnClick}) => {
    const alphabetsArr = "abcdefghijklmnopqrstuvwxyzåäö".split('');
    return alphabetsArr.map((elem) => (
        <ButtonComponent
            isClicked={handleOnClick}
            key={elem}
            ltr={elem}
            isDisabled={isDisabled.includes(elem)}
        />
    ));
}
export default Keyboard;

