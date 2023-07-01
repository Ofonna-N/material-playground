import {
  Container,
  Box,
  Typography,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useState } from "react";
import useAppTheme from "../hooks/useAppTheme";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const themeModeHandler = useAppTheme();
  return (
    <Container
      fixed
      sx={{
        backgroundColor: teal[900],
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingY={"1rem"}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Typography variant={"h4"} color={{ sm: "yellow" }}>
          Toggle Demo
        </Typography>

        <FormControlLabel
          label="dark mode"
          control={
            <Switch
              checked={themeModeHandler.mode === "dark"}
              onChange={() => themeModeHandler.toggleMode()}
              sx={{
                "& .MuiSwitch-thumb:hover": {
                  borderRadius: "0px",
                },
              }}
            />
          }
        />
      </Box>
    </Container>
  );
};

export default Navbar;
