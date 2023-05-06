import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import InputBase from "@mui/material/InputBase";
import {IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteIcon from '@mui/icons-material/Delete';
const Memeber = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "avatar",
      headerName: "",
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
          }}
        >
          <img
            src={params.value}
            alt="avatar"
            style={{ borderRadius: "50%", width: "40px", height: "40px" }}
          />
        </Box>
      ),
    },
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" sx={{gap:4}}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="30px"
      >
        <InputBase sx={{ ml: 2, flex: 1 ,width:"300px" }} placeholder="Email" />
      </Box>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="30px"
      >
        <InputBase sx={{ ml: 2, flex: 1 ,width:"300px"}} placeholder="ID" />
      </Box>
      <Box sx={{gap:"40px" , marginLeft: "auto" ,mr:"100px"}} display="flex"justifyContent="flex-end"  >
      <Box backgroundColor={colors.primary[400]} borderRadius="50%"  >
      <IconButton sx={{ borderRadius: "50%" , width: 48, height: 48 }} backgroundColor={colors.primary[400]} type="button">
        <SearchIcon style={{ color:colors.primary[900]}}/>
        </IconButton>
      </Box>
      <Box backgroundColor={colors.primary[400]} borderRadius="50%"  >
      <IconButton sx={{ borderRadius: "50%" , width: 48, height: 48 }} backgroundColor={colors.primary[400]} type="button">
        <ControlPointIcon style={{color:colors.primary[900]}}/>
        </IconButton>
      </Box>
      <Box backgroundColor={colors.primary[400]} borderRadius="50%"  >
      <IconButton sx={{ borderRadius: "50%" , width: 48, height: 48 }} backgroundColor={colors.primary[400]} type="button">
        <DeleteIcon style={{color:colors.primary[900]}}/>
        </IconButton>
      </Box>
      </Box>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "{colors.primary[400]}",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "{colors.primary[400]}",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Memeber;