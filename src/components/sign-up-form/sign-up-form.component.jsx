import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { SignUpBlock } from "./sign-up-form-styled";

import PrimaryButton from "../PramodizeUIComponents/Buttons/PrimaryButton/primary-button.component";
import Box from "@mui/material/Box";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log("user creation encounter an error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpBlock>
      <Box sx={{ mb: "15px" }}>
        <h2>I do not have a account</h2>
        <h3>Sign up with your email and password</h3>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: "15px" }}>
          <FormInput
            required
            label="Display Name"
            name="displayName"
            type="text"
            onChange={handleChange}
            defaultValue={displayName}
          />
        </Box>
        <Box sx={{ mb: "15px" }}>
          <FormInput
            required
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
            defaultValue={email}
          />
        </Box>
        <Box sx={{ mb: "15px" }}>
          <FormInput
            required
            label="Password"
            type="password"
            name="password"
            onChange={handleChange}
            defaultValue={password}
          />
        </Box>
        <Box sx={{ mb: "15px" }}>
          <FormInput
            required
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            defaultValue={confirmPassword}
          />
        </Box>
        <Box sx={{ mb: "15px" }}>
          <PrimaryButton type="submit">Sign Up</PrimaryButton>
        </Box>
      </form>
    </SignUpBlock>
  );
};

export default SignUpForm;
