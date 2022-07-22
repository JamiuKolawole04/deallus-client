import { SelectPlan, Details } from "../components";
import icon1 from "../asset/img/green_checkbox.svg";
import icon2 from "../asset/img/orange_checkbox.svg";
import icon3 from "../asset/img/purple_checkbox.svg";
import icon4 from "../asset/img/blue_checkbox.svg";
import icon5 from "../asset/img/torqouis_checkbox.svg";
import icon6 from "../asset/img/red_checkbox.svg";
import icon7 from "../asset/img/black.svg";

export const ChurchPlansAndPricing = () => {
  return (
    <main className="d-flex column align-items-center ash-bg church-plans__container">
      <p className="plans__text">Plans and Pricing</p>
      <p className="plans__subtext">
        All plans and pricing comes with 30 days free trial and <br /> includes
        all features. Select a plan to set up your church
      </p>
      <div>
        <SelectPlan
          size="100"
          icon={icon1}
          planInNaira="3,500"
          planInDollars="10"
          bgColor="#55D883"
          range="are between 0 - 100"
        />
        <SelectPlan
          size="250"
          icon={icon2}
          planInNaira="5,000"
          planInDollars="14"
          bgColor="#FE8F29"
          range="are between 101 - 250"
        />
        <SelectPlan
          size="500"
          icon={icon3}
          planInNaira="6,500"
          planInDollars="18"
          bgColor="#5F0CC9"
          range="are between 251 - 500"
        />
        <SelectPlan
          size="1000"
          icon={icon4}
          planInNaira="9,000"
          planInDollars="25"
          bgColor="#0b3ea7"
          range="are between 501 - 1,000"
        />
        <SelectPlan
          size="2500"
          icon={icon5}
          planInNaira="15,000"
          planInDollars="42"
          bgColor="#29bffe"
          range="are between 1100 - 2,500"
        />
        <SelectPlan
          size="4000"
          icon={icon6}
          planInNaira="20,00"
          planInDollars="56"
          range="are between 2501 - 4,000"
          bgColor="#db045f"
        />
        <SelectPlan
          size="U"
          icon={icon7}
          planInNaira="30,000"
          planInDollars="100"
          bgColor="#2c3b4e"
          range="are above 4000"
        />
      </div>
      <Details />
    </main>
  );
};
