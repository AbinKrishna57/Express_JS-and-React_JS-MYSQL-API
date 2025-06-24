import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("employee_ID");
    navigate("/");
  };

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#e57373",
        borderRadius: 8,
      }}
      color="error"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
}

export default Logout;
