import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import { useTranslation } from "react-i18next";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  const { t } = useTranslation();
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">{t("loginHeader")}</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
