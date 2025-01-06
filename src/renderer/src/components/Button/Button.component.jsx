import React from 'react';
import {ButtonNavigator} from "./button.styled";

const Button = ({ActionLink, ButtonText}) => {
  return (
    <ButtonNavigator to={`/${ActionLink}`}>
      <button>{ButtonText}</button>
    </ButtonNavigator>
  );
};

export default Button;
