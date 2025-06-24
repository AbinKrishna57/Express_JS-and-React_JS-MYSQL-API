import { Stack, Button, Typography } from "@mui/material";
import axios from "axios";
import Logout from "../createAccount/Logout";

function EmployeeHome() {
  const buttonColor = "#4a7856";
  const buttonHoverColor = "#3d6248";
  const FontColor = "#daf1de";
  const buttonBorderRadius = 8;

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
    <div id="cin-cout">
      <Stack spacing={3}>
        <Stack direction={"row"} spacing={145}>
          <Typography variant="h5">Check-In and Check-Out</Typography>
          <Logout />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contanied"
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
          <Button
            variant="contanied"
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
      </Stack>
    </div>
  );
}

export default EmployeeHome;
