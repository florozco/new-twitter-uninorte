import "../../../styles/displayStyles.scss";
import { useHistory } from "react-router-dom";
import Button from "./../../common/Button";
import Image from "../../../images/index";
import Img from "./../../common/Img";
import Label from "./../../common/Label";

export default function Home() {
  const history = useHistory();

  return (
    <div className="header-full">
      <p className="gen-flex-blue">
        <Img
          src={Image.twitterIcon}
          className="icon-white-tweeter-img"
          alt="twitter-logo"
        />
      </p>
      <p className="gen-flex-white">
        <Img
          src={Image.twitterIcon}
          className="icon-blue-twitter-welcome-img"
          alt="twitter-logo"
        />
        <p className="inline-left-13">
          <Label text="Welcome to Twitter" className="welcome-label" />
        </p>
        <p>
          <Button
            text="Login now"
            className="login-sign-button"
            onClick={() => history.push("/login")}
          />
        </p>
        <p className="inline-left-13">
          <Label text="Dont have an account?" className="no-account-label" />
          <Button
            text="Join free today"
            className="join-free-forgot-password-button"
            onClick={() => history.push("/signup")}
          />
        </p>
        <p>
          <Button
            text="Sign up"
            className="login-sign-button"
            onClick={() => history.push("/signup")}
          />
        </p>
      </p>
    </div>
  );
}
