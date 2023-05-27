import React, { useState } from "react";
import { Box, Button, InputLabel, MenuItem, Select, TextField, useMediaQuery } from "@mui/material";
import Header from "./Header";
import { useUserContext } from "../contexts/UserContextProvider";
import { Formik } from "formik";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemText } from '@mui/material';
const AddLoan = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 15);
    const [selectedDate, setSelectedDate] = useState(currentDate.toISOString().split('T')[0]);
    const [currentDat, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate();
    let { setUser, setToken } = useUserContext();
    let [error, setErrors] = useState(null); //
    const books = [
        { item_id: 1, title: 'Book 1', author: 'Author 1' },
      ];
    const handleFormSubmit = (values) => {

        console.log(values);

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
                <Header title="Loan an Item" />
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
                                <List>
      {books.map(book => (
        <ListItem key={book.id}>
          <ListItemText primary={book.title} secondary={`Author: ${book.author}`} />
        </ListItem>
      ))}
    </List>
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Loaner Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.book_title}
                                    name="patron_email"
                                    sx={{ gridColumn: "span 4" }}
                                />
                                Loan Date :
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="date"
                                    label=""
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={currentDat}
                                    name="Loan_date"
                                    sx={{ gridColumn: "span 4" }}
                                />
                                Due Date :
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="date"
                                    label=""
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={selectedDate}
                                    name="Due_date"
                                    sx={{ gridColumn: "span 4" }}
                                />
                            </Box>
                            <Box display="flex" justifyContent="center" mt="20px">
                                <Button type="submit" color="secondary" variant="contained" onClick={handleSubmit}>
                                    Loan
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
    Loan_date: "",
    Due_date: "",
};

export default AddLoan;