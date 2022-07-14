import { AccountType, SignupAlternative, Details } from "../../components";
import church1 from "../../asset/img/church.png";
import church2 from "../../asset/img/orange-church.png";
import churchStaff1 from "../../asset/img/men.png";
import churchStaff2 from "../../asset/img/women.png";

const Signup = () => {
    return (
        <main className="d-flex column justify-center align-items-center ash-bg">
            <div className="form__container d-flex column justify-center ">
                <h1 className="center-text">sign up</h1>
                <div>
                    <p className="form__text">Create your account</p>
                    <p className="form__subtext">Choose an option for the type of account you would like to create</p>

                    <div className="d-flex justify-content-between">
                        <AccountType
                            accImg1={church1}
                            accImg2={church2}
                            text="Setup New Church"
                            color="#0B3FA8"
                        />
                        <AccountType
                            accImg1={churchStaff1}
                            accImg2={churchStaff2}
                            text="Church staff"
                            color="#7080A0"
                        />
                    </div>
                    <p className="acc__select">Please select this option to setup a new church account for the first time</p>
                    <SignupAlternative
                        color="#006BCE"
                        text="Already have an account? Sign in here"

                    />

                </div>
            </div>
            <Details />
        </main>
    );

}

export default Signup