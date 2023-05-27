import React, { useContext, useEffect, useState } from "react";
import {
    Box,
    Button,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    useMediaQuery,
    Autocomplete,
} from "@mui/material";
import Header from "./Header";
import { Formik } from "formik";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { AddingContext } from "../contexts/AddingContext";
import { useUserContext } from "../contexts/UserContextProvider";
import { Add } from "@mui/icons-material";
const AddLoan = ({ style }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [error, setErrors] = useState(null);
    const [options, setOptions] = useState([]);
    const [bookTitle, setBookTitle] = useState("");
    const [patrons, setPatrons] = useState([]);
    const [book_id, setBookId] = useState("");
    const [patron_email, setMemberEmail] = useState("");
    const [copy_numbers, setCopyNumbers] = useState([]);
    const {
        setErrorOpen,
        setSuccessOpen,
        handleCloseBookAdd,
        setProcessing,
        setFilteredRows,
        setInitialRows,
        setErrorMessage,
    } = useContext(AddingContext);

    const { user } = useUserContext();

    const handleFormSubmit = (values) => {
        //setProcessing(true);

        handleCloseBookAdd();
        values = {
            ...values,
            book_id: book_id,
            book_title: bookTitle,
            patron_email: patron_email,
            member_email: patron_email,
            email: user.email,
        };

        console.log(values);
        axiosClient
            .post("/current_loan/add", values)
            .then((res) => {
                console.log(res.data.loan_id);
                setProcessing(false);
                setSuccessOpen(true);
                setFilteredRows((prev) => [
                    ...prev,
                    { id: res.data.loan_id, ...values },
                ]);
                setInitialRows((prev) => [
                    ...prev,
                    { id: res.data.loan_id, ...values },
                ]);
            })
            .catch((err) => {
                setErrorOpen(true);
                setProcessing(false);

                console.log(err);
                let data = err.response.data;
                if (!data.message) {
                    setErrorMessage(data);
                } else {
                    setErrorMessage(data.message);
                }
            });
    };

    useEffect(() => {
        axiosClient.get(`/copy_numbers?book_id=${book_id}`).then((res) => {
            console.log(res.data);
            setCopyNumbers(res.data);
        });
    }, [book_id]);
    const searchBooks = (e) => {
        if (e.target.value !== "") {
            axiosClient
                .get(`/books/search?title=${e.target.value}`)
                .then((res) => {
                    setOptions(
                        res.data.data.map((e) => {
                            return { title: e.title, id: e.book_id };
                        })
                    );
                })
                .catch((err) => console.log(err));
        }
    };

    const memberSearch = (e) => {
        if (e.target.value) {
            axiosClient
                .get(`patrons/search/emails?patron_email=${e.target.value}`)
                .then((res) => {
                    console.log(res.data);
                    setPatrons(res.data);
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <>
            <Box m="20px" sx={style}>
                <Header title="Add a New Loan" subtitle="Keep track of loans" />
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                >
                    {({ values, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                sx={{
                                    "& > div": {
                                        gridColumn: isNonMobile
                                            ? undefined
                                            : "span 4",
                                    },
                                }}
                            >
                                <Autocomplete
                                    sx={{ width: "100%", gridColumn: "span 4" }}
                                    fullWidth={true}
                                    options={options} // replace with the array of book titles fetched from the database
                                    getOptionLabel={(option) => option.title}
                                    //inputValue={initialValues.book_id}
                                    onInputChange={(e, value, other) => {
                                        let candidat = options.find(
                                            (e) => e.title === value
                                        );
                                        if (candidat) {
                                            setBookId(candidat.id);
                                            setBookTitle(candidat.title);
                                        }
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            variant="filled"
                                            // onBlur={handleBlur}
                                            onChange={(e) => {
                                                handleChange(e);
                                                searchBooks(e);
                                            }}
                                            value={values.book_id}
                                            name="book_id"
                                            sx={{ gridColumn: "span 2" }}
                                        />
                                    )}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="date"
                                    // onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.publish_date}
                                    name="loan_date"
                                    sx={{ gridColumn: "span 4", m: 0 }}
                                />

                                <InputLabel>Loan Date</InputLabel>

                                <InputLabel id="demo-simple-select-label">
                                    Due Date
                                </InputLabel>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="date"
                                    // onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.publish_date}
                                    name="due_date"
                                    sx={{ gridColumn: "span 4", m: 0 }}
                                />
                                <InputLabel id="demo-simple-select-label">
                                    Member Email
                                </InputLabel>
                                <Autocomplete
                                    sx={{ width: "100%",gridColumn: "span 4" }}
                                    options={patrons} // replace with the array of book titles fetched from the database
                                    getOptionLabel={(option) =>
                                        option.patron_email
                                    }
                                    //inputValue={initialValues.book_id}
                                    onInputChange={(e, value, other) => {
                                        setMemberEmail(value);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            variant="filled"
                                            // onBlur={handleBlur}
                                            onChange={(e) => {
                                                handleChange(e);
                                                memberSearch(e);
                                            }}
                                            type="email"
                                            value={values.patron_email}
                                            name="patron_email"
                                            sx={{ gridColumn: "span 10" }}
                                        />
                                    )}
                                />
                                <InputLabel id="demo-simple-select-label">
                                    Copy Number
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.vendor_id}
                                    name="copy_number"
                                    //renderValue={(value) => value}
                                    onChange={handleChange}
                                    sx={{ gridColumn: "span 4" }}
                                    fullWidth
                                >
                                    {copy_numbers.map((e) => {
                                        return (
                                            <MenuItem
                                                value={e.copy_number}
                                                name="v"
                                            >
                                                {e.copy_number}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="center"
                                mt="20px"
                            >
                                <Button
                                    type="submit"
                                    color="secondary"
                                    variant="contained"
                                    onClick={handleSubmit}
                                >
                                    Add Loan
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </>
    );
};
const initialValues = {
    book_id: "",
    patron_email: "",
    loan_date: "",
    due_date: "",
    copy_number: "",
};

export default AddLoan;
