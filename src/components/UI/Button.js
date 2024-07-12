import React from "react";
// import "./Button.css"
import styled from "styled-components";

const Button = (props) => {
  return <ButtonStyled {...props} onClick={props.onClick}>{props.children}</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button`
padding: ${(props) => props.padding || "8px 34px"};
  /* padding: 8px 34px; */
  font-size: 1.5rem;
  font-style: italic;
  border-radius: 6px;
  border: none;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: rgb(28, 29, 27);
    color: white;
    transition-duration: 0.5s;
    box-shadow: rgba(241, 239, 239, 0.24) 0px 3px 8px;
  }
`;
