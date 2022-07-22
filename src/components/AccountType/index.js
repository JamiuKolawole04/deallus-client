import { Link } from "react-router-dom";


const AccountType = ({ accImg1, accImg2, text, color }) => {
    let link = "";
    const style = {
        color: color
    }



    if (text === "Setup New Church") {
        link = "/signup/church"
    }

    if (text === "Church staff") {
        link = "/signup/staff"
    }



    return (
        <div className="acc__type">
            <Link to={link} style={style}>
                <img src={accImg1} alt="" />
                <img src={accImg2} alt="" />
                <p>{text}</p>
            </Link>
        </div>

    );
}

export default AccountType