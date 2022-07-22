import { Button } from "../index";

const SelectPlan = ({
  size,
  icon,
  planInNaira,
  planInDollars,
  bgColor,
  range,
}) => {
  let txt;
  if (size.startsWith("U")) {
    txt = "Unlimited members and visitors";
  } else {
    txt = `Congregation size up to ${size}`;
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between plan__cards">
        <h5>{txt}</h5>
        <img src={icon} alt="" />
      </div>
      <div className="border"></div>
      <div className="plans__content">
        <div className=" d-flex justify-content-between">
          <div>
            <p>NGN/month</p>
            <p>{planInNaira}</p>
            <p>Bill yearly</p>
          </div>
          <div>
            <p>/month</p>
            <p>${planInDollars}</p>
            <p>Bill yearly</p>
          </div>
        </div>

        <p>
          Selecting this plan means that your <br /> yearly members and visitors
          are <br /> {range}
        </p>
        <Button text="select plan" bgColor={bgColor} drShadow formFill />
      </div>
    </div>
  );
};

export default SelectPlan;
