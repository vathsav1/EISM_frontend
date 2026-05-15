import { useState } from "react";
import axios from "axios";

import useAuthStore from "../store/authStore";
import {Button, TextField,} from "@mui/material";

const AuthForm = () => {


  const [isLogin, setIsLogin] =
  useState(true);

const [formData, setFormData] =
  useState({

    name: "",

    email: "",

    password: "",
  });

  const { setUser } =
    useAuthStore();

  const handleLogin =
    async () => {

      try {

        const response =
          await axios.post(
            "http://localhost:5000/api/auth/login",
            {

              email:
                formData.email,

              password:
                formData.password,
            }
          );

        setUser(response.data);

        console.log(
          response.data
        );

      } catch (error) {

        console.log(
          error.response.data
        );
      }
    };

  const handleRegister =
    async () => {

      try {

        const response =
          await axios.post(
            "http://localhost:5000/api/auth/register",
            {

              name:
                formData.name,

              email:
                formData.email,

              password:
                formData.password,
            }
          );

        setUser(response.data);

        console.log(
          response.data
        );

      } catch (error) {

        console.log(
          error.response.data
        );
      }
    };

  return (

  <div className="auth-form">

    <h1>
      {isLogin
        ? "Sign In"
        : "Create Account"}
    </h1>

    {!isLogin && (

      <TextField
        fullWidth
        label="Name"
        margin="normal"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
      />

    )}

    <TextField
      fullWidth
      label="Email"
      margin="normal"
      value={formData.email}
      onChange={(e) =>
        setFormData({
          ...formData,
          email: e.target.value,
        })
      }
    />

    <TextField
      fullWidth
      type="password"
      label="Password"
      margin="normal"
      value={formData.password}
      onChange={(e) =>
        setFormData({
          ...formData,
          password: e.target.value,
        })
      }
    />

    <Button
      fullWidth
      variant="contained"
      sx={{ mt: 3 }}
      onClick={
        isLogin
          ? handleLogin
          : handleRegister
      }
    >

      {isLogin
        ? "Login"
        : "Register"}

    </Button>

    <p
      style={{
        marginTop: "20px",
        cursor: "pointer",
      }}
      onClick={() =>
        setIsLogin(!isLogin)
      }
    >

      {isLogin
        ? "Create an account"
        : "Already have an account?"}

    </p>

  </div>
);
};

export default AuthForm;