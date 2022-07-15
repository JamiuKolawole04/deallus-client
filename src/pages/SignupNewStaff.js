import { Input, Button, Details, SignupAlternative } from "../components";
import userSignup1 from "../asset/img/user-signup1.png";
import userSignup2 from "../asset/img/user-signup2.png";
import email from "../asset/img/email.png";
import password from "../asset/img/password.png";
import view from "../asset/img/password-view.png";


export const SignupNewStaff = () => {
    return (
        <main className="d-flex column justify-center align-items-center ash-bg">
            <div className="form__container d-flex column justify-center ">
                <h1 className="center-text">sign up</h1>
                <div>
                    <p className="form__text">Please register your details</p>
                    <p className="form__subtext">Setup your personal profile</p>
                    <div className="d-flex row justify-content-between align-items-center">
                        <div className="fx-g-1">
                            <Input
                                type="text"
                                name="firstname"
                                icon1={userSignup1}
                                placeholder="Oluwatobi"
                                isIcon
                            />
                        </div>

                        <div className="fx-g-1 ml-12">
                            <Input
                                type="text"
                                name="lastname"
                                icon1={userSignup2}
                                placeholder="Last name"
                                isIcon
                            />
                        </div>

                    </div>
                    <div className="mt-28">
                        <Input
                            type="email"
                            name="email"
                            icon1={email}
                            placeholder="Email"
                            isIcon
                        />
                    </div>
                    <div className="mt-28">
                        <Input
                            type="password"
                            name="password"
                            icon1={password}
                            icon2={view}
                            placeholder="Choose a password"
                            isModify
                            isIcon
                        />
                    </div>
                    <div className="mt-48">
                        <Button
                            bgColor="#0B3FA8"
                            text="submit and get started"
                            formFill
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
}
