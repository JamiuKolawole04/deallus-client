import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { SignupAlternative, Details, Input, Button } from "../components";
// import { togggleShowPassword } from "../utils/toggleShowPassword";
import home from "../asset/img/church_signup_name.svg";
import cancel from "../asset/img/church_signup_name_cancel.png";
import emailIcon from "../asset/img/email.png";
import view from "../asset/img/password-view.png";
import passwordIcon from "../asset/img/password.png";
import churchHandleIcon from "../asset/img/church_signup_handle.png";
import referralIcon from "../asset/img/referral.svg";

export const SignupNewChurch = () => {
  const ref = useRef();
  const ref2 = useRef();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [churchHandle, setChurchHandle] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [refElement, setRefElement] = useState();
  const [refElement2, setRefElement2] = useState();




  const handleValidateForm = useCallback(() => {
    setErrorMessage("");
    if (name === "" || password === "" || email === "" || churchHandle === "") {
      return setErrorMessage("Fill all the required fields");
    }

    if (name.length < 3) {
      return setErrorMessage("church name must not be less than 3 words ");
    }

    if (password.length < 5) {
      return setErrorMessage("Password length must not be less than 5");
    }

    navigate("/plans", { replace: true });
  }, [name, password, churchHandle, email, navigate]);

  useEffect(() => {
    setRefElement(ref.current);
    setRefElement2(ref2.current)
  }, []);
  const handleName = ({ target }) => {
    setName(target.value)
  }

  const handleChurchHandle = ({ target }) => {
    setChurchHandle(target.value)
  }

  const handlePassword = ({ target }) => {
    setPassword(target.value)
  }

  const handleReferral = ({ target }) => {
    setReferral(target.value)
  }

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
          {/* <div className="input d-flex align-items-center">
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
          </div> */}
          <Input
            type="text"
            name="name"
            prefix={home}
            suffix={cancel}
            placeholder="Church name"
            preffixModifyWidth="20"
            suffixModifyWidth="12"
            value={name}
            handleChange={handleName}
            setName={setName}
            Ref2={ref2}
            refElement2={refElement2}


          />
          <div className="mt-28">
            <Input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              prefix={emailIcon}
              preffixModifyWidth="16"
              handleChange={handleEmail}
            />
          </div>
          <div className="mt-28">
            <Input
              type="url"
              name="handle"
              value={churchHandle}
              prefix={churchHandleIcon}
              placeholder="Church handle"
              handleChange={handleChurchHandle}
            />
          </div>

          <div className="mt-28">
            {/* <div className="input d-flex align-items-center">
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
            </div> */}
            <Input
              type="password"
              name="password"
              value={password}
              prefix={passwordIcon}
              suffix={view}
              preffixModifyWidth="12"
              suffixModifyWidth
              handleChange={handlePassword}
              Ref={ref}
              refElement={refElement}

            />
          </div>

          <p id="referral_id">Referral ID(optional)</p>
          <Input
            type="text"
            name="referral"
            value={referral}
            prefix={referralIcon}
            preffixModifyWidth
            handleChange={handleReferral}
          />
          <div className="mt-48">
            <Button
              text="submit and get started"
              formFill
              bgColor="#0B3FA8"
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              validateForm={handleValidateForm}
            />
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
