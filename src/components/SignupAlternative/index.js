import { Link } from "react-router-dom";


const SignupAlternative = ({ text, color, signup }) => {
    const style = {
        color: color,
        lineHeight: "24px",
        fontSize: "14px"
    }

    // if (text === "Setup New Church") {
    //     return (
    //         <Link
    //             to="/signup/church">
    //             {text}
    //         </Link>
    //     );
    // }

    // console.log(text);



    return (
        <Link
            style={style}
            to={signup ? "/signup" : "/login"}
        >
            {text}
        </Link>
    );

}

export default SignupAlternative;