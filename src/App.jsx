import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import { teal, pink } from "@mui/material/colors";
import { useState } from "react";
import useAppTheme from "./hooks/useAppTheme";
function App() {
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
            />
          }
        />
      </Box>
    </Container>
  );
}

export default App;
