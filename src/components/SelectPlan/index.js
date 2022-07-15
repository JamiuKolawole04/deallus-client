import checkIcon from "../../asset/img/green_checkbox.svg";
import { Button } from "../index";

const SelectPlan = ({ text }) => {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-between plan__cards">
                <h5>Congregation size up to 100</h5>
                <img src={checkIcon} alt="" />
            </div>
            <div className="border"></div>
            <div className="plans__content">
                <div className=" d-flex justify-content-between">
                    <div>
                        <p>NGN/month</p>
                        <p>3,500</p>
                        <p>Bill yearly</p>
                    </div>
                    <div>
                        <p>/month</p>
                        <p>$10</p>
                        <p>Bill yearly</p>
                    </div>
                </div>

                <p>Selecting this plan means that your <br /> yearly members and visitors are <br /> between 0 - 100</p>
                <Button
                    text="select plan"
                    bgColor="#55D883"
                    formFill
                />
            </div>

        </div>
    );
}

export default SelectPlan