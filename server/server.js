const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const crypto = require("crypto");
const path = require("path");
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.json());

const frontendRoutes = [
  "/",
  "/createAccount/create",
  "/employee/home",
  "/HR/home",
  "/manager/home",
  "/vice-president/home",
  "/president/home",
  "/ceo/home",
  "/admin/home",
  "/showEmployees",
  "/add/Employees",
  "/add/Departments",
  "/add/Managers",
  "/show/Employees",
];

frontendRoutes.forEach((route) => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Server###Beast69#",
  database: "ems",
});

db.connect((err) => {
  if (err) {
    console.error("There was an error connecting to Database");
    return;
  }
  console.log("Connected Successfully");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const passwordHash = crypto.createHash("md5").update(password).digest("hex");

  const sql = `
    SELECT users.username, roles.position, users.employee_ID
    FROM users
    JOIN employees ON users.employee_ID = employees.\`Employee ID\`
    JOIN roles ON employees.\`Role ID\` = roles.role_ID
    WHERE users.username = ? AND users.password_hash = ?
  `;

  db.query(sql, [username, passwordHash], (err, results) => {
    if (err) {
      console.error("Query error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (results.length > 0) {
      const pos = results[0].position;
      const employeeID = results[0].employee_ID;
      res.status(200).json({ position: pos, employee_ID: employeeID });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

const getCurrentDate = () => {
  const now = new Date();
  return now.toISOString().slice(0, 10);
};

const getCurrentTime = () => {
  const now = new Date();
  return now.toTimeString().slice(0, 8);
};

app.post("/checkin", (req, res) => {
  const { employee_ID } = req.body;
  const date = getCurrentDate();
  const time = getCurrentTime();

  const sql = `
    INSERT INTO attendance (employee_ID, date, check_in_time, attend_status)
    VALUES (?, ?, ?, 'present')
    ON DUPLICATE KEY UPDATE check_in_time=VALUES(check_in_time)
  `;

  db.query(sql, [employee_ID, date, time], (err) => {
    if (err) {
      console.error("Check-in error:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(200).json({ message: "Check-in successful" });
  });
});

app.post("/checkout", (req, res) => {
  const { employee_ID } = req.body;
  const date = getCurrentDate();
  const time = getCurrentTime();

  const sql = `
    UPDATE attendance
    SET check_out_time=?
    WHERE employee_ID=? AND date=?
  `;

  db.query(sql, [time, employee_ID, date], (err, result) => {
    if (err) {
      console.error("Check-out error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "No check-in found to check-out from." });
    }

    res.status(200).json({ message: "Check-out successful" });
  });
});

app.get("/employees", (req, res) => {
  const sql = `
  SELECT * FROM employees
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("There was an error with the query");
      return res.status(500).json({ message: "Database error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "No records Added." });
    } else {
      res.status(200).json(result);
    }
  });
});

app.post("/add", (req, res) => {
  const form = req.body;

  const {
    employee_ID,
    fname,
    lname,
    email,
    phnum,
    dob,
    gender,
    address,
    hire_date,
    employment_type,
    department_id,
    role_id,
    emp_status,
    manager_id,
  } = form;

  const sql = `
    INSERT INTO employees 
    (\`Employee ID\`, \`First Name\`, \`Last Name\`, Email, \`Phone Number\`, \`Date Of Birth\`, Gender, Address, \`Hire Date\`, \`Employment Type\`, \`Department ID\`, \`Role ID\`, \`Employment Status\`, \`Manager ID\`)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

  const values = [
    employee_ID,
    fname,
    lname,
    email,
    phnum,
    dob,
    gender,
    address,
    hire_date,
    employment_type,
    department_id || null,
    role_id || null,
    emp_status,
    manager_id || null,
  ];

  db.query(sql, values, (err) => {
    if (err) {
      console.error("SQL ERROR:", err);
      return res.status(500).json({ message: err.message || "Database error" });
    }

    res.status(200).json({ message: "Employee added successfully" });
  });
});

app.post("/createAccount", (req, res) => {
  const { empID, usernameCreateAcc, passwordCreateAcc } = req.body;
  const sql = `INSERT INTO users(employee_ID, username, password_hash) VALUES(?, ?, MD5(?))`;

  db.query(sql, [empID, usernameCreateAcc, passwordCreateAcc], (err) => {
    if (err) {
      console.error("SQL ERROR:", err);
      return res.status(500).send("Database Error");
    }
    res.status(200).send("User added successfully");
  });
});

app.post("/add/department", (req, res) => {
  const { dep_id, dep_name } = req.body;
  console.log(req.body);
  const sql = "INSERT INTO departments(department_ID, dep_name) VALUES(?, ?)";
  db.query(sql, [dep_id, dep_name], (err) => {
    if (err) {
      console.error("SQL ERROR:", err);
      return res.status(500).send("Database Error");
    }
    res.status(200).send("New Department added successfully");
  });
});

app.post("/add/manager", (req, res) => {
  const { manager_id, level, md_id } = req.body;
  const sql =
    "INSERT INTO managers(manager_ID, level, managed_department_ID) VALUES(?, ?, ?)";
  db.query(sql, [manager_id, level, md_id], (err) => {
    if (err) {
      console.error("SQL ERROR:", err);
      res.status(500).send("Database Error");
    }
    res.status(200).send("Manager Added Successfully");
  });
});

// DELETE
app.post("/delete/employee", (req, res) => {
  const e_id = req.body;
  const sql = "DELETE FROM employees WHERE employee_ID=?";
  db.query(sql, [e_id], (err) => {
    if (err) {
      return res.status(500).send("Database Error");
    }
    res.status(200).send("Employee removed successfully");
  });
});

app.get("/departments", (req, res) => {
  const sql = "SELECT dep_name FROM departments";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send("Database Error");
    }
    res.json(result);
  });
});

app.get("/roles", (req, res) => {
  const sql = "SELECT role_name FROM roles";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send("Database Error");
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
