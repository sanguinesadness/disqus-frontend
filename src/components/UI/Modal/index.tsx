import React, { FC } from "react";
import ReactDOM from "react-dom";
import * as SC from "./style";
import { CSSTransition } from "react-transition-group";
import { WRAPPER_ID } from "constants/config";
import { ModalName, modalsStore } from "stores/modalsStore";
import { observer } from "mobx-react-lite";
import { ANIM_NAMES } from "constants/animation";

interface ModalProps {
  children: React.ReactNode;
  name: ModalName;
  onClose?: () => void;
  closeOnWrapperClick?: boolean;
}

const Modal: FC<ModalProps> = observer(
  ({ children, name, onClose, closeOnWrapperClick = true }) => {
    const root = document.getElementById(WRAPPER_ID);
    const modalWrapperId = "modal-wrapper";
    const isOpen = modalsStore.activeModal === name;

    const onWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const element = event.target as HTMLDivElement;
      if (element.id === modalWrapperId && closeOnWrapperClick) {
        onClose?.call(null);
        modalsStore.close();
      }
    };

    const content = (
      <CSSTransition
        unmountOnExit
        in={isOpen}
        classNames={ANIM_NAMES.FADE}
        timeout={{ exit: 300 }}
      >
        <SC.ModalWrapper onClick={onWrapperClick} id={modalWrapperId}>
          <SC.Modal>{children}</SC.Modal>
        </SC.ModalWrapper>
      </CSSTransition>
    );

    if (root) return ReactDOM.createPortal(content, root);
    else return <></>;
  }
);

export default Modal;
