import { useEffect, useState } from "react";
import { BookAddingContext } from "../../contexts/BookAddingContext";
import {
    Box,
    IconButton,
    Typography,
    Button,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Modal,
    Collapse,
    Alert,
    CircularProgress,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../utilities/axiosClient";
import AddResearchPaper from "../../components/ResearchPaper.add";
import { HandleSearchChanges } from "../../utilities/SearchHelper";

const ResearchPapers = () => {
    const theme = useTheme();
    
    const colors = tokens(theme.palette.mode);

    //const navigate = useNavigate();
    const [filteredRows, setFilteredRows] = useState(mockDataContacts);
    const [deleteRowId, setDeleteRowId] = useState(null);
    const [successOpen, setSuccessOpen] = useState(null);
    const [errorOpen, setErrorOpen] = useState(null);
    const [processing, setProcessing] = useState(null);

    const [searchState, setSearchState] = useState({});


    // we need to refactor the state
    const [pageNumber,setPageNumber]=useState(0);
    const handleSearchTitle = (value) => {
        // this is the function that handles the search input changing fields
        HandleSearchChanges(
            value,
            searchState,
            "title",
            filteredRows,
            mockDataContacts,
            setSearchState,
            setFilteredRows
        );
    };
useEffect(()=>{
    axiosClient.get("/researchpapers").then(res=>{
        setFilteredRows(res)
    }).catch(err=>{})
},[]);
    const handleSearchAuthor = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "author",
            filteredRows,
            mockDataContacts,
            setSearchState,
            setFilteredRows
        );
    };

    const handleSearchISBN = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "isbn",
            filteredRows,
            mockDataContacts,
            setSearchState,
            setFilteredRows
        );
    };

    const handleSearchPublisher = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "publisher",
            filteredRows,
            mockDataContacts,
            setSearchState,
            setFilteredRows
        );
    };

    const handleSearchPublicationDate = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "publicationDate",
            filteredRows,
            mockDataContacts,
            setSearchState,
            setFilteredRows
        );
    };

    const handleSearchBarCode = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "barcode",
            filteredRows,
            mockDataContacts,
            setSearchState,
            setFilteredRows
        );
    };

    const handleSearchAvailability = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "availability",
            filteredRows,
            mockDataContacts,
            setSearchState,
            setFilteredRows
        );
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

    const [feilds, setFields] = useState([]);
    const [publisher, setPublisher] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [locations, setLocations] = useState([]);
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        axiosClient.get("/languages").then((response) => {
            setLanguages(response.data);
        });
        axiosClient.get("/vendors").then((response) => {
            setVendors(response.data);
        });
        axiosClient.get("/fields").then((response) => {
            setFields(response.data);
        });
        axiosClient.get("/authors").then((response) => {
            setPublisher(response.data);
        });
        axiosClient.get("/locations").then((response) => {
            setLocations(response.data);
        });
    }, []);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        overflowY: "auto",
        maxHeight: "75%",
        borderRadius: "2.5%",
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
            field: "publicationDate",
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
            ),
        },
        {
            field: "delete",
            headerName: "",
            flex: 1,
            renderCell: (params) => (
                <IconButton
                    onClick={() => handleDelete(params.row.id)}
                    sx={{
                        backgroundColor: "#ff1744",
                        borderRadius: "5%",
                        color: "#fff",
                        width: "80%",
                        height: "50%",
                        "&:hover": {
                            backgroundColor: "#b2102f",
                        },
                    }}
                >
                    <Typography variant="srOnly" sx={{ fontSize: "51%" }}>
                        Delete
                    </Typography>
                </IconButton>
            ),
        },
    ];
    return (
        <Box m="20px">
            <Box sx={{ justifyContent: "space-between", display: "flex" }}>
                <Header title="Research papers" subtitle="List of research papers in The Library" />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<LibraryBooksIcon />}
                    sx={{
                        backgroundColor: "#FD5F00",
                        "&:hover": {
                            backgroundColor: "#FF7100",
                        },
                        "&:focus": {
                            backgroundColor: "#FF7100",
                        },
                        borderRadius: "2.5%",
                        color: "#fff",
                        width: "10%",
                        height: "130%",
                        "& .MuiButton-label": {
                            fontSize: "12px",
                            fontWeight: "bold",
                        },
                        fontWeight: "bold",
                        textTransform: "none",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.24)",
                        "&:disabled": {
                            backgroundColor: "#A0A0A0",
                        },
                        "&:disabled:hover": {
                            backgroundColor: "#A0A0A0",
                        },
                    }}
                    onClick={handleOpen}
                >
                    add book
                </Button>
            </Box>
            <Modal open={open} onClose={handleClose} keepMounted>
                <BookAddingContext.Provider
                    value={{
                        setErrorOpen,
                        setSuccessOpen,
                        handleClose,
                        setProcessing,
                        feilds,
                        publisher,
                        languages,
                        vendors,
                        locations,
                    }}
                >
                    <AddResearchPaper style={style} />
                </BookAddingContext.Provider>
            </Modal>
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
                <Typography
                    variant="subtitle1"
                    sx={{ marginRight: "8px", fontSize: "20px" }}
                >
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
                    onChange={(e) =>
                        handleSearchPublicationDate(e.target.value)
                    }
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
                m="30px"
                mb="30px"
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
                        color: `colors.primary[1000] !important`,
                    },
                }}
            >
                <Collapse in={processing}>
                    <Box
                        sx={{
                            display: "flex ",
                            justifyContent: "center",
                            mb: 2,
                        }}
                    >
                        <CircularProgress />
                    </Box>
                </Collapse>

                <Collapse in={successOpen}>
                    <Alert
                        severity="success"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => setSuccessOpen(false)}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{
                            mb: 2,
                        }}
                    >
                        Book Added Succesfully !
                    </Alert>
                </Collapse>
                <Collapse in={errorOpen}>
                    <Alert
                        severity="error"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => setErrorOpen(false)}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Server Error Occured When Adding The Book
                    </Alert>
                </Collapse>

                <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    onPageChange={(newPage)=>{
                        if(newPage>pageNumber){
                            console.log("Next Page");
                        }else{
                            console.log("Previous Page");
                        }
                    }
                }

                />
            </Box>
            <Dialog
                open={Boolean(deleteRowId)}
                onClose={handleCloseDialog}
                sx={{ "& .MuiDialog-paper": { width: "400px" } }}
            >
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to delete this row?
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: "center", pb: "24px" }}>
                    <Button
                        onClick={handleCloseDialog}
                        variant="contained"
                        sx={{
                            backgroundColor: "#4caf50",
                            color: "#fff",
                            minWidth: "120px",
                            mr: "16px",
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirmDelete}
                        variant="contained"
                        sx={{
                            backgroundColor: "#f44336",
                            color: "#fff",
                            minWidth: "120px",
                        }}
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
export default ResearchPapers;
