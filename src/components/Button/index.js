
const Button = ({ text, bgColor, formFill, drShadow, validateForm }) => {

  const style = {
    backgroundColor: bgColor,
    width: formFill ? "100%" : "78%",
    border: `1px solid ${bgColor}`,
    filter: drShadow ? " drop-shadow(0px 14px 20px rgba(186, 193, 202, 0.5))" : "none"
  };

  return <button
    style={style}
    onClick={validateForm}
  >
    {text}
  </button>;
};

export default Button;
