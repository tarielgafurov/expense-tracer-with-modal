import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { createPortal } from "react-dom";

const Modal = ({onConfirm , onClose}) => {
  return (
    <>
      {createPortal(
        <>
          <Bacdrop></Bacdrop>
          <Card>
            <h3>Are your sure ?</h3>
            <ContainerButtons>
              <Button onClick={onConfirm} >YES</Button>
              <Button onClick={onClose} >NO</Button>
            </ContainerButtons>
          </Card>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;

const Card = styled.div`
  width: 370px;
  height: 220px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  position: fixed;
  left: 25%;
  top: 25%;
  z-index: 5;
  > h3 {
    font-size: 25px;
    font-family: "Jersey 15", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: white;
  }
`;

const ContainerButtons = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > button {
    padding: 8px 32px;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    &:hover {
      background-color: chartreuse;
      color: white;
      box-shadow: rgba(243, 241, 241, 0.35) 0px 5px 15px;
    }
    &:active {
      background-color: #d143b9;
    }
  }
`;

const Bacdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;
