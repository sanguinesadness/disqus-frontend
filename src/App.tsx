import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as SC from "./app.style";
import LoginPage from "components/screens/Login";
import RegisterPage from "components/screens/Register";
import { WRAPPER_ID } from "constants/config";
import { APP_ROUTES } from "constants/routes";
import LoadingModal from "components/UI/Modal/LoadingModal";
import Toasts from "components/UI/Toasts";
import { observer } from "mobx-react-lite";
import { authStore } from "stores/authStore";
import AuthSuccessModal from "components/UI/Modal/AuthSuccessModal";
import { modalsStore } from "stores/modalsStore";

const App = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/register");
    }
  }, [location.pathname]);

  useEffect(() => {
    authStore.fetchCurrentWebsite();
  }, []);

  useEffect(() => {
    if (authStore.website) modalsStore.openAuthSuccess();
  }, [authStore.website]);

  return (
    <SC.Wrapper id={WRAPPER_ID}>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<RegisterPage />} />
        <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={APP_ROUTES.REGISTER} element={<RegisterPage />} />
      </Routes>
      <LoadingModal />
      <AuthSuccessModal />
      <Toasts />
    </SC.Wrapper>
  );
});

export default App;
