import { useState } from "react";


const Input = ({ type, name, icon1, icon2, isModify, placeholder, isIcon }) => {
    const [credentials, setCredentials] = useState({
        number: undefined,
        password: undefined,
        handle: undefined,
        email: undefined
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    }

    const icon1Width = {
        width: isModify ? "12px" : "16px"
    }

    const icon2Width = {
        width: isModify ? "18px" : "12px"
    }

    const inputStyle = {
        paddingLeft: isIcon ? "60px" : "20px"
    }



    return (
        <div className="input d-flex align-items-center">
            <button>
                <img style={icon1Width} src={icon1} alt="" />
            </button>
            <input
                style={inputStyle}
                type={type}
                name={name}
                id={name}
                onChange={handleChange}
                placeholder={placeholder}
            />
            <button>
                <img style={icon2Width} src={icon2} alt="" />
            </button>
        </div>

    );
}

export default Input;