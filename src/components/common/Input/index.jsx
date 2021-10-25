import "../../../styles/input.scss";

const Input = (props) => {
  const { type, className, title, ...rest } = props;

  return (
    <>
      <input
        // id={id} // specify a unique id
        // name={name} //Name of the form control.
        placeholder={title} //appears in the form control when it has no value set
        type={type} //text || password
        className={className}
        {...rest}
      />
    </>
  );
};

export default Input;
