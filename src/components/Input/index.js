import { togggleShowPassword } from "../../utils/toggleShowPassword";


const Input = ({ type, name, prefix, suffix, preffixModifyWidth, suffixModifyWidth, placeholder, value, handleChange, Ref, Ref2, refElement, setNumber, setName, refElement2 }) => {
    const handleCancel = () => {
        if (setNumber) {
            setNumber("");
        }
        if (setName) {
            console.log(refElement2);
            setName("");
        }
    }


    const prefixWidth = {
        width: preffixModifyWidth === "16" ? "16px" : preffixModifyWidth === "20" ? "20px" : preffixModifyWidth === "12" ? "12px" : "14px",
        cursor: "default"
    };

    const suffixWidth = {
        width: suffixModifyWidth === "12" ? "12px" : "18px",
    };

    const inputStyle = {
        paddingLeft: prefix ? "60px" : "20px",
    };



    return (

        <div className="input d-flex align-items-center">
            <button>
                <img
                    style={prefixWidth}
                    src={prefix}
                    alt=""
                />
            </button>
            <input
                style={inputStyle}
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                ref={Ref ? Ref : null}
                ref2={Ref2 ? Ref2 : null}
            />
            <button>
                <img
                    style={{ ...suffixWidth, cursor: "pointer" }}
                    // onClick={togggleShowPassword}
                    src={suffix}
                    alt=""
                    onClick={Ref ? () => togggleShowPassword(refElement || refElement2) : handleCancel}
                />
            </button>
        </div>



    );
};

export { Input };
