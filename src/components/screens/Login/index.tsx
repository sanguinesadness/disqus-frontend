import React, { useState } from "react";
import * as SC from "./style";
import { ReactComponent as LogoIcon } from "assets/icons/logo.svg";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "constants/routes";
import requestApi from "api";
import { modalsStore } from "stores/modalsStore";
import { loading } from "services/loading";
import { fakePromise } from "services/fake.promise";
import { toastsStore } from "stores/toastsStore";
import { authStore } from "stores/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const stateName = event.target.name;

    switch (stateName) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const handleResetFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleLoginSubmit = () => authStore.login({ email, password });
  
  return (
    <SC.LoginPage>
      <SC.LogoWrapper>
        <LogoIcon />
      </SC.LogoWrapper>
      <SC.Label>Sign in existing website</SC.Label>
      <SC.Form>
        <SC.Inputs>
          <Input
            label='Email'
            placeholder='your.company@example.com'
            name='email'
            type='email'
            value={email}
            onValueChange={handleValueChange}
          />
          <Input
            label='Password'
            placeholder='••••••••••••••'
            type='password'
            name='password'
            value={password}
            onValueChange={handleValueChange}
          />
        </SC.Inputs>
        <SC.Buttons>
          <Button text='Reset' color='gray' onClick={handleResetFields} />
          <Button text='Submit' color='green' onClick={handleLoginSubmit} />
        </SC.Buttons>
      </SC.Form>
      <SC.Link>
        <span>or</span>
        <Link to={APP_ROUTES.REGISTER}>Sign up</Link>
      </SC.Link>
    </SC.LoginPage>
  );
};

export default LoginPage;
