import { Stack, TextField, Button, Typography } from "@mui/material";
import "../../assets/AddManager.css";

function AddManager() {
  const textFieldColor = "#4a7856";
  const textFieldBorderRadius = 6;

  const buttonColor = "#4a7856";
  const buttonHoverColor = "#3d6248";
  const FontColor = "#daf1de";
  const buttonBorderRadius = 8;

  return (
    <div id="man_div">
      <form action="/add/manager" method="post">
        <Stack spacing={2}>
          <Typography variant="h3">Manager Info</Typography>
          <hr />
          <Stack spacing={2} direction={"row"}>
            <Typography variant="h6">Manager ID: </Typography>
            <TextField
              variant="filled"
              required
              label="Manager ID"
              type="number"
              name="manager_id"
              InputProps={{
                sx: {
                  backgroundColor: textFieldColor,
                  borderRadius: textFieldBorderRadius,
                  color: FontColor,
                },
              }}
            ></TextField>
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <Typography variant="h6">Level: </Typography>
            <TextField
              variant="filled"
              required
              label="Level"
              name="level"
              InputProps={{
                sx: {
                  backgroundColor: textFieldColor,
                  borderRadius: textFieldBorderRadius,
                  color: FontColor,
                },
              }}
            ></TextField>
          </Stack>
          <Stack spacing={2} direction={"row"}>
            <Typography variant="h6">Managed Department ID: </Typography>
            <TextField
              variant="filled"
              required
              label="Managed Department ID"
              type="number"
              name="md_id"
              InputProps={{
                sx: {
                  backgroundColor: textFieldColor,
                  borderRadius: textFieldBorderRadius,
                  color: FontColor,
                },
              }}
            ></TextField>
          </Stack>
          <Stack direction={"row"}>
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
              Add Manager
            </Button>
          </Stack>
        </Stack>
      </form>
    </div>
  );
}

export default AddManager;
