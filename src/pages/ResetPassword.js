import { useRef, useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SignupAlternative, Details } from "../components";
import { togggleShowPassword } from "../utils/toggleShowPassword";
import passwordIcon from "../asset/img/password.png";
import view from "../asset/img/password-view.png";

export const ResetPassword = () => {
  const ref = useRef();
  const ref2 = useRef();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [refElement, setRefElement] = useState();
  const [refElement2, setRefElement2] = useState();

  useEffect(() => {
    setRefElement(ref.current);
    setRefElement2(ref2.current);
  }, []);

  const validateFields = useCallback(() => {
    setErrorMessage("");
    if (newPassword === "" || confirmPassword === "") {
      return setErrorMessage("Passwords must be present");
    }
    if (newPassword.length < 5 || confirmPassword.length < 5) {
      return setErrorMessage("Password lenght must not  be less than 5");
    }
    if (newPassword !== confirmPassword) {
      return setErrorMessage("Passwords do not match");
    }

    navigate("/plans", { replace: true });
  }, [navigate, newPassword, confirmPassword]);

  return (
    <main className="d-flex column align-items-center ash-bg">
      <div className="form__container d-flex column justify-center ">
        <h1 className="center-text">reset password</h1>
        <div>
          <p className="form__text">Reset your password</p>
          <p className="form__subtext">
            Please carefully create a new password and confirm reet to sign in
            to <br /> your account
          </p>
          {errorMessage && (
            <div className="err">
              <p>{errorMessage}</p>
            </div>
          )}
          <div className="input d-flex align-items-center">
            <button>
              <img src={passwordIcon} className="password__icon" alt="" />
            </button>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              value={newPassword}
              onChange={({ target }) => setNewPassword(target.value)}
              placeholder="New password"
              ref={ref}
            />
            <button>
              <img
                className="passwordView__icon"
                onClick={() => togggleShowPassword(refElement)}
                src={view}
                alt=""
              />
            </button>
          </div>
          <div className="mt-28 mb-48">
            <div className="input d-flex align-items-center">
              <button>
                <img src={passwordIcon} className="password__icon" alt="" />
              </button>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={({ target }) => setConfirmPassword(target.value)}
                placeholder="Confirm new password"
                ref={ref2}
              />
              <button>
                <img
                  className="passwordView__icon"
                  onClick={() => togggleShowPassword(refElement2)}
                  src={view}
                  alt=""
                />
              </button>
            </div>
          </div>
          <button className="validation__btn" onClick={validateFields}>
            confirm password reset
          </button>
          <div className="d-flex row justify-content-between mt-48">
            <SignupAlternative color="#144979" text="Sign In" />
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
