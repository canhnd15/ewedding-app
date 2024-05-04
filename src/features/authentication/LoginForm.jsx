import { useState } from "react";
import { useLogin } from "./useLogin";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Form from "../../components/Form";
import SpinnerMini from "../../components/SpinnerMini";
import FormRowVertical from "../../components/FormRowVertical";
import { FcGoogle } from "react-icons/fc";

function LoginForm() {
  const [email, setEmail] = useState("an123@gmail.com");
  const [password, setPassword] = useState("1234aA@");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label={"Email address"}>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        ></Input>
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      <FormRowVertical>
        <FcGoogle size={"36px"} cursor={"pointer"} />
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
