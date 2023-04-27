import React, { useState } from "react";
import { Box, Button, InputLabel, MenuItem, Select, TextField, useMediaQuery } from "@mui/material";
import Header from "./Header";
import { useUserContext } from "../contexts/UserContextProvider";
import { Formik } from "formik";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate();
    let { setUser, setToken } = useUserContext();
    let [error, setErrors] = useState(null); //
    const handleFormSubmit = (values) => {
        //console.log(payload);
        axiosClient
            .post("/AdminLogin", values)
            .then((respose) => {
                setUser(respose.data.user);
                setToken(respose.data.token);
                navigate("/dashboard");
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

            <Box m="20px">
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
                                    value={values.keywords}
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
                                    value={values.locationID}
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
                                    value={values.item_description}
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
                                    value={values.type}
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
                                    value={values.isbn}
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
                                    value={values.quantity}
                                    name="book_quantity"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <InputLabel
                                    id="demo-simple-select-label">Vendor ID</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.vendorID}
                                    label="VendorID"
                                    onChange={handleChange}
                                    sx={{ gridColumn: "span 4" }}

                                >
                                    <MenuItem value={values.vendor1}>MOCKDATA</MenuItem>
                                    <MenuItem value={values.vendor2}>MOCKDATA</MenuItem>
                                    <MenuItem value={values.vendor3}>MOCKDATA</MenuItem>
                                </Select>


                                <InputLabel id="demo-simple-select-label">Publisher ID</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.publisherID}
                                    label="publisherID"
                                    onChange={handleChange}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    <MenuItem value={values.publisher1}>MOCKDATA</MenuItem>
                                    <MenuItem value={values.publisher2}>MOCKDATA</MenuItem>
                                    <MenuItem value={values.publisher3}>MOCKDATA</MenuItem>
                                </Select>

                                <InputLabel id="demo-simple-select-label">Field ID</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.fieldID}
                                    label="fieldID"
                                    onChange={handleChange}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    <MenuItem value={values.field1}>MOCKDATA</MenuItem>
                                    <MenuItem value={values.field2}>MOCKDATA</MenuItem>
                                    <MenuItem value={values.field3}>MOCKDATA</MenuItem>
                                </Select>


                                <InputLabel id="demo-simple-select-label">Language Code</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.langcode}
                                    label="langcode"
                                    onChange={handleChange}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    <MenuItem value={values.langcode1}>MOCKDATA</MenuItem>
                                    <MenuItem value={values.langcode2}>MOCKDATA</MenuItem>
                                    <MenuItem value={values.langcode3}>MOCKDATA</MenuItem>
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
    locationID: "",
    item_description: "",
    type: "",
    isbn: "",
    quantity: "",
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