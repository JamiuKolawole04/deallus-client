import { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Details, SignupAlternative } from "../components";
import { togggleShowPassword } from "../utils/toggleShowPassword";
import userSignup1 from "../asset/img/user-signup1.png";
import userSignup2 from "../asset/img/user-signup2.png";
import emailIcon from "../asset/img/email.png";
import passwordIcon from "../asset/img/password.png";
import view from "../asset/img/password-view.png";

export const SignupNewStaff = () => {
  const ref = useRef();
  const navigate = useNavigate();

  const [refElement, setRefElement] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateFields = useCallback(() => {
    setErrorMessage("");
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === ""
    ) {
      return setErrorMessage("Fill all the required fields");
    }
    if (firstName.length < 3 || lastName.length < 3) {
      return setErrorMessage(
        "first and last name must not be less than 3 words "
      );
    }

    if (password.length < 5) {
      return setErrorMessage("Password length must be less than 5");
    }

    navigate("/plans", { replace: true });
  }, [email, password, firstName, lastName, navigate]);

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

  useEffect(() => {
    setRefElement(ref.current);
  }, []);

  return (
    <main className="d-flex column  align-items-center ash-bg">
      <div className="form__container d-flex column justify-center ">
        <h1 className="center-text">sign up</h1>
        <div>
          <p className="form__text">Please register your details</p>
          <p className="form__subtext">Setup your personal profile</p>
          {errorMessage && (
            <div className="err">
              <p>{errorMessage}</p>
            </div>
          )}
          <div className="d-flex row justify-content-between align-items-center">
            <div className="fx-g-1">
              <div className="input d-flex align-items-center">
                <button>
                  <img src={userSignup1} alt="" />
                </button>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={({ target }) => setFirstName(target.value)}
                  placeholder="Oluatobi"
                />
                <button>
                  <img src="" alt="" />
                </button>
              </div>
            </div>

            <div className="fx-g-1 ml-12">
              <div className="input d-flex align-items-center">
                <button>
                  <img src={userSignup2} alt="" />
                </button>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={({ target }) => setLastName(target.value)}
                  placeholder="Last name"
                />
                <button>
                  <img src="" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-28">
            <div className="input d-flex align-items-center">
              <button>
                <img src={emailIcon} className="email__icon" alt="" />
              </button>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
              />
              <button>
                <img src="" alt="" />
              </button>
            </div>
          </div>
          <div className="mt-28">
            <div className="input d-flex align-items-center">
              <button>
                <img src={passwordIcon} className="password__icon" alt="" />
              </button>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                placeholder="Choose a password"
                ref={ref}
              />
              <button>
                <img
                  className="passwordView__icon "
                  onClick={() => togggleShowPassword(refElement)}
                  src={view}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="mt-48">
            <button className="validation__btn" onClick={validateFields}>
              submit and get started
            </button>
          </div>
          <div className="mt-28">
            <SignupAlternative
              color="#006BCE"
              text="Already have an account? Sign in here"
            />
          </div>
        </div>
      </div>
      <Details />
    </main>
  );
};
