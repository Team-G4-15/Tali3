import React, { useContext, useState } from "react";
import {
    Box,
    Button,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    useMediaQuery,
} from "@mui/material";
import Header from "./Header";
import { Formik } from "formik";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { useNavigate } from "react-router-dom";
import { BookAddingContext } from "../contexts/BookAddingContext";

const AddBook = ({ style }) => {
    //response not working/compatible.

    const [locationState, setLocationState] = useState("");
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate();
    const {
        setErrorOpen,
        setSuccessOpen,
        setErrorMessage,
        setFilteredRows,
        handleClose,
        setProcessing,
        feilds,
        publisher,
        languages,
        vendors,
        locations,
    } = useContext(BookAddingContext);

    const handleFormSubmit = (values) => {
        setProcessing(true);
        handleClose();

        axiosClient
            .post("/books/add", values)
            .then((respose) => {
                console.log(respose);
                values = {
                    ...values,
                    id: respose.data.book_id,
                    availability: "Available",
                    location: locationState
                };
                setProcessing(false);
                setSuccessOpen(true);
                setFilteredRows((prev) => [...prev, values]);
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
    return (
        <>
            <Box m="20px" sx={style}>
                <Header
                    title="Add a Book"
                    subtitle="Add a book to Tali3's Database"
                />
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                >
                    {({
                        values,
                        errors,
                        touched,
                        //handleBlur,
                        handleChange,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                sx={{
                                    "& > div": {
                                        gridColumn: isNonMobile
                                            ? undefined
                                            : "span 2",
                                    },
                                }}
                            >
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Title"
                                    // onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.title}
                                    name="title"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Keywords (seperated by comma)"
                                    // onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.keywords}
                                    name="keywords"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Item Description"
                                    // onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.description ?? ""}
                                    name="description"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Type (Insert a Character)"
                                    // onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.type}
                                    name="type"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="ISBN"
                                    // onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.isbn}
                                    name="isbn"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Quantity"
                                    // onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.quantity}
                                    name="quantity"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Edition"
                                    // onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.edition}
                                    name="edition"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="date"
                                    // onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.publish_date}
                                    name="publish_date"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <InputLabel id="demo-simple-select-label">
                                    Vendor
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.vendor_id}
                                    name="vendor_id"
                                    //renderValue={(value) => value}
                                    onChange={handleChange}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    {vendors.map((e) => {
                                        return (
                                            <MenuItem
                                                value={e.vendor_id}
                                                name="v"
                                            >
                                                {e.name}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>

                                <InputLabel id="demo-simple-select-label">
                                    Publisher
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.publisher_id}
                                    name="publisher_id"
                                    onChange={handleChange}
                                    //renderValue={(value) => value}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    {publisher.map((e) => {
                                        return (
                                            <MenuItem
                                                value={e.author_id}
                                                name="v"
                                            >
                                                {e.author_name}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>

                                <InputLabel id="demo-simple-select-label">
                                    Field
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.field_name}
                                    name="field_name"
                                    onChange={handleChange}
                                    renderValue={(value) => value}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    {feilds.map((e) => {
                                        return (
                                            <MenuItem
                                                value={e.field_name}
                                                name="v"
                                            >
                                                {e.field_name}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>

                                <InputLabel id="demo-simple-select-label">
                                    Language Code
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.language_code}
                                    name="language_code"
                                    onChange={handleChange}
                                    //renderValue={(value) => value}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    {languages.map((e) => {
                                        return (
                                            <MenuItem
                                                value={e.language_code}
                                                name="v"
                                            >
                                                {e.language}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>

                                <InputLabel id="demo-simple-select-label">
                                    Location
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.location_id}
                                    name="location_id"
                                    onChange={event => {
                                        handleChange(event);
                                        setLocationState(() => {
                                            let locationRow = locations.filter(
                                                (e) =>
                                                e.location_id ===
                                                event.target.value
                                            );



                                            return (
                                                locationRow[0].aisle +
                                                "-" +
                                                locationRow[0].shelf
                                            );
                                        });
                                    }}
                                    //renderValue={(value) => value}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    {locations.map((e) => {
                                        return (
                                            <MenuItem
                                                value={e.location_id}
                                                name="v"
                                            >
                                                {e.aisle}-{e.shelf}
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
                                    Add Book
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
    title: "",
    keywords: "",
    location_id: "",
    description: "",
    type: "",
    isbn: "",
    quantity: "",
    vendor_id: "",
    publisher_id: "",
    field_name: "",
    language_code: "",
    location: "",
    edition: "",
    publish_date: "",
};

export default AddBook;
