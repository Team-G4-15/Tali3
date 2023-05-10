import React, { useContext, useEffect, useLayoutEffect } from "react";
import {
    Box,
    Button,
    TextField,
    useMediaQuery,
} from "@mui/material";
import Header from "./Header";
import { Formik } from "formik";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { AddingContext } from "../contexts/AddingContext";


export const AddAuthor = ({ style }) => {

    useEffect(() => {
        console.log("Author opned hdvsh effect");
    }, [])


    const isNonMobile = useMediaQuery("(min-width:600px)");


    const { handleCloseAuthorAdd, handleOpenBookAdd, setPublisher } = useContext(AddingContext);

    const handleFormSubmit = (values) => {

        handleCloseAuthorAdd();
        handleOpenBookAdd();

        // HERE IM APPENDING TO THE EXISTING PUBLISHERS THE NEW AUTHOR.  
        // IDK WHAT'S THE ROUTE FOR ADDING THE AUTHOR, (BACKEND BOIZ) JUST REPLACE THE THING HERE.
        axiosClient
            .post("/books/author", values)
            .then((respose) => {
                // BACKEND BOIZ, PUT THE NEW AUTHOR IN THE DATABASE HERE... ITS VALUE IS values.author_name
                setPublisher(
                    previousPublishers => (
                        [
                            ...previousPublishers,
                            ,
                            {
                                // 
                            }
                        ]
                    ));
            })
            .catch((err) => {
                // HANDLE ERRORS HERE.
            });
    }
    return (
        <>
            <Box m="20px" sx={style}>

                <Header
                    title="Add an Author"
                    subtitle="Add an author to Tali3's Database"
                />
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                >
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
                                    "& > div": {
                                        gridColumn: isNonMobile
                                            ? undefined
                                            : "span 2",
                                    },
                                }}
                            >
                                <TextField
                                    fullWidth
                                    required
                                    variant="filled"
                                    type="text"
                                    label="Author Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.author_name}
                                    name="author_name"
                                    sx={{ gridColumn: "span 4" }}
                                />
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
                                    Add Author
                                </Button>
                            </Box>

                        </form>
                    )}
                </Formik>
            </Box>
        </>

    )



}


let initialValues = {
    author_name: ""
}