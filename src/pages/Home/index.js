import { Button, SignupAlternative, Details, Input } from "../../components";

import user from "../../asset/img/user.svg";
import cancel from "../../asset/img/cancel.png";
import password from "../../asset/img/password.png";
import view from "../../asset/img/password-view.png"

const Home = () => {
    return (
        <main className="d-flex justify-center align-items-center column bg-wht">
            <div className="form__container d-flex column justify-center">
                <h1 className="center-text">sign in</h1>
                <div>
                    <p className="form__text">Welcome back!</p>
                    <p className="form__subtext">Please provide valid information to login to your account</p>
                    <Input
                        type="text"
                        name="number"
                        icon1={user}
                        icon2={cancel}
                        isIcon
                        placeholder="+234 000 000 000"
                    />
                    <div className="mt-28 mb-48">
                        <Input
                            type="password"
                            name="password"
                            icon1={password}
                            icon2={view}
                            isModify
                            isIcon
                            placeholder="Enter password"

                        />
                    </div>


                    <Button
                        bgColor="#0B3FA8"
                        text="sign in"
                        formFill
                    />

                    <div className="d-flex row justify-content-between mt-48">
                        < SignupAlternative
                            color="#144979"
                            text="I can't login, help me"
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

export default Home;