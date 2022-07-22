import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { SignupAlternative, Details } from "../components";
import emailIcon from "../asset/img/email.png";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateFields = useCallback(() => {
    setErrorMessage("");
    if (email === "") {
      return setErrorMessage("please enter email");
    }

    navigate("/plans", { replace: true });
  }, [navigate, email]);

  const isValidEmail = (emailCheck) => {
    return /\S+@\S+\.\S+/.test(emailCheck);
  };

  const handleChange = (e) => {
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
            <div className="input d-flex align-items-center">
              <button>
                <img src={emailIcon} className="email__icon" alt="" />
              </button>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                // onChange={({ target }) => setEmail(target.value)}
                placeholder="Email address"
              />
              <button>
                <img src="" alt="" />
              </button>
            </div>
          </div>

          <div className="mt-28 mb-48">
            <button className="validation__btn" onClick={validateFields}>
              SEND RESET LINK
            </button>
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
