import "../../../styles/img.scss";

const Img = ({ src, className, alt, onClick, onChange, ...rest }) => (
  <>
    <img
      src={src}
      className={className}
      alt={alt}
      onChange={onChange}
      onClick={onClick}
    />
  </>
);

export default Img;
