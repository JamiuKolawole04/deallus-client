import { SelectPlan } from "../components";


export const ChurchPlansAndPricing = () => {
    return (
        <main className="d-flex column align-items-center ash-bg church-plans__container">
            <p className="plans__text">Plans and Pricing</p>
            <p className="plans__subtext">All plans and pricing comes with 30 days free trial and <br /> includes all features. Select a plan to set up your church</p>
            <div>
                <SelectPlan />
                <SelectPlan />
                <SelectPlan />
                <SelectPlan />
                <SelectPlan />
                <SelectPlan />
                <SelectPlan />
                {/* <div>
                    <div className="d-flex justify-content-between">
                        <p>Congregation size up to 100</p>
                        <img src={greenCheckbox} alt="" />
                    </div>
                    <div className="border"></div>
                    <div className="plans">
                        NGN/month
                    </div>
                </div> */}


            </div>
        </main>
    );
}
