import { useState } from "react";


const Input = ({ type, name, icon1, icon2, modify, placeholder }) => {
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
        width: modify ? "12px" : "16px"
    }

    const icon2Width = {
        width: modify ? "18px" : "12px"
    }



    return (
        <div className="input d-flex align-items-center">
            <button>
                <img style={icon1Width} src={icon1} alt="" />
            </button>
            <input
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