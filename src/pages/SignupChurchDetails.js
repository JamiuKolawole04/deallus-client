import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { SignupAlternative, Details } from "../components";
import churchHandleIcon from "../asset/img/@.png";
import checked from "../asset/img/green_checkbox.svg";
import founder from "../asset/img/founder.png";

export const SignupChurchDetails = () => {
  const navigate = useNavigate();

  const [churchHandle, setChurchHandle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateFields = useCallback(() => {
    setErrorMessage("");
    if (churchHandle === "") {
      return setErrorMessage("Church handle is required");
    }
    navigate("/plans", { replace: true });
  }, [churchHandle, navigate]);

  return (
    <main className="d-flex justify-center align-items-center column ash-bg">
      <div className="form__container d-flex column justify-center">
        <h1 className="center-text">sign up</h1>
        <div>
          <p className="form__text">Confirm your church details </p>
          <p className="form__subtext">
            Please provide the phone number associated with your church
          </p>
          <p id="church__handle">Enter your church handle</p>
          {errorMessage && (
            <div className="err">
              <p>{errorMessage}</p>
            </div>
          )}
          <div className="input d-flex align-items-center">
            <button className="pr">
              <img
                src={churchHandleIcon}
                className="churchHandle__icon"
                alt=""
              />
            </button>
            <input
              type="url"
              name="handle"
              id="handle"
              value={churchHandle}
              onChange={({ target }) => setChurchHandle(target.value)}
              // onChange={handleChange}
              placeholder="DeallusChurch"
            />
            <button>
              <img src={checked} className="login__icon" alt="" />
            </button>
          </div>
          <div className="d-flex align-items-center row church__info">
            <img src={founder} alt="" />
            <div className="ml-24">
              <p>Deallus Church Ministries</p>
              <p>Pst.Dorris Beautittude</p>
              <address>Ikeja, Lagos, Nigeria</address>
            </div>
          </div>
          <button className="validation__btn" onClick={validateFields}>
            proceed
          </button>
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
