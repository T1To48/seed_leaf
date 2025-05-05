import { useState } from "react";
import type { AuthInputsInfo, ChangeEventInput } from "src/types";
import styled from "styled-components";
import {
  Form,
  SubmitBtn,
  SeperationLine,
  RedirectLink,
  InputsList,
} from "./components";
const StyledPageWrapper = styled.main`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  margin: 22rem auto 5rem;
  min-height: 55vh;

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    max-width: ${({ theme }) => theme.siteMaxWidth.mobile};
    margin-top: 15rem;
    min-height: 60vh;
  }
`;
const inputsArr: AuthInputsInfo[] = [
  { type: "email", label: "Email", field: "email" },
  { type: "password", label: "Password", field: "password" },
];
const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (e: ChangeEventInput) => {
    const { name, value } = e.target;
    setUserData((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };
  return (
    <StyledPageWrapper>
      <Form title="Login">
        <InputsList
          inputsArr={inputsArr}
          userData={userData}
          handleChange={handleChange}
        />
        <SubmitBtn btnText="Login" />
      </Form>
      <SeperationLine text="New" />
      <RedirectLink linkTo="register" linkText="Register Now!" />
    </StyledPageWrapper>
  );
};

export default Login;
