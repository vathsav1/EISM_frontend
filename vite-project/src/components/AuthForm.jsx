import React from "react";
import useAuthStore from "../store/authStore";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const AuthForm = ({ isLogin, setIsLogin, setIsAuthenticated }) => {
  const { login } = useAuthStore();

  return (
    <>
      <Typography variant="h4" className="form-title">
        {isLogin ? "Sign In" : "Create Account"}
      </Typography>

      <Typography className="switch-text">
        {isLogin ? "New User?" : "Already have an account?"}

        <span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? " Create an account" : " Login"}
        </span>
      </Typography>

      <Stack spacing={3} mt={4}>
        {!isLogin && (
          <TextField
            fullWidth
            placeholder="Full Name"
            variant="outlined"
          />
        )}

        <TextField
          fullWidth
          placeholder="Email Address"
          variant="outlined"
        />

        <TextField
          fullWidth
          placeholder="Password"
          type="password"
          variant="outlined"
        />

        {!isLogin && (
          <TextField
            fullWidth
            placeholder="Confirm Password"
            type="password"
            variant="outlined"
          />
        )}

        {isLogin && (
          <FormControlLabel
            control={<Checkbox />}
            label="Remember Me"
          />
        )}

        <Button
        variant="contained"
        fullWidth
        className="auth-button"
        onClick={login}
        >
        {isLogin ? "Login" : "Register"}
        </Button>
      </Stack>
    </>
  );
};

export default AuthForm;