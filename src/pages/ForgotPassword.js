import { Input, Button, SignupAlternative, Details } from "../components";
import email from "../asset/img/email.png";

export const ForgotPassword = () => {
    return (
        <main className="d-flex column justify-center align-items-center ash-bg">
            <div className="form__container d-flex column justify-center ">
                <h1 className="center-text">forgot password</h1>
                <div>
                    <p className="form__text">It seems you forgot your password</p>
                    <p className="form__subtext">Please supply your email used during registration, to help us send you a <br /> reset link</p>
                    <div className="mb-48 mt-28">
                        <Input
                            type="email"
                            name="email"
                            icon1={email}
                            placeholder="Email address"
                            isIcon
                        />
                    </div>

                    <div className="mt-28 mb-48">
                        <Button
                            bgColor="#0B3FA8"
                            text="SEND RESET LINK"
                            formFill
                        />
                    </div>

                    <div className="d-flex row justify-content-between mt-48">
                        < SignupAlternative
                            color="#144979"
                            text="I remeber my password"
                        />
                        < SignupAlternative
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
}
