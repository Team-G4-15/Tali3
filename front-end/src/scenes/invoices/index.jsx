import {
    Box,
    Button,
    Typography,
    useTheme,
    Modal,
    Collapse,
    Alert,
    IconButton,
    CircularProgress,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";


// import { mockDataInvoices } from "../../data/";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import AddBook from "../../components/Book.add";
import { useState, useEffect } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CloseIcon from "@mui/icons-material/Close";
import { AddingContext } from "../../contexts/AddingContext";
import { axiosClient } from "../../utilities/axiosClient";
import { AddAuthor } from "../../components/Author.add";

const Cataloging = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const colors = tokens(theme.palette.mode);
    //States for the POPUS
    const [successOpen, setSuccessOpen] = useState(null);
    const [errorOpen, setErrorOpen] = useState(null);
    const [processing, setProcessing] = useState(null);

    // data to be passed to the model
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
            console.log(publisher);
            setPublisher(response.data);
        });
        axiosClient.get("/locations").then((response) => {
            setLocations(response.data);
        });
    }, []);

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



    // CONTROLLERS FOR ADD BOOK MODAL
    const [openBookAdd, setOpenBookAdd] = useState(false);
    const handleOpenBookAdd = () => setOpenBookAdd(true);
    const handleCloseBookAdd = () => setOpenBookAdd(false);


    // CONTROLLERS FOR ADD AUTHOR MODAL
    const [openAuthorAdd, setOpenAuthorAdd] = useState(false);
    const handleOpenAuthorAdd = () => {
        handleCloseBookAdd();
        setOpenAuthorAdd(true);
    }
    const handleCloseAuthorAdd = () => {
        setOpenAuthorAdd(false);
        handleOpenBookAdd();
    }




    // CONTROLLERS FOR ADD VENDOR MODAL
    const [openVendorAdd, setOpenVendorAdd] = useState(false);
    const handleOpenVendorAdd = () => {
        handleCloseBookAdd();
        setOpenVendorAdd(true);
    }
    const handleCloseVendorAdd = () => {
        setOpenVendorAdd(false);
        handleOpenBookAdd();
    };



    // CONTROLLERS FOR THE PROGRESS BAR
    const [openProgressBar, setOpenProgressBar] = useState(false);
    const handleOpenProgressBar = () => {
        setOpenProgressBar(true);
    }
    const handleCloseProgressBar = () => {
        setOpenProgressBar(false);
    }



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
                    onClick={() => setOpenProgressBar(true)}
                >WACK</Button>

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
                        },
                    }}
                    onClick={handleOpenBookAdd}
                >
                    Add a Book
                </Button>
            </Box>


            {/* ADDING A BOOK MODAL */}

            <Modal
                open={openBookAdd}
                onClose={handleCloseBookAdd}
                keepMounted
            >
                <AddingContext.Provider
                    value={{
                        setErrorOpen,
                        setSuccessOpen,
                        handleCloseBookAdd,
                        setProcessing,
                        feilds,
                        publisher,
                        languages,
                        vendors,
                        locations,
                        handleOpenAuthorAdd
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
                    values={{
                        handleCloseAuthorAdd,
                        handleOpenBookAdd,
                        setPublisher
                    }}
                >
                    <AddAuthor style={style} />
                </AddingContext.Provider>
            </Modal>


            {/* ADDING VENDOR MODAL */}

            {/* <Modal
                open={openAuthorAdd}
                onClose={handleCloseAuthorAdd}
                keepMounted
            >
                <AddingContext.Provider
                    values={
                        handleCloseAuthorAdd
                    }
                >
                    <AddVendor style={style} />
                </AddingContext.Provider>
            </Modal> */}


            {/* PROGRESS BAR MODAL */}


            <Modal
                open={openProgressBar}
            >
                <CircularProgress />
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
                    checkboxSelection
                    // rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default Cataloging;
