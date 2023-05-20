import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Logout } from "@mui/icons-material";
import { axiosClient } from "../../utilities/axiosClient";
import { useUserContext } from "../../contexts/UserContextProvider";
import { useNavigate } from "react-router-dom";
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const {setUser, setToken,user,token} = useUserContext();
  const navigate=useNavigate();
  let logOut = (e) => {
      e.preventDefault();
      axiosClient
          .post("/logout")
          .then((res) => {
              setUser({});
              setToken(null);
              navigate("/login");
          })

          .catch((err) => console.log(err.response));
  };


  return (
    <Box display="flex" justifyContent="end" p={2} backgroundColor={colors.primary[400] }>
      {/* SEARCH BAR */}
      

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        {user && token &&<IconButton onClick={logOut}>
          <Logout />
        </IconButton>
}
      </Box>
    </Box>
  );
};

export default Topbar;
