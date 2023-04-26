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
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const location = useLocation();

  const p = location.pathname;



  let topBarDisplayed = (p === "/dashboard" || p === "/login" || p === "/") ? false : true;

  return (


    topBarDisplayed ? <Box display="flex" justifyContent="space-between" p={2} backgroundColor="#0A2A5C">
      {/* SEARCH BAR */}
      <Box display="flex" justifyContent="space-between" sx={{gap:3}}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="30px"
        width="100%"
        height="60px"

      >
        <InputBase sx={{ ml: 2, flex: 2 ,width:"auto", height:'auto'}} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box alignItems="center">
      <Box
      display="flex"
      backgroundColor={colors.primary[400]}
      borderRadius="30px"
      alignItems="center"
      >
        <IconButton sx={{ borderRadius: "50%" , width: 55, height: 55 }} backgroundColor={colors.primary[400]} type="button" >
          <FilterAltIcon style={{color:colors.primary[900]}}/>
        </IconButton>
      </Box>
      <Typography color={colors.primary[400]} alignItems="center" ml="2px">Filter</Typography>
      </Box>
      <Box>
      <Box
      display="flex"
      backgroundColor={colors.primary[400]}
      borderRadius="30px"
      >
        <IconButton sx={{ borderRadius: "50%" , width: 55, height: 55 }} backgroundColor={colors.primary[400]} type="button">
          <LibraryBooksIcon style={{color:colors.primary[900]}}/>
        </IconButton>
      </Box>
      <Typography color={colors.primary[400]} alignItems="center" ml="2px">Papers</Typography>
      </Box>
      <Box>
      <Box
      display="flex"
      backgroundColor={colors.primary[400]}
      borderRadius="30px"
      >
        <IconButton sx={{ borderRadius: "50%", width: 55, height: 55  }} backgroundColor={colors.primary[400]} type="button">
          <ImportContactsIcon style={{color:colors.primary[900]}}/>
        </IconButton>
      </Box>
      <Typography color={colors.primary[400]} alignItems="center" ml="2px">Books</Typography>
      </Box>
      <Box alignItems="center">
      <Box
      display="flex"
      backgroundColor={colors.primary[400]}
      borderRadius="50px"
      >
        <IconButton sx={{ borderRadius: "50%" , width: 55, height: 55 }} backgroundColor={colors.primary[400]} type="button" >
        <AutoStoriesIcon style={{color:colors.primary[900]}}/>
        </IconButton>
        </Box>
        <Typography color={colors.primary[400]} alignItems="center">periodical</Typography>
      </Box>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon style={{color:colors.primary[800]}}/>
          ) : (
            <LightModeOutlinedIcon style={{color:colors.primary[800]}}/>
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon style={{color:colors.primary[800]}} />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon style={{color:colors.primary[800]}}/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon style={{color:colors.primary[800]}}/>
        </IconButton>
        
      </Box>

    </Box>
     :
     <Box display="flex" justifyContent="flex-end"  p={2} backgroundColor="#0A2A5C">
    <Box display="flex">
    <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === "dark" ? (
        <DarkModeOutlinedIcon style={{color:colors.primary[800]}}/>
      ) : (
        <LightModeOutlinedIcon style={{color:colors.primary[800]}}/>
      )}
    </IconButton>
    <IconButton>
      <NotificationsOutlinedIcon style={{color:colors.primary[800]}} />
    </IconButton>
    <IconButton>
      <SettingsOutlinedIcon style={{color:colors.primary[800]}}/>
    </IconButton>
    <IconButton>
      <PersonOutlinedIcon style={{color:colors.primary[800]}}/>
    </IconButton>
    
  </Box></Box>

  );
};

export default Topbar;
