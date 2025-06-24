import { Stack, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logout from "../createAccount/Logout";

function ceoHome() {
  const buttonColor = "#4a7856";
  const buttonHoverColor = "#3d6248";
  const FontColor = "#daf1de";
  const buttonBorderRadius = 8;

  const navigate = useNavigate();
  const employee_ID = localStorage.getItem("employee_ID");

  const handleCheckIn = async () => {
    try {
      const res = await axios.post("/checkin", { employee_ID });
      alert(res.data.message);
    } catch (err) {
      console.error("Check-in failed:", err.response?.data || err.message);
      alert("Check-in failed");
    }
  };

  const handleCheckOut = async () => {
    try {
      const res = await axios.post("/checkout", { employee_ID });
      alert(res.data.message);
    } catch (err) {
      console.error("Check-out failed:", err.response?.data || err.message);
      alert("Check-out failed");
    }
  };

  return (
    <Stack spacing={2}>
      <Stack direction={"row"} spacing={145}>
        <Typography variant="h5">Check-In and Check-Out</Typography>
        <Logout />
      </Stack>
      <Stack direction="row">
        <Button
          variant="contained"
          sx={{
            backgroundColor: buttonColor,
            color: FontColor,
            "&:hover": {
              backgroundColor: buttonHoverColor,
            },
            borderRadius: buttonBorderRadius,
          }}
          onClick={handleCheckIn}
        >
          Check In
        </Button>
      </Stack>
      <Stack direction="row">
        <Button
          variant="contained"
          sx={{
            backgroundColor: buttonColor,
            color: FontColor,
            "&:hover": {
              backgroundColor: buttonHoverColor,
            },
            borderRadius: buttonBorderRadius,
          }}
          onClick={handleCheckOut}
        >
          Check Out
        </Button>
      </Stack>

      <hr />

      <Stack direction="row" spacing={2}>
        <Typography variant="h5">Show Employees: </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/show/Employees");
          }}
          sx={{
            backgroundColor: buttonColor,
            color: FontColor,
            "&:hover": {
              backgroundColor: buttonHoverColor,
            },
            borderRadius: buttonBorderRadius,
          }}
        >
          Show Employees
        </Button>
      </Stack>

      <hr />

      <Stack direction={"row"} spacing={2}>
        <Typography variant="h5">Add Employees: </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: buttonColor,
            color: FontColor,
            "&:hover": {
              backgroundColor: buttonHoverColor,
            },
            borderRadius: buttonBorderRadius,
          }}
          onClick={() => navigate("/add/Employees")}
        >
          Add Employee
        </Button>
      </Stack>
      <hr />

      <Stack direction={"row"} spacing={2}>
        <Typography variant="h5">Add Department: </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/add/Departments")}
          sx={{
            backgroundColor: buttonColor,
            color: FontColor,
            "&:hover": {
              backgroundColor: buttonHoverColor,
            },
            borderRadius: buttonBorderRadius,
          }}
        >
          Add Department
        </Button>
      </Stack>
      <hr />

      <Stack direction={"row"} spacing={2}>
        <Typography variant="h5">Add Manager: </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/add/Managers");
          }}
          sx={{
            backgroundColor: buttonColor,
            color: FontColor,
            "&:hover": {
              backgroundColor: buttonHoverColor,
            },
            borderRadius: buttonBorderRadius,
          }}
        >
          Add Manager
        </Button>
      </Stack>
      <hr />

      <Stack>
        <Typography variant="h5">Remove An Employee: </Typography>
      </Stack>
      <form action="/delete/employee" method="post">
        <Stack spacing={2}>
          <Stack direction={"row"} spacing={2}>
            <TextField
              variant="filled"
              name="e_id"
              type="number"
              required
              label="Employee ID"
              InputProps={{
                sx: {
                  backgroundColor: "#4a7856",
                  borderRadius: buttonBorderRadius, // 8px (or use 1 for 4px, or a custom value)
                  color: "white",
                },
              }}
            ></TextField>
            <Button
              variant="contained"
              sx={{
                backgroundColor: buttonColor,
                color: FontColor,
                "&:hover": {
                  backgroundColor: buttonHoverColor,
                },
                borderRadius: buttonBorderRadius,
              }}
              type="submit"
            >
              Delete Employee
            </Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
}

export default ceoHome;
