import React from "react";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import Button from "@mui/material/Button";
import { async } from "@firebase/util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in Page</h1>
      <Button variant="contained" onClick={logGoogleUser}>
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignIn;
