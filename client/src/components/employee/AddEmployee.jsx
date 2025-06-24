import {
  Stack,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/AddEmployee.css";

function AddEmployee() {
  const textFieldColor = "#4a7856";
  const textFieldBorderRadius = 6;
  const FontColor = "#daf1de";
  const selectColor = "#4a7856";
  const selectBorderRadius = 6;

  const buttonColor = "#4a7856";
  const buttonHoverColor = "#3d6248";
  const buttonBorderRadius = 8;

  const [form, setForm] = useState({
    employee_ID: "",
    fname: "",
    lname: "",
    email: "",
    phnum: "",
    dob: "",
    gender: "",
    address: "",
    hire_date: "",
    employment_type: "",
    department_id: "",
    role_id: "",
    emp_status: "",
    manager_id: "",
  });

  const handleAddEmployee = async () => {
    try {
      const res = await axios.post("/add", form);
      alert(res.data.message || "Employee added successfully");
    } catch (err) {
      console.error(
        "Failed to add new employee:",
        err.response?.data || err.message
      );
      alert(err.response?.data?.message || "Failed to add new employee");
    }
  };

  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await axios.get("/departments");
        setDepartments(res.data);
      } catch (err) {
        console.error("Failed to fetch departments:", err);
        alert("Could not load departments");
      }
    };

    fetchDepartments();
  }, []);

  const [rol, setRol] = useState([]);
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await axios.get("/roles");
        setRol(res.data);
      } catch (err) {
        console.error("Failed to fetch departments:", err);
        alert("Could not load departments");
      }
    };

    fetchRoles();
  }, []);

  return (
    <div id="emp_div">
      <Stack spacing={2}>
        <Typography variant="h3">Information Form</Typography>
        <hr />
        <Typography variant="h5">General Info</Typography>
        <hr />

        <Stack direction="row" spacing={2}>
          <Typography variant="h6">Employee ID: </Typography>
          <TextField
            label="Employee ID"
            variant="filled"
            required
            type="number"
            name="employee_ID"
            InputProps={{
              sx: {
                backgroundColor: textFieldColor,
                borderRadius: textFieldBorderRadius, // 8px (or use 1 for 4px, or a custom value)
                color: FontColor,
              },
            }}
            value={form.employee_ID}
            onChange={(e) => setForm({ ...form, employee_ID: e.target.value })}
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography variant="h6">Name: </Typography>
          <TextField
            label="First Name"
            variant="filled"
            required
            name="fname"
            InputProps={{
              sx: {
                backgroundColor: textFieldColor,
                borderRadius: textFieldBorderRadius, // 8px (or use 1 for 4px, or a custom value)
                color: FontColor,
              },
            }}
            value={form.fname}
            onChange={(e) => setForm({ ...form, fname: e.target.value })}
          />
          <TextField
            label="Last Name"
            variant="filled"
            required
            name="lname"
            InputProps={{
              sx: {
                backgroundColor: textFieldColor,
                borderRadius: textFieldBorderRadius, // 8px (or use 1 for 4px, or a custom value)
                color: FontColor,
              },
            }}
            value={form.lname}
            onChange={(e) => setForm({ ...form, lname: e.target.value })}
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography variant="h6">Date Of Birth: </Typography>
          <TextField
            label="Date of Birth"
            type="date"
            variant="filled"
            required
            name="dob"
            InputProps={{
              sx: {
                backgroundColor: textFieldColor,
                borderRadius: textFieldBorderRadius, // 8px (or use 1 for 4px, or a custom value)
              },
            }}
            InputLabelProps={{ shrink: true }}
            value={form.dob}
            onChange={(e) => setForm({ ...form, dob: e.target.value })}
          />
        </Stack>

        <Box sx={{ width: 200 }}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">Gender: </Typography>
            <FormControl variant="filled" fullWidth required>
              <InputLabel>Gender</InputLabel>
              <Select
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                sx={{
                  backgroundColor: selectColor,
                  borderRadius: selectBorderRadius,
                }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Box>

        <Stack direction="row" spacing={2}>
          <Typography variant="h6">Address: </Typography>
          <TextField
            label="Address"
            variant="filled"
            required
            name="address"
            InputProps={{
              sx: {
                backgroundColor: textFieldColor,
                borderRadius: textFieldBorderRadius, // 8px (or use 1 for 4px, or a custom value)
                color: FontColor,
              },
            }}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography variant="h6">Email: </Typography>
          <TextField
            label="Email"
            variant="filled"
            required
            name="email"
            InputProps={{
              sx: {
                backgroundColor: textFieldColor,
                borderRadius: textFieldBorderRadius, // 8px (or use 1 for 4px, or a custom value)
                color: FontColor,
              },
            }}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography variant="h6">Phone Number: </Typography>
          <TextField
            label="Phone Number"
            type="number"
            variant="filled"
            required
            name="phnum"
            InputProps={{
              sx: {
                backgroundColor: textFieldColor,
                borderRadius: textFieldBorderRadius, // 8px (or use 1 for 4px, or a custom value)
                color: FontColor,
              },
            }}
            value={form.phnum}
            onChange={(e) => setForm({ ...form, phnum: e.target.value })}
          />
        </Stack>

        <hr />

        <Typography variant="h5">Employee Info</Typography>

        <hr />

        <Stack direction="row" spacing={2}>
          <Typography variant="h6">Hire Date: </Typography>
          <TextField
            label="Hire Date"
            type="date"
            name="hire_date"
            InputProps={{
              sx: {
                backgroundColor: textFieldColor,
                borderRadius: textFieldBorderRadius, // 8px (or use 1 for 4px, or a custom value)
              },
            }}
            variant="filled"
            required
            InputLabelProps={{ shrink: true }}
            value={form.hire_date}
            onChange={(e) => setForm({ ...form, hire_date: e.target.value })}
          />
        </Stack>

        <Box sx={{ width: 400 }}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">Employment Status: </Typography>
            <FormControl variant="filled" fullWidth required>
              <InputLabel>Employment Status</InputLabel>
              <Select
                value={form.emp_status}
                onChange={(e) =>
                  setForm({ ...form, emp_status: e.target.value })
                }
                sx={{
                  backgroundColor: selectColor,
                  borderRadius: selectBorderRadius,
                }}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
                <MenuItem value="terminated">Terminated</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Box>

        <Box sx={{ width: 400 }}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">Employment Type: </Typography>
            <FormControl variant="filled" fullWidth required>
              <InputLabel>Employment Type</InputLabel>
              <Select
                value={form.employment_type}
                onChange={(e) =>
                  setForm({ ...form, employment_type: e.target.value })
                }
                sx={{
                  backgroundColor: selectColor,
                  borderRadius: selectBorderRadius,
                }}
              >
                <MenuItem value="full-time">Full-Time</MenuItem>
                <MenuItem value="contract">Contract</MenuItem>
                <MenuItem value="part-time">Part-time</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Box>

        <Box sx={{ width: 400 }}>
          <Stack direction={"row"} spacing={2}>
            <Typography variant="h6">Department: </Typography>
            <FormControl variant="filled" fullWidth required>
              <InputLabel>Department</InputLabel>
              <Select
                value={form.department_id}
                onChange={(e) =>
                  setForm({ ...form, department_id: e.target.value })
                }
                sx={{
                  backgroundColor: selectColor,
                  borderRadius: selectBorderRadius,
                }}
              >
                {departments.map((dep) => (
                  <MenuItem key={dep.dep_id} value={dep.dep_name}>
                    {dep.dep_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Box>

        <Box sx={{ width: 400 }}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6">Role: </Typography>
            <FormControl variant="filled" fullWidth required>
              <InputLabel>Roles</InputLabel>
              <Select
                value={form.role_id}
                onChange={(e) => setForm({ ...form, role_id: e.target.value })}
                sx={{
                  backgroundColor: selectColor,
                  borderRadius: selectBorderRadius,
                }}
              >
                {rol.map((role_r) => (
                  <MenuItem key={role_r.role_id} value={role_r.role_name}>
                    {role_r.role_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Box>

        <Stack direction="row" spacing={2}>
          <Typography variant="h6">Under which Manager: </Typography>
          <TextField
            label="Manager ID"
            variant="filled"
            type="number"
            required
            name="manager_id"
            InputProps={{
              sx: {
                backgroundColor: textFieldColor,
                borderRadius: textFieldBorderRadius, // 8px (or use 1 for 4px, or a custom value)
                color: FontColor,
              },
            }}
            value={form.manager_id}
            onChange={(e) => setForm({ ...form, manager_id: e.target.value })}
          />
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
            onClick={handleAddEmployee}
          >
            Add Employee
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default AddEmployee;
