import { Input, Button, SignupAlternative, Details } from "../components";
import churchHandle from "../asset/img/@.png";
import complete from "../asset/img/green_checkbox.svg";
import founder from "../asset/img/founder.png";


export const SignupChurchDetails = () => {
    return (
        <main className="d-flex justify-center align-items-center column ash-bg">
            <div className="form__container d-flex column justify-center">
                <h1 className="center-text">sign up</h1>
                <div>
                    <p className="form__text">Confirm your church details </p>
                    <p className="form__subtext">Please provide the phone number associated with your church</p>
                    <p id="church__handle">Enter your church handle</p>
                    <Input
                        type="url"
                        name="handle"
                        icon1={churchHandle}
                        icon2={complete}
                        placeholder="DeallusChurch"
                        isModify
                        isIcon
                    />
                    <div className="d-flex align-items-center row church__info" >
                        <img src={founder} alt="" />
                        <div className="ml-24">
                            <p>Deallus Church Ministries</p>
                            <p>Pst.Dorris Beautittude</p>
                            <address>Ikeja, Lagos, Nigeria</address>
                        </div>
                    </div>
                    <Button
                        bgColor="#0B3FA8"
                        text="proceed"
                        formFill
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
}
