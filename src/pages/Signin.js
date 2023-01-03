import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SignupAlternative, Details, Input, Button } from "../components";
import user from "../asset/img/user.svg";
import cancel from "../asset/img/cancel.png";
import passwordIcon from "../asset/img/password.png";
import view from "../asset/img/password-view.png";



export const Signin = () => {
  const ref = useRef();
  const ref2 = useRef();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [refElement, setRefElement] = useState();
  const [refElement2, setRefElement2] = useState();


  const handleValidateForm = () => {
    setErrorMessage();
    if (number === "" || password === "") {
      return setErrorMessage("Fill all the required fields")
    }
    if (number.length < 12) {
      return setErrorMessage("Number length cannot be less than 12");
    }
    if (isNaN(number)) {
      return setErrorMessage("please input a valid number");
    }
    navigate("/plans", { replace: true })
  }




  const handleChange = ({ target }) => {
    setNumber(target.value)
  }

  const handlePassword = ({ target }) => {
    setPassword(target.value)
  }


  useEffect(() => {
    setRefElement(ref.current);
    setRefElement2(ref2.current)
  }, [setRefElement, setRefElement2]);

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
          <Input
            type="tel"
            name="number"
            prefix={user}
            suffix={cancel}
            placeholder="+234 000 000 000"
            preffixModifyWidth="16"
            suffixModifyWidth="12"
            setNumber={setNumber}
            value={number}
            handleChange={handleChange}
            Ref2={ref2}
            refElement2={refElement2}

          />



          <div className="mt-28 mb-48">
            <Input
              type="password"
              name="password"
              prefix={passwordIcon}
              suffix={view}
              placeholder="Enter password"
              handleChange={handlePassword}
              value={password}
              Ref={ref}
              refElement={refElement}
            />
          </div>

          <Button
            text="log in"
            formFill
            bgColor="#0B3FA8"
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            validateForm={handleValidateForm}
          />

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
