import signUpSuccessImg from "../asset/img/signup_succes.png";
import { Details } from "../components";

export const SignupSuccessMsg = () => {
    return (
        <main className="ash-bg d-flex column align-items-center">
            <div className="form__container sucess-msg__container center-text">
                <img src={signUpSuccessImg} alt="" />
                <div>
                    <p className="form__text">Congratulations!</p>
                    <p className="form__subtext">Your account has been created successfully. We have sent <br />an email to <span className="usermail">emmabidem@gmail.com,</span>please check and <br /> activate your account.</p>

                </div>
            </div>
            <Details />
        </main>
    );
}

export default SignupSuccessMsg