import { Link } from "react-router-dom";

const Details = () => {
    return (
        <div className="details__link">
            <Link to="#">About </Link> <span className="dot"></span>
            <Link to="#">Contact</Link> <span className="dot"></span>
            <Link to="#">Features</Link> <span className="dot"></span>
            <Link to="#">Terms</Link> <span className="dot"></span>
            <Link to="#">Privacy policy</Link>
        </div>


    );
}

export default Details