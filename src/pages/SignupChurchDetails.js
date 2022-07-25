import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { SignupAlternative, Details, Input, Button } from "../components";
import churchHandleIcon from "../asset/img/@.png";
import checked from "../asset/img/green_checkbox.svg";
import founder from "../asset/img/founder.png";

export const SignupChurchDetails = () => {
  const navigate = useNavigate();

  const [churchHandle, setChurchHandle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleValidateForm = useCallback(() => {
    setErrorMessage("");
    if (churchHandle === "") {
      return setErrorMessage("Church handle is required");
    }
    if (churchHandle.length < 3) {
      return setErrorMessage("Church handle can't be less than 3 characters")
    }
    navigate("/plans", { replace: true });
  }, [churchHandle, navigate]);

  const handleChurchHandle = ({ target }) => {
    setChurchHandle(target.value)
  }

  return (
    <main className="d-flex align-items-center column ash-bg">
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
          <Input
            type="url"
            name="handle"
            prefix={churchHandleIcon}
            suffix={checked}
            preffixModifyWidth
            suffixModifyWidth
            value={churchHandle}
            handleChange={handleChurchHandle}
          />
          <div className="d-flex align-items-center row church__info">
            <img src={founder} alt="" />
            <div className="ml-24">
              <p>Deallus Church Ministries</p>
              <p>Pst.Dorris Beautittude</p>
              <address>Ikeja, Lagos, Nigeria</address>
            </div>
          </div>
          <Button
            text="log in"
            formFill
            bgColor="#0B3FA8"
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            validateForm={handleValidateForm}
          />
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
