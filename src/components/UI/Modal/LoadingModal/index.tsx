import { observer } from "mobx-react-lite";
import React from "react";
import Modal from "..";
import * as SC from "./style";
import { HashLoader } from "react-spinners";
import Colors from "constants/colors";

const LoadingModal = observer(() => {
  const size = 100;

  return (
    <Modal name='loading' closeOnWrapperClick={false}>
      <SC.Icon size={size}>
        <HashLoader size={size} color={Colors.GREEN} />
      </SC.Icon>
      <SC.Label>Wait a little</SC.Label>
    </Modal>
  );
});

export default LoadingModal;
