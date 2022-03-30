import { observer } from "mobx-react-lite";
import React from "react";
import { ReactComponent as CloseIcon } from "assets/icons/cross.svg";
import { toastsStore } from "stores/toastsStore";
import ReactDOM from "react-dom";
import { WRAPPER_ID } from "constants/config";
import * as SC from "./style";
import { CSSTransition } from "react-transition-group";
import { ANIM_NAMES } from "constants/animation";

const Toasts = observer(() => {
  const root = document.getElementById(WRAPPER_ID);
  const handleCloseClick = () => toastsStore.close();

  const content = (
    <SC.ToastsWrapper>
      <CSSTransition
        in={toastsStore.opened}
        unmountOnExit
        timeout={{ exit: 300 }}
        classNames={ANIM_NAMES.SCALE}
      >
        <SC.Toast type={toastsStore.type}>
          <SC.Message>{toastsStore.message}</SC.Message>
          <SC.Icon>
            <CloseIcon onClick={handleCloseClick} />
          </SC.Icon>
        </SC.Toast>
      </CSSTransition>
    </SC.ToastsWrapper>
  );

  if (root) return ReactDOM.createPortal(content, root);
  else return <></>;
});

export default Toasts;
