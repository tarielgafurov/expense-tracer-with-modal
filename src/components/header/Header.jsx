import React, { useState } from "react";
// import "./Header.css"
import Button from "../UI/Button";
import styled from "styled-components";

const Header = (props) => {
  return (
    <HeaderStyled>
      <h1>Expense-tracer</h1>
      <Button onClick={props.formHandler}>open</Button>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: gray;
  color: white;
  position: fixed;
  top: 0;
  z-index: 2;

  > h1{
    color: white;
  }
`;
