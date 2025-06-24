import {
  Stack,
  Button,
  TextField,
  Typography,
  FormHelperText,
  Link,
} from "@mui/material";
import { useState } from "react";
import "../../assets/create.css";

function Create() {
  const buttonColor = "#4a7856";
  const buttonHoverColor = "#3d6248";
  const buttonFontColor = "white";
  const buttonBorderRadius = 8;

  const textFieldColor = "#4a7856";
  const textFieldBorderRadius = 6;
  const FontColor = "#daf1de";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passValidMsg, setPassValidMsg] = useState("");

  const validatePassword = (pwd) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!regex.test(pwd)) {
      return "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
    }
    return "";
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    const msg = validatePassword(pwd);
    setPassValidMsg(msg);
  };

  const handleSubmit = (e) => {
    const msg = validatePassword(password);
    if (msg) {
      e.preventDefault();
      setPassValidMsg(msg);
      return;
    }
    if (password !== confirmPassword) {
      e.preventDefault();
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  return (
    <div id="createAccount">
      <form action="/createAccount" method="post" onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Typography variant="h4">Create An Account</Typography>
          <hr />
          <div id="items">
            <Stack spacing={2}>
              <Stack spacing={2} direction={"row"}>
                <Typography variant="h6">Employee ID:</Typography>
                <TextField
                  variant="filled"
                  required
                  label="Employee ID"
                  name="empID"
                  type="number"
                  fullWidth
                  InputProps={{
                    sx: {
                      backgroundColor: textFieldColor,
                      borderRadius: textFieldBorderRadius,
                      color: FontColor,
                    },
                  }}
                />
              </Stack>

              <Stack direction={"row"} spacing={2}>
                <Typography variant="h6">Username:</Typography>
                <TextField
                  variant="filled"
                  required
                  label="Username"
                  name="usernameCreateAcc"
                  fullWidth
                  InputProps={{
                    sx: {
                      backgroundColor: textFieldColor,
                      borderRadius: textFieldBorderRadius,
                      color: FontColor,
                    },
                  }}
                />
              </Stack>

              <Stack direction={"row"} spacing={2}>
                <Typography variant="h6">Password:</Typography>
                <TextField
                  variant="filled"
                  required
                  label="Password"
                  type="password"
                  name="passwordCreateAcc"
                  fullWidth
                  InputProps={{
                    sx: {
                      backgroundColor: textFieldColor,
                      borderRadius: textFieldBorderRadius,
                      color: FontColor,
                    },
                  }}
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passValidMsg && (
                  <FormHelperText error>{passValidMsg}</FormHelperText>
                )}
              </Stack>

              <Stack direction={"row"} spacing={2}>
                <Typography variant="h6">Confirm Password:</Typography>
                <TextField
                  variant="filled"
                  required
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  name="ConfpasswordCreateAcc"
                  InputProps={{
                    sx: {
                      backgroundColor: textFieldColor,
                      borderRadius: textFieldBorderRadius,
                      color: FontColor,
                    },
                  }}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={!!error}
                  helperText={error}
                />
              </Stack>
            </Stack>
          </div>

          <Button
            variant="contained"
            sx={{
              backgroundColor: buttonColor,
              color: buttonFontColor,
              "&:hover": {
                backgroundColor: buttonHoverColor,
              },
              borderRadius: buttonBorderRadius,
            }}
            type="submit"
          >
            Create Account
          </Button>
          <div id="btn">
            <Stack spacing={2} direction={"row"}>
              <Typography variant="subtitle">
                Already have an account?
              </Typography>
              <Link href="/" sx={{ color: "black" }}>
                Log in
              </Link>
            </Stack>
          </div>
        </Stack>
      </form>
    </div>
  );
}

export default Create;
