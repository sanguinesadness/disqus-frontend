import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as SC from "./app.style";
import LoginPage from "components/screens/Login";
import RegisterPage from "components/screens/Register";
import { WRAPPER_ID } from "constants/config";
import { APP_ROUTES } from "constants/routes";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/register");
    }
  }, [location.pathname]);

  return (
    <SC.Wrapper id={WRAPPER_ID}>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<RegisterPage />} />
        <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={APP_ROUTES.REGISTER} element={<RegisterPage />} />
      </Routes>
    </SC.Wrapper>
  );
}

export default App;
