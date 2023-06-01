import { useEffect, useState } from "react";
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
import UpdateIcon from "@mui/icons-material/Update";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { axiosClient } from "../../utilities/axiosClient";
import AddMember from "../../components/AddMember";
import { AddingContext } from "../../contexts/AddingContext";

import { HandleSearchChanges } from "../../utilities/SearchHelper";

const Member = () => {
    const theme = useTheme();

    const colors = tokens(theme.palette.mode);

    // CONTROLLERS FOR ADD Member MODAL
    const [openMemberAdd, setOpenMemberAdd] = useState(false);
    const handleOpenAdd = () => setOpenMemberAdd(true);
    const handleCloseMemberAdd = () => setOpenMemberAdd(false);
    //const navigate = useNavigate();
    const [filteredRows, setFilteredRows] = useState([]);
    const [initialRows, setInitialRows] = useState([]);
    const [deleteRowId, setDeleteRowId] = useState(null);
    const [successOpen, setSuccessOpen] = useState(null);
    const [errorOpen, setErrorOpen] = useState(null);
    const [processing, setProcessing] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    // a dummy variable indicating that a book was added successfully so that we will add it the current list of books
    const [searchState, setSearchState] = useState({});

    // we need to refactor the state
    const [pageNumber, setPageNumber] = useState(0);
    const handleSearchEmail = (value) => {
        // this is the function that handles the search input changing fields
        HandleSearchChanges(
            value,
            searchState,
            "patron_email",
            filteredRows,
            initialRows,
            setSearchState,
            setFilteredRows
        );
    };
    useEffect(() => {
        axiosClient
            .get("/patrons/paginate")
            .then((res) => {
                console.log(res.data.data);
                setFilteredRows(res.data.data);
                setInitialRows(res.data.data);
            })
            .catch((err) => {});
    }, []);
    const handleSearchFirst_Name = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "first_name",
            filteredRows,
            initialRows,
            setSearchState,
            setFilteredRows
        );
    };

    const handleSearchLast_Name = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "last_name",
            filteredRows,
            initialRows,
            setSearchState,
            setFilteredRows
        );
    };

    const handleSearchType = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "type",
            filteredRows,
            initialRows,
            setSearchState,
            setFilteredRows
        );
    };

    const handleSearchUniversity = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "university",
            filteredRows,
            initialRows,
            setSearchState,
            setFilteredRows
        );
    };
    const handleClearSearch = () => {
        setFilteredRows(initialRows);
        document.querySelectorAll("input[type='text']").forEach((input) => {
            input.value = "";
        });
    };

    const handleDelete = (id) => {
        axiosClient
            .delete(`/patrons/${id}`)
            .then((res) => {
                //setDeleteRowId(id);
            })
            .catch((err) => {
                // do something for netwok error
            });
    };

    const handleUpdate = (id, updatedMember) => {
        setProcessing(true);
        axiosClient
            .put(`/book/${id}`, updatedMember)
            .then((res) => {
                const updatedRows = filteredRows.map((row) => {
                    if (row.id === id) {
                        return {
                            ...row,
                            ...updatedMember,
                        };
                    }
                    return row;
                });
                setFilteredRows(updatedRows);
                setInitialRows(updatedRows);
                setSuccessOpen(true);
                setProcessing(false);
            })
            .catch((err) => {
                setErrorMessage(err.message);
                setErrorOpen(true);
                setProcessing(false);
            });
    };

    const handleConfirmDelete = () => {
        setFilteredRows((rows) => rows.filter((row) => row.id !== deleteRowId));
        setDeleteRowId(null);
        handleDelete(deleteRowId);
    };

    const handleCloseDialog = () => {
        setDeleteRowId(null);
    };
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [selectedMember, setSelectedMember] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const [universities, setUniversities] = useState([]);
    useEffect(() => {
        axiosClient.get("/universities").then((response) => {
            setUniversities(response.data);
        });
    }, []);

    const handleMemberRowClick = (book) => {
        setSelectedMember(book);
        setDialogOpen(true);
    };

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
        {
            field: "patron_email",
            headerName: "Email",
            flex: 1,
            renderCell: (params) => (
                <Button onClick={() => handleMemberRowClick(params.row)}>
                    {params.value}
                </Button>
            ),
        },
        {
            field: "first_name",
            headerName: "First Name",
            cellClassName: "name-column--cell",
        },
        {
            field: "last_name",
            headerName: "Last Name",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "delete",
            headerName: "",
            renderCell: (params) => (
                <IconButton
                    onClick={() => setDeleteRowId(params.row.id)}
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
                <Header
                    title="Members"
                    subtitle="List of Members in The Library"
                />
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
                    onClick={handleOpenAdd}
                >
                    Add Member
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<UpdateIcon />}
                    sx={{
                        backgroundColor: "#1976d2",
                        "&:hover": {
                            backgroundColor: "#1e88e5",
                        },
                        "&:focus": {
                            backgroundColor: "#1e88e5",
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
                    }}
                    onClick={handleUpdate}
                >
                    Update Member
                </Button>
            </Box>
            <Modal
                open={openMemberAdd}
                onClose={handleCloseMemberAdd}
                keepMountedkeepMounted
            >
                <AddingContext.Provider
                    value={{
                        setErrorOpen,
                        setSuccessOpen,
                        setErrorMessage,
                        setFilteredRows,
                        setInitialRows,
                        setProcessing,
                        universities,
                        handleCloseMemberAdd,
                    }}
                >
                    <AddMember style={style} />
                </AddingContext.Provider>
            </Modal>
            <Box
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "16px",
                    backgroundColor: colors.primary[400],
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
                    placeholder="Email"
                    variant="outlined"
                    onChange={(e) => handleSearchEmail(e.target.value)}
                    sx={{ marginRight: "8px" }}
                />
                <TextField
                    size="small"
                    placeholder="First Name"
                    variant="outlined"
                    onChange={(e) => handleSearchFirst_Name(e.target.value)}
                    sx={{ marginRight: "8px" }}
                />
                <TextField
                    size="small"
                    placeholder="Last Name"
                    variant="outlined"
                    onChange={(e) => handleSearchLast_Name(e.target.value)}
                    sx={{ marginRight: "8px" }}
                />
                <TextField
                    size="small"
                    placeholder="Type"
                    variant="outlined"
                    onChange={(e) => handleSearchType(e.target.value)}
                    sx={{ marginRight: "8px" }}
                />
                <TextField
                    size="small"
                    placeholder="University"
                    variant="outlined"
                    onChange={(e) => handleSearchUniversity(e.target.value)}
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
                        Member Added Succesfully !
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
                        {errorMessage}
                    </Alert>
                </Collapse>

                <DataGrid
                    rows={filteredRows}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    onPageChange={(newPage) => {
                        if (newPage > pageNumber) {
                            console.log("Next Page");
                        } else {
                            console.log("Previous Page");
                        }
                    }}
                    onRowClick={(params) => setSelectedMember(params.row.id)}
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
                        Are you sure you want to delete this Member?
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
export default Member;
