import { Input, Button, SignupAlternative, Details } from "../../components";
import password from "../../asset/img/password.png";
import view from "../../asset/img/password-view.png";

const ResetPassword = () => {
    return (
        <main className="d-flex column justify-center align-items-center ash-bg">
            <div className="form__container d-flex column justify-center ">
                <h1 className="center-text">reset password</h1>
                <div>
                    <p className="form__text">Reset your password</p>
                    <p className="form__subtext">Please carefully create a new password and confirm reet to sign in to <br /> your account</p>
                    <Input
                        type="password"
                        name="password"
                        icon1={password}
                        icon2={view}
                        modify
                        placeholder="New password"
                    />
                    <div className="mt-28 mb-48">
                        <Input
                            type="password"
                            name="password"
                            icon1={password}
                            icon2={view}
                            modify
                            placeholder="Confirm new password"
                        />
                    </div>
                    <Button
                        bgColor="#0B3FA8"
                        text="confirm password reset"
                        formFill
                    />
                    <div className="d-flex row justify-content-between mt-48">
                        < SignupAlternative
                            color="#144979"
                            text="Sign In"
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

export default ResetPassword;