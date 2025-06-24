import { Stack, Typography, TextField, Button } from "@mui/material";
import "../../assets/AddDepartment.css";

function AddDepartment() {
  const textFieldColor = "#4a7856";
  const textFieldBorderRadius = 6;
  const FontColor = "#daf1de";

  const buttonColor = "#4a7856";
  const buttonHoverColor = "#3d6248";
  const buttonBorderRadius = 8;

  return (
    <div id="dep_div">
      <form action="/add/department" method="post">
        <Stack spacing={2}>
          <Typography variant="h3">Department Info</Typography>
          <hr />
          <Stack direction={"row"} spacing={2}>
            <Typography variant="h6">Department ID: </Typography>
            <TextField
              variant="filled"
              required
              type="number"
              label="Department ID"
              name="dep_id"
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
            <Typography variant="h6">Department Name: </Typography>
            <TextField
              variant="filled"
              required
              label="Department Name"
              name="dep_name"
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
              Add Department
            </Button>
          </Stack>
        </Stack>
      </form>
    </div>
  );
}

export default AddDepartment;
