import { Input, Button, SignupAlternative, Details } from "../../components";
import home from "../../asset/img/church_signup_name.svg";
import cancel from "../../asset/img/church_signup_name_cancel.png";
import email from "../../asset/img/email.png";
import view from "../../asset/img/password-view.png";
import password from "../../asset/img/password.png";
import churchHandle from "../../asset/img/church_signup_handle.png";
import referral from "../../asset/img/referral.svg";

const SignupNewChurch = () => {
    return (
        <main className="d-flex column justify-center align-items-center ash-bg">
            <div className="form__container d-flex column justify-center ">
                <h1 className="center-text">sign up</h1>
                <div>
                    <div className="d-flex">
                        <div className="ps-relative">
                            <p className="form__text">Register your church details</p>
                            <p className="form__subtext">Setup your church basic profile</p>
                        </div>
                        <div className="ps-abs" id="members__info">
                            <p className="ps-abs re">Yearly members and <br /> visitors up to 2,500</p>
                        </div>
                    </div>
                    <Input
                        type="text"
                        name="name"
                        icon1={home}
                        icon2={cancel}
                        placeholder="Church name"
                    />
                    <div className="mt-28">
                        <Input
                            type="email"
                            name="email"
                            icon1={email}
                            placeholder="Church email address"
                            modify
                        />
                    </div>
                    <div className="mt-28">
                        <Input
                            type="url"
                            name="handle"
                            icon1={churchHandle}
                            placeholder="Church handle"
                            modify
                        />
                    </div>

                    <div className="mt-28">
                        <Input
                            type="password"
                            name="password"
                            icon2={view}
                            icon1={password}
                            placeholder="Choose a password for your church"
                            modify
                        />
                    </div>

                    <p id="referral_id">Referral ID(optional)</p>
                    <Input
                        type="text"
                        name="referral"
                        icon1={referral}
                        placeholder="Enter referral ID"
                    />
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

export default SignupNewChurch