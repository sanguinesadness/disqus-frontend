import React, { useState } from "react";
import * as SC from "./style";
import Input from "components/UI/Input";
import Button from "components/UI/Button";
import { Link } from "react-router-dom";
import { APP_ROUTES } from 'constants/routes';
import { ReactComponent as LogoIcon } from "assets/icons/logo.svg";

const RegisterPage = () => {
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const stateName = event.target.name;

    switch (stateName) {
      case "name":
        setName(value);
        break;
      case "url":
        setUrl(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  const handleResetFields = () => {
    setName("");
    setUrl("");
    setEmail("");
    setPassword("");
  };

  return (
    <SC.RegisterPage>
      <SC.LogoWrapper>
        <LogoIcon />
      </SC.LogoWrapper>
      <SC.Label>Connect new website</SC.Label>
      <SC.Form>
        <SC.Inputs>
          <Input
            label='Name'
            placeholder='Your company'
            name='name'
            type='text'
            value={name}
            onValueChange={handleValueChange}
          />
          <Input
            label='Url'
            placeholder='https://your-company.com'
            type='text'
            name='url'
            value={url}
            onValueChange={handleValueChange}
          />
          <Input
            label='Email'
            placeholder='your.company@example.com'
            type='email'
            name='email'
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
          <Button text='Submit' color='green' />
        </SC.Buttons>
      </SC.Form>
      <SC.Link>
        <span>or</span>
        <Link to={APP_ROUTES.LOGIN}>Sign in</Link>
      </SC.Link>
    </SC.RegisterPage>
  );
};

export default RegisterPage;
