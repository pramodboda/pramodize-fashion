import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { SignInBlock } from "./sign-in-form-styled";

import PrimaryButton from "../PramodizeUIComponents/Buttons/PrimaryButton/primary-button.component";
import Box from "@mui/material/Box";

const defaultFormFields = {
  email: "admin@demo.com",
  password: "123456",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(user);
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("Yes");
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInBlock>
      <Box sx={{ mb: "15px" }}>
        <h2>Already have an account? </h2>
        <h3>Sign up with your email and password</h3>
      </Box>
      <form onSubmit={handleSubmit}>
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
          <PrimaryButton type="submit" sx={{ mr: "15px" }}>
            Sign In
          </PrimaryButton>
          <PrimaryButton type="button" onClick={signInWithGoogle}>
            Sign in with Google
          </PrimaryButton>
        </Box>
      </form>
    </SignInBlock>
  );
};

export default SignInForm;
