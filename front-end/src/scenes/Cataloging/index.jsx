import { useState } from "react";
import { Box, IconButton, Typography, Button, TextField,  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions, } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useNavigate } from "react-router-dom";
const Cataloging = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const [filteredRows, setFilteredRows] = useState(mockDataContacts);
  const [deleteRowId, setDeleteRowId] = useState(null);
  const handleSearchTitle = (value) => {
  const newfilteredRows = filteredRows.filter((row) =>
      String(row.title).toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRows(newfilteredRows);
  };

  const handleSearchAuthor = (value) => {
    const newfilteredRows = filteredRows.filter((row) =>
      String(row.author).toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRows(newfilteredRows);
  };

  const handleSearchISBN = (value) => {
    const newfilteredRows = filteredRows.filter((row) =>
      String(row.isbn).toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRows(newfilteredRows);
  };

  const handleSearchPublisher = (value) => {
    const newfilteredRows = filteredRows.filter((row) =>
      String(row.publisher).toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRows(newfilteredRows);
  };

  const handleSearchPublicationDate = (value) => {
    const newfilteredRows = filteredRows.filter((row) =>
      String(row.publication_date).toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRows(newfilteredRows);
  };

  const handleSearchBarCode = (value) => {
    const newfilteredRows = filteredRows.filter((row) =>
      String(row.barcode).toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRows(newfilteredRows);
  };

  const handleSearchAvailability = (value) => {
    const newfilteredRows = filteredRows.filter((row) =>
      String(row.availability).toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRows(newfilteredRows);
  };

  const handleClearSearch = () => {

    setFilteredRows(mockDataContacts);
    document.querySelectorAll("input[type='text']").forEach((input) => {
      input.value = "";
    });
  };

  const handleDelete = (id) => {
    setDeleteRowId(id);
  };

  const handleConfirmDelete = () => {
    setFilteredRows((rows) => rows.filter((row) => row.id !== deleteRowId));
    setDeleteRowId(null);
  };

  const handleCloseDialog = () => {
    setDeleteRowId(null);
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
      renderCell: (params) => (
        <Box
          sx={{
            color:
              params.value === "Available"
                ? "#03C988"
                : params.value === "On Loan"
                ? "#FE3535"
                : "#0A2A5C",
            borderRadius: "4px",
            padding: "4px 8px",
          }}
        >
          {params.value}
        </Box>
      )
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
        onClick={() => navigate("/addBook")}
        >
          add book
      </Button>
      </Box>
      <Box
  style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "16px",
    backgroundColor: "#F6F6E9",
    padding: "16px",
    borderRadius: "8px",
  }}
>
  <Typography variant="subtitle1" sx={{ marginRight: "8px", fontSize: "20px" }}>
    Search:
  </Typography>
  <TextField
    size="small"
    placeholder="Title"
    variant="outlined"
    onChange={(e) => handleSearchTitle(e.target.value)}
    sx={{ marginRight: "8px" }}
  />
  <TextField
    size="small"
    placeholder="Author"
    variant="outlined"
    onChange={(e) => handleSearchAuthor(e.target.value)}
    sx={{ marginRight: "8px" }}
  />
  <TextField
    size="small"
    placeholder="ISBN"
    variant="outlined"
    onChange={(e) => handleSearchISBN(e.target.value)}
    sx={{ marginRight: "8px" }}
  />
  <TextField
    size="small"
    placeholder="Publisher"
    variant="outlined"
    onChange={(e) => handleSearchPublisher(e.target.value)}
    sx={{ marginRight: "8px" }}
  />
  <TextField
    size="small"
    placeholder="Publication Date"
    variant="outlined"
    onChange={(e) => handleSearchPublicationDate(e.target.value)}
    sx={{ marginRight: "8px" }}
  />
  <TextField
    size="small"
    placeholder="BarCode"
    variant="outlined"
    onChange={(e) => handleSearchBarCode(e.target.value)}
    sx={{ marginRight: "8px" }}
  />
  <TextField
    size="small"
    placeholder="Availability"
    variant="outlined"
    onChange={(e) => handleSearchAvailability(e.target.value)}
    sx={{ marginRight: "8px" }}
  />
  <Button size="small" onClick={() => handleClearSearch()}>
    Clear
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
            color: `#000000 !important`,
            gap:'200px'
          },

        }}
      >
        <DataGrid
          rows = {filteredRows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
      <Dialog
  open={Boolean(deleteRowId)}
  onClose={handleCloseDialog}
  sx={{ "& .MuiDialog-paper": { width: "400px" } }}
>
  <DialogTitle>Confirm Delete</DialogTitle>
  <DialogContent>
    <Typography>Are you sure you want to delete this row?</Typography>
  </DialogContent>
  <DialogActions sx={{ justifyContent: "center", pb: "24px" }}>
    <Button
      onClick={handleCloseDialog}
      variant="contained"
      sx={{ backgroundColor: "#4caf50", color: "#fff", minWidth: "120px", mr: "16px" }}
    >
      Cancel
    </Button>
    <Button
      onClick={handleConfirmDelete}
      variant="contained"
      sx={{ backgroundColor: "#f44336", color: "#fff", minWidth: "120px" }}
    >
      Delete
    </Button>
  </DialogActions>
</Dialog>
                </Box>
  );
};
export default Cataloging;
