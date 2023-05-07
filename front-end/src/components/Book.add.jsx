import React, { useState } from "react";
import { Box, Button, InputLabel, MenuItem, Modal, Select, TextField, useMediaQuery } from "@mui/material";
import Header from "./Header";
import { useUserContext } from "../contexts/UserContextProvider";
import { Formik } from "formik";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { useNavigate } from "react-router-dom";

const AddBook = ({ style }) => {


    const isNonMobile = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate();
    let { setUser, setToken } = useUserContext();
    let [error, setErrors] = useState(null); //
    const handleFormSubmit = (values) => {

        console.log(values);

        axiosClient
            .post("/AdminLogin", values)
            .then((respose) => {
                setUser(respose.data.user);
                setToken(respose.data.token);
            })
            .catch((err) => {
                console.log(err);

                let data = err.response.data;
                if (!data.message) {
                    setErrors(data);
                } else {
                    setErrors(data.message);
                }
            });
    };
    return (
        <>
            <Box m="20px" sx={style}>
                <Header title="Add a Book" subtitle="Add a book to Tali3's Database" />
                <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                sx={{
                                    "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
                                }}
                            >
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Title"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.book_title}
                                    name="book_title"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Keywords (seperated by comma)"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.book_keywords}
                                    name="book_keywords"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Location ID"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.book_locationID}
                                    name="book_locationID"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Item Description"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.book_desc}
                                    name="book_desc"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Type (Insert a Character)"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.book_type}
                                    name="book_type"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="ISBN"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.book_isbn}
                                    name="book_isbn"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Quantity"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.book_quantity}
                                    name="book_quantity"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <InputLabel
                                    id="demo-simple-select-label">Vendor ID</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.vendorID}
                                    name="vendorID"
                                    renderValue={value => value}
                                    onChange={handleChange}
                                    sx={{ gridColumn: "span 4" }}

                                >
                                    <MenuItem value={"MOCKDATA1"} name="vendor1">VENDOR</MenuItem>
                                    <MenuItem value={"MOCKDATA2"} name="vendor2">VENDOR</MenuItem>
                                    <MenuItem value={"MOCKDATA3"} name="vendor3">VENDOR</MenuItem>
                                </Select>


                                <InputLabel id="demo-simple-select-label">Publisher ID</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.publisherID}
                                    name="publisherID"
                                    label="publisherID"
                                    onChange={handleChange}
                                    renderValue={value => value}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    <MenuItem value={"publisher1"} name="publisher1">PUBLISHER</MenuItem>
                                    <MenuItem value={"publisher2"} name="publisher2">PUBLISHER</MenuItem>
                                    <MenuItem value={"publisher3"} name="publisher3">PUBLISHER</MenuItem>
                                </Select>

                                <InputLabel id="demo-simple-select-label">Field ID</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.fieldID}
                                    label="fieldID"
                                    name="fieldID"
                                    onChange={handleChange}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    <MenuItem value={"FIELD1"} name="field1">FIELD</MenuItem>
                                    <MenuItem value={"FIELD2"} name="field2">FIELD</MenuItem>
                                    <MenuItem value={"FIELD3"} name="field3">FIELD</MenuItem>
                                </Select>


                                <InputLabel id="demo-simple-select-label">Language Code</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.langcode}
                                    label="langcode"
                                    name="langcode"
                                    onChange={handleChange}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    <MenuItem value={"LANGCODE1"} name="langcode1">MOCKDATA</MenuItem>
                                    <MenuItem value={"LANGCODE2"} name="langcode2">MOCKDATA</MenuItem>
                                    <MenuItem value={"LANGCODE3"} name="langcode3">MOCKDATA</MenuItem>
                                </Select>



                            </Box>
                            <Box display="flex" justifyContent="center" mt="20px">
                                <Button type="submit" color="secondary" variant="contained" onClick={handleSubmit}>
                                    Add Book
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>

            </Box>


        </>



    )


}
const initialValues = {
    title: "",
    book_title: "",
    book_keywords: "",
    locationID: "",
    book_desc: "",
    book_type: "",
    book_isbn: "",
    book_quantity: "",
    vendorID: "",
    vendor1: "",
    vendor2: "",
    vendor3: "",
    publisherID: "",
    publisher1: "",
    publisher2: "",
    publisher3: "",
    fieldID: "",
    field1: "",
    field2: "",
    field3: "",
    langcode: "",
    langcode1: "",
    langcode2: "",
    langcode3: ""
};

export default AddBook;