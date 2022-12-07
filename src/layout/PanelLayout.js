import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

export const PanelLayout = ({ children }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <Grid sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Stepper
          </Typography>
          {/* <Link to={"/"} color="inherit"> */}
          <Button
            sx={{
              marginRight:'4px',
              fontSize: "16px",
              fontWeight: "bold",
              background: "white",
              color: "#3f51b5",
              "&:hover": {
                color: "white",
                backgroundColor: "#3f51b5",
              },
            }}
            variant="contained"
            onClick={()=>navigate('step-show')}
          >
            Steps
          </Button>
          <Button
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              background: "white",
              color: "#3f51b5",
              "&:hover": {
                color: "white",
                backgroundColor: "#3f51b5",
              },
            }}
            variant="contained"
            onClick={handleClick}
          >
            Home
          </Button>
          {/* </Link> */}
        </Toolbar>
      </AppBar>
      {children}
    </Grid>
  );
};
