import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { SignupAlternative, Details } from "../components";
import { togggleShowPassword } from "../utils/toggleShowPassword";
import user from "../asset/img/user.svg";
import cancel from "../asset/img/cancel.png";
import passwordIcon from "../asset/img/password.png";
import view from "../asset/img/password-view.png";

export const Signin = () => {
  const ref = useRef();
  const ref2 = useRef();
  const navigate = useNavigate();

  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [refElement, setRefElement] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const validateFields = useCallback(() => {
    setErrorMessage("");
    if (number === "" || password === "") {
      return setErrorMessage("Fill all the required fields");
    }
    if (number.length < 12) {
      return setErrorMessage("Number length cannot be less than 12");
    }
    if (isNaN(number)) {
      return setErrorMessage("please input a valid number");
    }
    navigate("/plans", { replace: true });
  }, [number, password, navigate]);

  useEffect(() => {
    setRefElement(ref.current);
  }, []);

  const cancelNumber = () => {
    setNumber("");
    ref2.current.focus()
  }

  return (
    <main className="d-flex  align-items-center column bg-wht">
      <div className="form__container d-flex column justify-center">
        <h1 className="center-text">sign in</h1>
        <div>
          <p className="form__text">Welcome back!</p>
          <p className="form__subtext">
            Please provide valid information to login to your account
          </p>
          {errorMessage && (
            <div className="err">
              <p>{errorMessage}</p>
            </div>
          )}
          <div className="input d-flex align-items-center">
            <button>
              <img className="login__icon" src={user} alt="" />
            </button>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={number}
              onChange={({ target }) => setNumber(target.value)}
              placeholder="+234 000 000 000"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{3}"
              ref={ref2}
            />
            <button>
              <img
                onClick={cancelNumber}
                src={cancel}
                className="cancel__icon"
                alt=""
              />
            </button>
          </div>

          <div className="mt-28 mb-48">
            <div className="input d-flex align-items-center">
              <button>
                <img className="password__icon" src={passwordIcon} alt="" />
              </button>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                placeholder="Enter password"
                ref={ref}
              />
              <button>
                <img
                  className="passwordView__icon"
                  // onClick={togggleShowPassword}
                  src={view}
                  alt=""
                  onClick={() => togggleShowPassword(refElement)}
                />
              </button>
            </div>
          </div>

          <button className="validation__btn" onClick={validateFields}>
            sign in
          </button>

          <div className="d-flex row justify-content-between mt-48">
            <SignupAlternative
              color="#144979"
              text="I can't login, help me"
              help
            />
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
