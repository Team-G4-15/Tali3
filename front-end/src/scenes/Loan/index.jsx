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
import { useTheme } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { axiosClient } from "../../utilities/axiosClient";
import { AppHeightContext } from "../../contexts/AppHeight";

import AddLoan from "../../components/Loan.add";
import { HandleSearchChanges } from "../../utilities/SearchHelper";
import Header from "../../components/Header";

const Loan = () => {
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

    useLayoutEffect(() => {
        //setHeightState(ref.current.offsetHeight);
        setHeight(ref.current.offsetHeight + 120);
        console.log(ref.current.offsetHeight);
    }, []);

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
            "book_title",
            filteredRows,
            initialRows,
            setSearchState,
            setFilteredRows
        );
    };
    useEffect(() => {
        axiosClient
            .get("/current_loans")
            .then((res) => {
                console.log(res.data);
                setFilteredRows(res.data);
                setInitialRows(res.data);
            })
            .catch((err) => {});
    }, []);
    const handleSearchMember = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "member_email",
            filteredRows,
            initialRows,
            setSearchState,
            setFilteredRows
        );
    };

    const handleSearchLoanDate = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "loan_date",
            filteredRows,
            initialRows,
            setSearchState,
            setFilteredRows
        );
    };

    const handleSearchDueDate = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "due_date",
            filteredRows,
            initialRows,
            setSearchState,
            setFilteredRows
        );
    };
    const handleSearchCopyNumber = (value) => {
        HandleSearchChanges(
            value,
            searchState,
            "copy_number",
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
    };

    const handleCloseDialog = () => {
        setDeleteRowId(null);
    };

    // CONTROLLERS FOR ADD BOOK MODAL
    const [openBookAdd, setOpenBookAdd] = useState(false);
    const handleOpenBookAdd = () => setOpenBookAdd(true);
    const handleCloseBookAdd = () => setOpenBookAdd(false);

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
            field: "book_title",
            headerName: "Book Title",
            renderCell: (params) => (
                <Button onClick={() => handleBookRowClick(params.row)}>
                    {params.value}
                </Button>
            ),
        },
        {
            field: "member_email",
            headerName: "Member Email",
            flex: 1,
            cellClassName: "name-column--cell",
        },

        {
            field: "loan_date",
            headerName: "Loan Date",
            flex: 1,
        },
        {
            field: "due_date",
            headerName: "Due Date",
            flex: 1,
        },
        {
            field: "copy_number",
            headerName: "Copy Number",
            flex: 1,
        },
    ];
    return (
        <Box m="20px" ref={ref}>
            <Box sx={{ justifyContent: "space-between", display: "flex" }}>
                <Header
                    title="Current Loans"
                    subtitle="List of Books in The Library"
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
                    onClick={handleOpenBookAdd}
                >
                    Add New Loan
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
                    Update Loan
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
                        handleCloseBookAdd,
                    }}
                >
                    {<AddLoan style={style} />}
                </AddingContext.Provider>
            </Modal>

            {/* ADDING Member MODAL */}

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
                    placeholder="Book Title"
                    variant="outlined"
                    onChange={(e) => handleSearchTitle(e.target.value)}
                    sx={{ marginRight: "8px" }}
                />
                <TextField
                    size="small"
                    placeholder="Member Email"
                    type="email"
                    variant="outlined"
                    onChange={(e) => handleSearchMember(e.target.value)}
                    sx={{ marginRight: "8px" }}
                />
                <TextField
                    size="small"
                    placeholder="Loan Date"
                    variant="outlined"
                    type="date"
                    onChange={(e) => handleSearchLoanDate(e.target.value)}
                    sx={{ marginRight: "8px" }}
                />
                <TextField
                    size="small"
                    type="date"
                    placeholder="Loan Date"
                    variant="outlined"
                    onChange={(e) => handleSearchDueDate(e.target.value)}
                    sx={{ marginRight: "8px" }}
                />
                <TextField
                    size="small"
                    placeholder="Copy Number"
                    variant="outlined"
                    type="number"
                    onChange={(e) => handleSearchCopyNumber(e.target.value)}
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
                        Loan Added Succesfully !
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
export { Loan };
