import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import * as SC from "./style";
import { CSSTransition } from "react-transition-group";
import { WRAPPER_ID } from "constants/config";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, open, onClose }) => {
  const root = document.getElementById(WRAPPER_ID);
  const modalWrapperId = "modal-wrapper";

  const onWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement;
    if (element.id === modalWrapperId) onClose();
  };

  const content = (
    <CSSTransition unmountOnExit in={open} classNames='fade' timeout={200}>
      <SC.ModalWrapper onClick={onWrapperClick} id={modalWrapperId}>
        <SC.Modal>{children}</SC.Modal>
      </SC.ModalWrapper>
    </CSSTransition>
  );

  if (root) return ReactDOM.createPortal(content, root);
  else return <></>;
};

export default Modal;
