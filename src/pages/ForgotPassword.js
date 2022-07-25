import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { SignupAlternative, Details, Input, Button } from "../components";
import emailIcon from "../asset/img/email.png";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleValidateForm = useCallback(() => {
    setErrorMessage("");
    if (email === "") {
      return setErrorMessage("please enter email");
    }

    navigate("/plans", { replace: true });
  }, [navigate, email]);

  const isValidEmail = (emailCheck) => {
    return /\S+@\S+\.\S+/.test(emailCheck);
  };

  const handleEmail = (e) => {
    if (!isValidEmail(e.target.value)) {
      setEmail(e.target.value);
      return setErrorMessage("invalid email");
    } else {
      setErrorMessage("");
    }
    setEmail(e.target.value);
  };
  return (
    <main className="d-flex column  align-items-center ash-bg">
      <div className="form__container d-flex column justify-center ">
        <h1 className="center-text">forgot password</h1>
        <div>
          <p className="form__text">It seems you forgot your password</p>
          <p className="form__subtext">
            Please supply your email used during registration, to help us send
            you a <br /> reset link
          </p>
          {errorMessage && (
            <div className="err">
              <p>{errorMessage}</p>
            </div>
          )}
          <div className="mb-48 mt-28">
            <Input
              type="email"
              name="email"
              value={email}
              placeholder="Email address"
              preffixModifyWidth="16"
              prefix={emailIcon}
              handleChange={handleEmail}
            />
          </div>

          <div className="mt-28 mb-48">

            <Button
              text="SEND RESET LINK"
              formFill
              bgColor="#0B3FA8"
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              validateForm={handleValidateForm}
            />
          </div>

          <div className="d-flex row justify-content-between mt-48">
            <SignupAlternative color="#144979" text="I remeber my password" />
            <SignupAlternative
              color="#006BCE"
              text="Don't have an account? Sign up here"
              signup
            />
          </div>
        </div>
      </div>
      <Details />
    </main>
  );
};
