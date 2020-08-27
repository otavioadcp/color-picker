import React from "react";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  max-width: 100%;
  height: auto;
  display: "block";
`;

const Modal = ({ modal, show, children }) => {
  return (
    <>
      <ModalWrapper ref={modal} show={show}>
        {children}
      </ModalWrapper>
    </>
  );
};

export default Modal;
