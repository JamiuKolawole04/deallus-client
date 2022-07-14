
const Button = ({ text, bgColor, formFill }) => {

    const style = {
        backgroundColor: bgColor,
        width: formFill ? "100%" : "12px",
        border: `1px solid ${bgColor}`
    }


    return (
        <button style={style}>
            {text}
        </button>
    );
}

export default Button;