import "../../../styles/label.scss";

const Label = ({ text, className, ...rest }) => (
  <>
    <label className={className} {...rest}>
      {text}
    </label>
  </>
);

export default Label;
