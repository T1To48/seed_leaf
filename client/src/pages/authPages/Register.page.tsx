import { useState } from "react";
import type { AuthInputsInfo, ChangeEventInput } from "src/types";
import styled from "styled-components";
import {
  Form,
  InputsList,
  RedirectLink,
  SeperationLine,
  StyledNamesInputsContainer,
  SubmitBtn,
} from "./components";

const StyledPageWrapper = styled.main`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  margin: 15rem auto 6rem;
  min-height: 60vh;

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    max-width: ${({ theme }) => theme.siteMaxWidth.mobile};
    margin-top: 12rem;
    min-height: 60vh;
  }
`;
const inputsArr1: AuthInputsInfo[] = [
  { type: "text", label: "First Name", field: "firstName" },
  { type: "text", label: "Last Name", field: "lastName" },
];
const inputsArr2: AuthInputsInfo[] = [
  { type: "text", label: "Address", field: "address" },
  { type: "email", label: "Email", field: "email" },
  { type: "password", label: "Password", field: "password" },
];
const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
  });
  const handleChange = (e: ChangeEventInput) => {
    const { name, value } = e.target;
    setUserData((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };
  return (
    <StyledPageWrapper>
      <Form title="Register">
        <StyledNamesInputsContainer>
          <InputsList
            inputsArr={inputsArr1}
            userData={userData}
            handleChange={handleChange}
          />
        </StyledNamesInputsContainer>
        <InputsList
          inputsArr={inputsArr2}
          userData={userData}
          handleChange={handleChange}
        />
        <SubmitBtn btnText="Register" />
      </Form>
      <SeperationLine text="Already A" />
      <RedirectLink linkTo="login" linkText="Login" />
    </StyledPageWrapper>
  );
};

export default Register;
