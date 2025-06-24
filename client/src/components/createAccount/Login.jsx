import { Typography, Stack, TextField, Button, Link } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/Login.css";

function Login() {
  const textFieldColor = "#4a7856";
  const textFieldBorderRadius = 6;
  const FontColor = "#daf1de";

  const buttonColor = "#4a7856";
  const buttonHoverColor = "#3d6248";
  const buttonBorderRadius = 8;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/login", {
        username,
        password,
      });

      if (res.status === 200) {
        const { position, employee_ID } = res.data;
        localStorage.setItem("employee_ID", employee_ID);
        navigate(`/${position}/home`);
      }
    } catch (err) {
      alert("Login failed. Please check your credentials.");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div id="login-form">
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Typography variant="h4">Login To EMS</Typography>
            <hr />
            <Stack direction="row" spacing={2}>
              <Typography variant="h6">Username:</Typography>
              <TextField
                variant="filled"
                label="Username"
                name="username"
                InputProps={{
                  sx: {
                    color: FontColor,
                    backgroundColor: textFieldColor,
                    borderRadius: textFieldBorderRadius,
                  },
                }}
                fullWidth
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography variant="h6">Password:</Typography>
              <TextField
                variant="filled"
                label="Password"
                type="password"
                name="password"
                InputProps={{
                  sx: {
                    color: FontColor,
                    backgroundColor: textFieldColor,
                    borderRadius: textFieldBorderRadius,
                  },
                }}
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>

            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: buttonColor,
                color: FontColor,
                "&:hover": {
                  backgroundColor: buttonHoverColor,
                },
                borderRadius: buttonBorderRadius,
              }}
            >
              Login
            </Button>
          </Stack>
        </form>
      </div>

      <div id="createAcc">
        <Stack spacing={2} direction={"row"}>
          <Typography variant="subtitle">Don't have an account? </Typography>
          <Link href="/createAccount/create" sx={{ color: "Black" }}>
            Sign up
          </Link>
        </Stack>
      </div>
    </div>
  );
}

export default Login;
