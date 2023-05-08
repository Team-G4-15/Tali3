import React, { useContext, useState } from "react";
import {  Box, Button,  InputLabel, MenuItem, Select, TextField, useMediaQuery } from "@mui/material";
import Header from "./Header";
import { Formik } from "formik";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { useNavigate } from "react-router-dom";
import { BookAddingContext } from "../contexts/BookAddingContext";

const AddBook = ({ style }) => {
    //response not working/compatible.
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate();
    const [error, setErrors] = useState(null);
    const { setErrorOpen, setSuccessOpen, handleClose, setProcessing } = useContext(BookAddingContext);


    const handleFormSubmit = (values) => {
        setProcessing(true);


        handleClose();


        axiosClient
            .post("/books/add", values)
            .then((respose) => {
                setProcessing(false);
                setSuccessOpen(true);
                
            })
            .catch((err) => {
                setErrorOpen(true);
                setProcessing(false);

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
                                    value={values.title}
                                    name="title"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Keywords (seperated by comma)"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.keywords}
                                    name="keywords"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Location ID"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.location_id}
                                    name="location_id"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Item Description"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.description}
                                    name="description"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Type (Insert a Character)"
                                    onBlur={handleBlur}
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
                                    onBlur={handleBlur}
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
                                    onBlur={handleBlur}
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
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.edition}
                                    name="edition"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="date"
                                    label="Publish Date (dd/mm/yyyy) "
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.publish_date}
                                    name="publish_date"
                                    sx={{ gridColumn: "span 4" }}
                                />



                                <InputLabel
                                    id="demo-simple-select-label">Vendor ID</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.vendor_id}
                                    name="vendor_id"
                                    renderValue={value => value}
                                    onChange={handleChange}
                                    sx={{ gridColumn: "span 4" }}

                                >
                                    <MenuItem value={1} name="vendor1">VENDOR</MenuItem>
                                    <MenuItem value={2} name="vendor2">VENDOR</MenuItem>
                                    <MenuItem value={3} name="vendor3">VENDOR</MenuItem>
                                </Select>


                                <InputLabel id="demo-simple-select-label">Publisher ID</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.publisher_id}
                                    name="publisher_id"
                                    onChange={handleChange}
                                    renderValue={value => value}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    <MenuItem value={1} name="publisher1">MOCKDATA</MenuItem>
                                    <MenuItem value={2} name="publisher2">MOCKDATA</MenuItem>
                                    <MenuItem value={3} name="publisher3">MOCKDATA</MenuItem>
                                </Select>

                                <InputLabel id="demo-simple-select-label">Field ID</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.field_name}
                                    name="field_name"
                                    onChange={handleChange}
                                    renderValue={value => value}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    <MenuItem value={"testField"} name="field1">MOCKDATA</MenuItem>
                                    <MenuItem value={"MOCKDATA2"} name="field2">MOCKDATA</MenuItem>
                                    <MenuItem value={"MOCKDATA3"} name="field3">MOCKDATA</MenuItem>
                                </Select>


                                <InputLabel id="demo-simple-select-label">Language Code</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.language_code}
                                    name="language_code"
                                    onChange={handleChange}
                                    renderValue={value => value}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    <MenuItem value={"code1"} name="langcode1">MOCKDATA</MenuItem>
                                    <MenuItem value={"MOCKDATA2"} name="langcode2">MOCKDATA</MenuItem>
                                    <MenuItem value={"MOCKDATA3"} name="langcode3">MOCKDATA</MenuItem>
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
    edition: "",
    publish_date: ""
};

export default AddBook;
