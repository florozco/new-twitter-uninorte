import "../../../styles/body.scss";
import "../../../styles/displayStyles.scss";

const Body = ({ className, children, ...rest }) => (
  <body className={className} {...rest}>
    <a className="inline">
      <div className="left-home-inline">
        "Aqui va el logo de twitter de blanco"
      </div>
      <div className="right-home-inline">{children}</div>
    </a>
  </body>
);

export default Body;
