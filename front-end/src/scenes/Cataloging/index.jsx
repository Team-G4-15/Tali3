import { Box ,IconButton,Typography,Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
const Cataloging = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleDelete = (id) => {
    // Handle delete logic here
  };
  const columns = [
    { field: "pic", headerName: "Pic", flex: 0.5 },
    { field: "title", headerName: "Title" },
    {
      field: "author",
      headerName: "Author",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "isbn",
      headerName: "ISBN",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "publisher",
      headerName: "Publisher",
      flex: 1,
    },
    {
      field: "publication_date",
      headerName: "Publication Date",
      flex: 1,
    },
    {
      field: "barcode",
      headerName: "BarCode",
      flex: 1,
    },
    {
      field: "availability",
      headerName: "Availability",
      flex: 1,
    },
    {
      field: "delete",
      headerName: "",
      flex: 1,
      renderCell: (params) => (
        <IconButton onClick={() => handleDelete(params.row.id)}
          sx={{
        backgroundColor: "#ff1744",
        borderRadius: "5%",
        color: "#fff",
        width: "80%",
        height: "50%",
        "&:hover": {
          backgroundColor: "#b2102f",
        },
      }}>
        
        <Typography variant="srOnly" sx={{fontSize:"51%"}}>Delete</Typography>
        </IconButton>
      ),
    },
  ];
  return (
    <Box m="20px">
      <Box sx={{justifyContent: "space-between",display:"flex"}}>
      <Header
        title="Books"
        subtitle="List of Books in The Library"
        />
      <Button
        variant="contained"
        color="primary"
          startIcon={<LibraryBooksIcon/>}
        sx={{
          backgroundColor:"#FD5F00",
          "&:hover":{
            backgroundColor:"#FF7100",
          },
          "&:focus":{
            backgroundColor:"#FF7100",
          }
        }}
        >
          add book
      </Button>
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
            backgroundColor: "#0443A5",
            color: "white",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#0443A5",
            color: "white",
          },
          "& .MuiCheckbox-root": {
            color: "white",
          
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `#ffffff !important`,
          },

        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Cataloging;
