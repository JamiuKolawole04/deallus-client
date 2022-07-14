import greenCheckbox from "../../asset/img/green_checkbox.svg";

const SelectPlan = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <p>Congregation size up to 100</p>
                <img src={greenCheckbox} alt="" />
            </div>
            <div className="border"></div>
            <div className="plans">
                NGN/month
            </div>
        </div>
    );
}

export default SelectPlan