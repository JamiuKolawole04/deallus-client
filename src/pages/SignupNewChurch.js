import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { SignupAlternative, Details } from "../components";
import { togggleShowPassword } from "../utils/toggleShowPassword";
import home from "../asset/img/church_signup_name.svg";
import cancel from "../asset/img/church_signup_name_cancel.png";
import emailIcon from "../asset/img/email.png";
import view from "../asset/img/password-view.png";
import passwordIcon from "../asset/img/password.png";
import churchHandle from "../asset/img/church_signup_handle.png";
import referralIcon from "../asset/img/referral.svg";

export const SignupNewChurch = () => {
  const ref = useRef();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [refElement, setRefElement] = useState();

  const validateFields = useCallback(() => {
    setErrorMessage("");
    if (name === "" || password === "" || email === "" || handle === "") {
      return setErrorMessage("Fill all the required fields");
    }

    if (name.length < 3) {
      return setErrorMessage("church name must not be less than 3 words ");
    }

    if (password.length < 5) {
      return setErrorMessage("Password length must not be less than 5");
    }

    navigate("/plans", { replace: true });
  }, [name, password, handle, email, navigate]);

  useEffect(() => {
    setRefElement(ref.current);
  }, []);

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
        <h1 className="center-text">sign up</h1>
        <div>
          <div className="d-flex">
            <div className="ps-relative">
              <p className="form__text">Register your church details</p>
              <p className="form__subtext">Setup your church basic profile</p>
            </div>

            <div className="ps-abs" id="members__info">
              <p className="ps-abs re">
                Yearly members and <br /> visitors up to 2,500
              </p>
            </div>
          </div>
          {errorMessage && (
            <div className="err">
              <p>{errorMessage}</p>
            </div>
          )}
          <div className="input d-flex align-items-center">
            <button>
              <img src={home} className="church__icon" alt="" />
            </button>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={({ target }) => setName(target.value)}
              placeholder="Church name"
            />
            <button>
              <img src={cancel} className="cancel__icon" alt="" />
            </button>
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
                <img src={churchHandle} className="churchHandle__icon" alt="" />
              </button>
              <input
                type="url"
                name="handle"
                id="handle"
                value={handle}
                onChange={({ target }) => setHandle(target.value)}
                placeholder="Church handle"
              />
              <button>
                <img src="" alt="" />
              </button>
            </div>
          </div>

          <div className="mt-28">
            <div className="input d-flex align-items-center">
              <button>
                <img className="password__icon" src={passwordIcon} alt="" />
              </button>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                ref={ref}
                onChange={({ target }) => setPassword(target.value)}
                placeholder="Choose a password for your church"
              />
              <button>
                <img
                  onClick={() => togggleShowPassword(refElement)}
                  src={view}
                  className="passwordView__icon"
                  alt=""
                />
              </button>
            </div>
          </div>

          <p id="referral_id">Referral ID(optional)</p>
          <div className="input d-flex align-items-center">
            <button>
              <img src={referralIcon} className="referral__icon" alt="" />
            </button>
            <input
              type="text"
              name="referral"
              id="referral"
              value={referral}
              onChange={({ target }) => setReferral(target.value)}
              placeholder="Enter referral ID"
            />
            <button>
              <img src="" alt="" />
            </button>
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
