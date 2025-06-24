import { Stack, Button } from "@mui/material";
import TableComponent from "../TableComponent";
import axios from "axios";
import { useState } from "react";

function ShowEmployee() {
  const buttonColor = "#4a7856";
  const buttonHoverColor = "#3d6248";
  const FontColor = "#daf1de";
  const buttonBorderRadius = 8;

  const [employees, setEmployees] = useState([]);
  const fetchEmployees = async () => {
    try {
      const res = await axios.get("/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error("Failed to fetch employees:", err);
      alert("Failed to load employees");
    }
  };

  return (
    <>
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
          onClick={fetchEmployees}
        >
          Show Employees
        </Button>
      </Stack>
      {employees.length > 0 && <TableComponent data={employees} />}
    </>
  );
}

export default ShowEmployee;
