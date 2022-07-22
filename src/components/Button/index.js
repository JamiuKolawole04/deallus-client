const Button = ({ text, bgColor, formFill, drShadow }) => {
  const style = {
    backgroundColor: bgColor,
    width: formFill ? "78%" : "12px",
    border: `1px solid ${bgColor}`,
    filter: drShadow ? " drop-shadow(0px 14px 20px rgba(186, 193, 202, 0.5))" : "none"
  };

  return <button style={style}>{text}</button>;
};

export default Button;
