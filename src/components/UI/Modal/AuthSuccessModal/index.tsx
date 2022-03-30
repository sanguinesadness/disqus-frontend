import Button from "components/UI/Button";
import { observer } from "mobx-react-lite";
import React from "react";
import { authStore } from "stores/authStore";
import { ReactComponent as DudeIllustration } from "assets/illustrations/dude-laptop.svg";
import Modal from "..";
import * as SC from "./style";
import { modalsStore } from "stores/modalsStore";

const AuthSuccessModal = observer(() => {
  if (!authStore.website) return <></>;

  const handleModalClose = () => modalsStore.close();

  return (
    <Modal name='auth-success'>
      <SC.Wrapper>
        <SC.Header>
          <SC.Title>Hello, {authStore.website.name}</SC.Title>
        </SC.Header>
        <SC.Body>
          <span>Your public key:</span>
          <SC.Token>{authStore.website.token}</SC.Token>
          <SC.Illustration>
            <DudeIllustration />
          </SC.Illustration>
        </SC.Body>
        <SC.Footer>
          <SC.Strong>Do not share it with anyone</SC.Strong>
          <Button
            text='Ok'
            color='green'
            fullWidth
            light
            onClick={handleModalClose}
          />
        </SC.Footer>
      </SC.Wrapper>
    </Modal>
  );
});

export default AuthSuccessModal;
