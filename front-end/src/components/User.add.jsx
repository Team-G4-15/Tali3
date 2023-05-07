import React, { useState } from "react";
import { Box, Button, InputLabel, MenuItem, Select, TextField, useMediaQuery } from "@mui/material";
import Header from "./Header";
import { useUserContext } from "../contexts/UserContextProvider";
import { Formik } from "formik";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { useNavigate } from "react-router-dom";
const ADDUser = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate();
    let { setUser, setToken } = useUserContext();
    let [error, setErrors] = useState(null); //



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
                <Header title="Add Member" subtitle="Add a memeber to Tali3's Database" />
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
                                    label="Member Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.book_title}
                                    name="patron_email"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="first name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.book_keywords}
                                    name="first_name"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="last name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.book_locationID}
                                    name="last_name"
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="number"
                                    label="University id"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.book_isbn}
                                    name="university_id"
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <InputLabel
                                    id="demo-simple-select-label">Type Member</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.memeber_type}
                                    label="memeber type"
                                    name="memeber_type"
                                    onChange={handleChange}
                                    sx={{ gridColumn: "span 4" }}

                                >
                                    <MenuItem value={"Student"} name="type1">Student</MenuItem>
                                    <MenuItem value={"Professor"} name="type2">Professor</MenuItem>
                                    <MenuItem value={"Other"} name="type3">Other</MenuItem>
                                </Select>
                                     </Box>
                            <Box display="flex" justifyContent="center" mt="20px">
                                <Button type="submit" color="secondary" variant="contained" onClick={handleSubmit}>
                                    Add Member
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
    patron_email: "",
    first_name: "",
    last_name: "",
    university_id: "",
    memeber_type: "",
    type1 : "",
    type2 : "",
    type3 : ""
};

export default ADDUser;