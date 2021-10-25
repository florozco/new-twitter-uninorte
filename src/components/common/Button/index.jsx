import "../../../styles/button.scss";

const Button = ({ text, className, onClick, ...rest }) => (
  <>
    <button className={className} onClick={onClick} {...rest}>
      {text}
    </button>
  </>
);

export default Button;
