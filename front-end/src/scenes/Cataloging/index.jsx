import {
    useContext,
    useEffect,
    useState,
    useRef,
    useLayoutEffect,
} from "react";
import { AddingContext } from "../../contexts/AddingContext";
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
import AddBook from "../../components/Book.add";
import { AddAuthor } from "../../components/Author.add";
import { AppHeightContext } from "../../contexts/AppHeight";
import { AddVendor } from "../../components/Vendor.add";
import { HandleSearchChanges } from "../../utilities/SearchHelper";

const Cataloging = () => {
    const theme = useTheme();

    const { setHeight } = useContext(AppHeightContext);
    const colors = tokens(theme.palette.mode);

    //const navigate = useNavigate();
    const [filteredRows, setFilteredRows] = useState([]);
    const [initialRows, setInitialRows] = useState([]);
    const [deleteRowId, setDeleteRowId] = useState(null);
    const [successOpen, setSuccessOpen] = useState(null);
    const [errorOpen, setErrorOpen] = useState(null);
    const [processing, setProcessing] = useState(null);

    const ref = useRef(null);

    const [height, setHeightState] = useState(0);

    useLayoutEffect(() => {
        //setHeightState(ref.current.offsetHeight);
        setHeight(ref.current.offsetHeight + 120);
        console.log(ref.current.offsetHeight);
    }, []);

    /* const handleSearchTitle = (value) => {
        const newfilteredRows = filteredRows.filter((row) =>
            String(row.title).toLowerCase().includes(value.toLowerCase())
        );
        setFilteredRows(newfilteredRows);
    }; */
    const [errorMessage, setErrorMessage] = useState(null);
    // a dummy variable indicating that a book was added successfully so that we will add it the current list of books
    const [searchState, setSearchState] = useState({});

    // we need to refactor the state
    const [pageNumber, setPageNumber] = useState(0);
    const handleSearchTitle = (value) => {
        // this is the function that handles the search input changing fields
        HandleSearchChanges(
            value,
            searchState,
            "title",
            filteredRows,
            initialRows,
            setSearchState,
            setFilteredRows
        );
    };
    useEffect(() => {
        axiosClient
            .get("/books")
            .then((res) => {
                console.log(res.data.data);
                setFilteredRows(res.data.data);
                setInitialRows(res.data.data);
            })
            .catch((err) => {});
    }, []);
    const handleSearchAuthor = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "author",
            filteredRows,
            initialRows,
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
            initialRows,
            setSearchState,
            setFilteredRows
        );
    };

    const handleSearchKeywords = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "keywords",
            filteredRows,
            initialRows,
            setSearchState,
            setFilteredRows
        );
    };

    const handleSearchPublicationDate = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "publish_date",
            filteredRows,
            initialRows,
            setSearchState,
            setFilteredRows
        );
    };

    const handleSearchLocation = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "location",
            filteredRows,
            initialRows,
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
            .delete(`/book/${id}`)
            .then((res) => {
                //setDeleteRowId(id);
            })
            .catch((err) => {
                // do something for netwok error
            });
    };

    const handleUpdate = (id, updatedBook) => {
        setProcessing(true);
        axiosClient
            .put(`/book/${id}`, updatedBook)
            .then((res) => {
                const updatedRows = filteredRows.map((row) => {
                    if (row.id === id) {
                        return {
                            ...row,
                            ...updatedBook,
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

    const [feilds, setFields] = useState([]);
    const [publisher, setPublisher] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [locations, setLocations] = useState([]);
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        //axiosClient.get("/books").then((response) => {
        //    setFilteredRows(response.data);
        //});
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

    // CONTROLLERS FOR ADD BOOK MODAL
    const [openBookAdd, setOpenBookAdd] = useState(false);
    const handleOpenBookAdd = () => setOpenBookAdd(true);
    const handleCloseBookAdd = () => setOpenBookAdd(false);

    // CONTROLLERS FOR ADD AUTHOR MODAL
    const [openAuthorAdd, setOpenAuthorAdd] = useState(false);
    const handleOpenAuthorAdd = () => {
        setOpenAuthorAdd(true);
    };
    const handleCloseAuthorAdd = () => {
        setOpenAuthorAdd(false);
        setOpenBookAdd(true);
    };

    // CONTROLLERS FOR ADD VENDOR MODAL
    const [openVendorAdd, setOpenVendorAdd] = useState(false);
    const handleOpenVendorAdd = () => {
        setOpenVendorAdd(true);
    };
    const handleCloseVendorAdd = () => {
        setOpenVendorAdd(false);
        handleOpenBookAdd();
    };

    const [selectedBook, setSelectedBook] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleBookRowClick = (book) => {
        setSelectedBook(book);
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
        { field: "pic", headerName: "Pic", flex: 0.5 },
        {
            field: "title",
            headerName: "Title",
            renderCell: (params) => (
                <Button onClick={() => handleBookRowClick(params.row)}>
                    {params.value}
                </Button>
            ),
        },
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
            field: "keywords",
            headerName: "Keywords",
            flex: 1,
        },
        {
            field: "publish_date",
            headerName: "Publication Date",
            flex: 1,
        },
        {
            field: "location",
            headerName: "Location",
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
                                : params.value === "Not Available"
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
                        <Button onClick={() => {}}> Delete</Button>
                    </Typography>
                </IconButton>
            ),
        },
    ];
    return (
        <Box m="20px" ref={ref}>
            <Box sx={{ justifyContent: "space-between", display: "flex" }}>
                <Header title="Books" subtitle="List of Books in The Library" />

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
                    onClick={handleOpenBookAdd}
                >
                    Add book
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
                    Update book
                </Button>
            </Box>
            <Modal open={openBookAdd} onClose={handleCloseBookAdd} keepMounted>
                <AddingContext.Provider
                    value={{
                        setErrorOpen,
                        setSuccessOpen,
                        setErrorMessage,
                        setFilteredRows,
                        setInitialRows,
                        setProcessing,
                        feilds,
                        publisher,
                        languages,
                        vendors,
                        locations,
                        handleOpenAuthorAdd,
                        handleOpenVendorAdd,
                        handleCloseBookAdd,
                    }}
                >
                    <AddBook style={style} />
                </AddingContext.Provider>
            </Modal>

            {/* ADDING AUTHOR MODAL */}

            <Modal
                open={openAuthorAdd}
                onClose={handleCloseAuthorAdd}
                keepMounted
            >
                <AddingContext.Provider
                    value={{
                        handleCloseAuthorAdd,
                        handleOpenBookAdd,
                        setPublisher,
                    }}
                >
                    <AddAuthor style={style} />
                </AddingContext.Provider>
            </Modal>

            {/* ADDING VENDOR MODAL */}

            <Modal
                open={openVendorAdd}
                onClose={handleCloseVendorAdd}
                keepMounted
            >
                <AddingContext.Provider
                    value={{
                        handleCloseVendorAdd,
                        handleOpenBookAdd,
                        setVendors,
                    }}
                >
                    <AddVendor style={style} />
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
                    placeholder="Keywords"
                    variant="outlined"
                    onChange={(e) => handleSearchKeywords(e.target.value)}
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
                    placeholder="Location"
                    variant="outlined"
                    onChange={(e) => handleSearchLocation(e.target.value)}
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
                    onRowClick={(params) => setSelectedBook(params.row.id)}
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
                        Are you sure you want to delete this Book?
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

            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>{selectedBook && selectedBook.title}</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            p: 2,
                            width: "100%",
                        }}
                    >
                        <img
                            src="../../public/BasicLinearAlgebra.png"
                            alt="book"
                            sx={{
                                marginRight: "50%",
                                width: "50%",
                                height: "auto",
                                objectFit: "cover",
                                borderRadius: "5px",
                            }}
                        />
                        <Typography
                            sx={{
                                mt: 2,
                                mb: 2,
                                color: "text.secondary",
                                fontSize: "1rem",
                                width: "100%",
                            }}
                        >
                            title: Linear ALGEBRA
                        </Typography>
                        <Typography
                            sx={{
                                mt: 2,
                                mb: 2,
                                color: "text.secondary",
                                fontSize: "1rem",
                            }}
                        >
                            Author: {selectedBook && selectedBook.author}
                        </Typography>
                        <Typography
                            sx={{
                                mt: 2,
                                mb: 2,
                                color: "text.secondary",
                                fontSize: "1rem",
                            }}
                        >
                            Genre: {selectedBook && selectedBook.genre}
                        </Typography>
                        <Typography
                            sx={{
                                mt: 2,
                                mb: 2,
                                color: "text.secondary",
                                fontSize: "1rem",
                            }}
                        >
                            Pages: {selectedBook && selectedBook.pages}
                        </Typography>
                        <Typography
                            sx={{
                                mt: 2,
                                mb: 2,
                                color: "text.secondary",
                                fontSize: "1rem",
                            }}
                        >
                            Published Year:{" "}
                            {selectedBook && selectedBook.publishedYear}
                        </Typography>
                        <Typography
                            sx={{
                                mt: 2,
                                mb: 2,
                                color: "text.secondary",
                                fontSize: "1rem",
                            }}
                        >
                            Language: {selectedBook && selectedBook.language}
                        </Typography>
                        <Typography
                            sx={{
                                mt: 2,
                                mb: 2,
                                color: "text.secondary",
                                fontSize: "1rem",
                            }}
                        >
                            ISBN: {selectedBook && selectedBook.isbn}
                        </Typography>
                        <Typography
                            sx={{
                                mt: 2,
                                mb: 2,
                                color: "text.secondary",
                                fontSize: "1rem",
                            }}
                        >
                            Publisher: {selectedBook && selectedBook.publisher}
                        </Typography>
                        <Typography
                            sx={{
                                mt: 2,
                                mb: 2,
                                color: "text.secondary",
                                fontSize: "1rem",
                            }}
                        >
                            Edition: {}
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
export default Cataloging;
