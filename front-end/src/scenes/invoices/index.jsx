import { Box, Button, Typography, useTheme, Modal, Collapse, Alert, IconButton, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import AddBook from "../../components/Book.add";
import { createContext, useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import CloseIcon from '@mui/icons-material/Close';
import { BookAddingContext } from "../../contexts/BookAddingContext";

const Cataloging = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const [successOpen, setSuccessOpen] = useState(null);
  const [errorOpen, setErrorOpen] = useState(null);
  const [processing, setProcessing] = useState(null);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    maxHeight: "75%",
    borderRadius: "2.5%"
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">


      <Box sx={{ justifyContent: "space-between", display: "flex" }}>
        <Header title="Cataloging" subtitle="Tali3 Library" />

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddBoxIcon />}
          sx={{
            backgroundColor: "#FD5F00",
            color: "white",
            "&:hover": {
              backgroundColor: "#FF7100",
            },
            "&:active": {
              backgroundColor: "#FF7100",
            },
            "&:focus": {
              backgroundColor: "#FF7100",
            }
          }}
          onClick={handleOpen}
        >Add a Book</Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        keepMounted
      >
        <BookAddingContext.Provider value={{
          setErrorOpen, setSuccessOpen, handleClose, setProcessing
        }}>

          <AddBook style={style} />
        </BookAddingContext.Provider>
      </Modal>

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
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >


        <Collapse
          in={processing}
        >
          <Box
            sx={{ display: "flex ", justifyContent: "center", mb: 2 }}
          >
            <CircularProgress />
          </Box>
        </Collapse>




        <Collapse in={successOpen}
        >
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={
                  () => setSuccessOpen(false)
                }
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{
              mb: 2
            }}
          >
            Book Added Succesfully !
          </Alert>
        </Collapse>
        <Collapse in={errorOpen} >

          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={
                  () => setErrorOpen(false)
                }
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }} >
            Server Error Occured When Adding The Book
          </Alert>
        </Collapse>
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Cataloging;
