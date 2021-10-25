import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useForm } from "@mantine/hooks";
import {
  Center,
  TextInput,
  Button,
  Container,
  SimpleGrid,
  Text,
  PasswordInput,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

// import Input from "./../../common/Input";
import Label from "./../../common/Label";
// import Button from "./../../common/Button";
import Form from "./../../common/Form";
import Img from "./../../common/Img";
import Image from "../../../images/index";

import { useHistory } from "react-router-dom";

export default function SignUp() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const form = useForm({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationRules: {
      name: (value) => value.trim().length >= 4,
      username: (value) => value.trim().length >= 7,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
          value
        ),
    },
  });

  const { signup } = useAuth();

  const handleSubmit = async (data) => {
    const { password, passwordConfirmation } = data;
    if (password !== passwordConfirmation) {
      return form.setFieldError("passwordConfirmation", true);
    }

    try {
      setLoading(true);
      await signup(data);
      enqueueSnackbar("Account Created", {
        variant: "success",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
      history.push("/login");
    } catch (err) {
      enqueueSnackbar("There was an error creating your account", {
        variant: "error",
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Container>
        <Form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <SimpleGrid cols={1}>
            <Center>
              <Img
                src={Image.twitterIcon}
                className="icon-blue-twitter-welcome-img"
                alt="twitter-logo"
              />
            </Center>
            <Center>
              <Label text="My Twitter" className="my-twitter-label" />
            </Center>
            <Text
              align="center"
              style={{
                fontSize: "1.875rem",
                lineHeight: "35px",
              }}
            >
              Create your account
            </Text>
            <Center>
              <TextInput
                label="Name"
                required
                placeholder="Name"
                size="md"
                style={{ width: "21.875rem" }}
                value={form.values.name}
                error={
                  form.errors.name &&
                  "Please specify a valid username (min 4 characters)"
                }
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
              />
            </Center>
            <Center>
              <TextInput
                label="Username"
                placeholder="Username"
                required
                size="md"
                error={
                  form.errors.username &&
                  "Please specify a valid username (min 7 characters)"
                }
                style={{ width: "21.875rem" }}
                value={form.values.username}
                onChange={(event) =>
                  form.setFieldValue("username", event.currentTarget.value)
                }
                onBlur={() => form.validateField("username")}
              />
            </Center>
            <Center>
              <TextInput
                label="Email"
                placeholder="test@mail.com"
                required
                error={form.errors.username && "Please specify a valid email"}
                size="md"
                style={{ width: "21.875rem" }}
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                onBlur={() => form.validateField("email")}
              />
            </Center>
            <Center>
              <PasswordInput
                label="Password"
                placeholder="Password"
                required
                error={
                  form.errors.password &&
                  "Password should contain one symbol, one uppercase character, one lowercase character and at least 8 characters"
                }
                size="md"
                style={{ width: "21.875rem" }}
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue("password", event.currentTarget.value)
                }
                onBlur={() => form.validateField("password")}
              />
            </Center>
            <Center>
              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm Password"
                required
                size="md"
                error={
                  form.errors.passwordConfirmation && "Passwords don't match"
                }
                style={{ width: "21.875rem" }}
                value={form.values.passwordConfirmation}
                onChange={(event) =>
                  form.setFieldValue(
                    "passwordConfirmation",
                    event.currentTarget.value
                  )
                }
                onBlur={() => form.validateField("passwordConfirmation")}
              />
            </Center>
            <Center>
              <Button
                style={{
                  backgroundColor: "#50b7f5",
                  width: "21.875rem",
                  marginTop: "20px",
                }}
                size="lg"
                type="submit"
                loading={loading}
              >
                Sign Up
              </Button>
            </Center>
            <Text align="center">
              Already have an account?{" "}
              <Button
                variant="link"
                style={{ color: "#50b7f5" }}
                size="md"
                component={Link}
                to="/login"
              >
                Login
              </Button>
            </Text>
          </SimpleGrid>
        </Form>
      </Container>

      {/* <Form
        className="login-form"
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
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
          <Label text="Create your account" className="create-account-label" />
        </p>
        <p>
          <Label text="Name" className="user-mail-pasword-label" />
        </p>
        <p>
          <Input
            type="text"
            className="user-mail-input"
            name="name"
            id="name"
            title="Name"
            value={form.values.username}
          />
        </p>
        <p>
          <Label text="Username" className="user-mail-pasword-label" />
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
        <p>
          <Label text="Email" className="user-mail-pasword-label" />
        </p>
        <p>
          <Input
            type="text"
            className="user-mail-input"
            name="email"
            id="email"
            title="email@service.com"
          />
        </p>
        <p>
          <Label text="Password" className="user-mail-pasword-label" />
        </p>
        <p>
          <Input
            type="password"
            className="user-mail-input"
            name="password"
            id="password"
            title="Password"
          />
        </p>
        <p>
          <Label
            text="Password confirmation"
            className="user-mail-pasword-label"
          />
        </p>
        <p>
          <Input
            type="password confirmation"
            className="user-mail-input"
            name="password confirmation"
            id="password confirmation"
            title="Password confirmation"
          />
        </p>
        <p>
          <Button text="Sign up" className="login-now-button" type="submit" />
        </p>
        <p>
          <div className="inline">
            <Label
              text="Already have an account?"
              className="no-account-label"
            />
            <Button
              text="Login"
              className="join-free-forgot-password-button"
              onClick={() => history.push("/login")}
            />
          </div>
        </p>
      </Form> */}
    </>
  );
}
