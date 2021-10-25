import "../../../styles/displayStyles.scss";
import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useForm } from "@mantine/hooks";
import {
  Container,
  Center,
  SimpleGrid,
  TextInput,
  Text,
  Button,
  PasswordInput,
} from "@mantine/core";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

import Image from "../../../images/index";
import Img from "./../../common/Img";
import Form from "./../../common/Form";
import { useHistory } from "react-router-dom";

/* import Button from "./../../common/Button";
import Form from "./../../common/Form";
import Input from "./../../common/Input";
import Label from "./../../common/Label";*/

export default function Login() {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const { login } = useAuth();

  const handleSubmit = async ({ username, password }) => {
    try {
      setLoading(true);
      await login(username, password);
      enqueueSnackbar("Logged in successfully", {
        variant: "success",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
      history.push("/timeline");
    } catch (err) {
      enqueueSnackbar(
        "There was an error loggin you in, verify your username and your password",
        {
          variant: "error",
          preventDuplicate: true,
          autoHideDuration: 3000,
        }
      );
    }
    setLoading(false);
  };

  return (
    <>
      <Container size="xs" padding="xs">
        <Form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <SimpleGrid cols={1}>
            <Center>
              <Img
                src={Image.twitterIcon}
                className="icon-blue-twitter-welcome-img"
                alt="twitter-logo"
              />
            </Center>
            <Text align="center">My Twitter</Text>
            <Text
              align="center"
              style={{
                fontSize: "1.875rem",
                lineHeight: "35px",
              }}
            >
              Login to your account
            </Text>
            <Center>
              <TextInput
                label="Username"
                placeholder="Username"
                required
                size="md"
                style={{ width: "21.875rem" }}
                value={form.values.username}
                onChange={(event) =>
                  form.setFieldValue("username", event.currentTarget.value)
                }
              />
            </Center>
            <Center>
              <PasswordInput
                label="Password"
                placeholder="Password"
                required
                size="md"
                style={{ width: "21.875rem" }}
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue("password", event.currentTarget.value)
                }
              />
            </Center>
            <Button
              variant="link"
              style={{ color: "#50b7f5" }}
              size="md"
              component={Link}
              to="/recoverpassword"
            >
              Forgot password?
            </Button>
            <Center>
              <Button
                style={{
                  backgroundColor: "#50b7f5",
                }}
                size="lg"
                type="submit"
                loading={loading}
              >
                Login Now
              </Button>
            </Center>
            <Text align="center">
              Don't have an account?{" "}
              <Button
                variant="link"
                style={{ color: "#50b7f5" }}
                size="md"
                component={Link}
                to="/signup"
              >
                Join free today
              </Button>
            </Text>
          </SimpleGrid>
        </Form>
      </Container>
      {/* <Form className="login-form">
      <p>
        <Img
          src={Image.twitterIcon}
          className="icon-blue-twitter-welcome-img"
          alt="twitter-logo"
        />
      </p>
      <p>
        <Label text="My Twitter" className="my-twitter-label" />
      </p>
      <p>
        <Label text="Login to your account" className="login-label" />
      </p>
      <p className="inline-left-17">
        <Label text="Email or Username" className="user-mail-pasword-label" />
      </p>
      <p>
        <Input
          type="text"
          className="user-mail-input"
          name="username"
          id="username"
          title="Username"
        />
      </p>
      <p className="inline-left-22">
        <Label text="Password" className="pasword-label" />
      </p>
      <p>
        <Input
          type="password"
          className="password-input"
          name="password"
          id="password"
          title="Password"
        />
      </p>
      <p>
        <Button
          text="Forgot password?"
          className="join-free-forgot-password-button"
          onClick={() => history.push("/recoverpassword")}
        />
      </p>
      <p>
        <Button
          text="Login now"
          className="login-now-button"
          onClick={() => history.push("/timeline")}
        />
      </p>
      <p>
        <p className="inline">
          <Label text="Dont have an account?" className="no-account-label" />
          <Button
            text="Join free today"
            className="join-free-forgot-password-button"
            onClick={() => history.push("/signup")}
          />
        </p>
      </p>
    </Form> */}
    </>
  );
}
