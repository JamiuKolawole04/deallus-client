import { Link } from "react-router-dom";


const SignupAlternative = ({ text, color, signup, help }) => {
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
            to={signup ? "/signup" : help ? "/forgot-password" : "/login"}
        >
            {text}
        </Link>
    );

}

export default SignupAlternative;