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
import { axiosClient } from "../utilities/axiosClient";
import { AddingContext } from "../contexts/AddingContext";

const AddMember = ({ style }) => {
    const [error, setErrors] = useState(null);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const {
        setErrorOpen,
        setSuccessOpen,
        setErrorMessage,
        setFilteredRows,
        setInitialRows,
        setProcessing,
        universities,
        handleCloseMemberAdd,
    } = useContext(AddingContext);

    const [selectedValue, setSelectedValue] = useState("student");

    const handleChangeSelect = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleFormSubmit = (values) => {
        console.log(values);
        handleCloseMemberAdd();
        values.type = selectedValue;
        axiosClient
            .post("/patrons/add", values)
            .then((respose) => {
                values = {
                    ...values,
                };
                console.log(values);
                setProcessing(false);
                setSuccessOpen(true);
                setFilteredRows((prev) => [
                    ...prev,
                    { ...values, id: prev.length + 1 },
                ]);
                setInitialRows((prev) => [
                    ...prev,
                    { ...values, id: prev.length + 1 },
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

    return (
        <>
            <Box m="20px" sx={style}>
                <Header
                    title="Add a Member"
                    subtitle="Add a Member to Tali3's Database"
                />
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                >
                    {({
                        values,
                        errors,
                        touched,
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
                                    label="Email"
                                    onChange={handleChange}
                                    value={values.patron_email}
                                    name="patron_email"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="First Name"
                                    onChange={handleChange}
                                    value={values.first_name}
                                    name="first_name"
                                    sx={{ gridColumn: "span 4" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Last Name"
                                    onChange={handleChange}
                                    value={values.last_name}
                                    name="last_name"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <InputLabel id="demo-simple-select-label">
                                    University
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.university_id}
                                    name="university_id"
                                    onChange={handleChange}
                                    //renderValue={(value) => value}
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    {universities.map((e) => {
                                        return (
                                            <MenuItem
                                                value={e.university_id}
                                                name="v"
                                            >
                                                {e.name}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                                <InputLabel id="demo-simple-select-label">
                                    Type
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedValue}
                                    onChange={handleChangeSelect}
                                >
                                    <MenuItem value="student">Student</MenuItem>
                                    <MenuItem value="teacher">Teacher</MenuItem>
                                    <MenuItem value="others">Others</MenuItem>
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
                                    Add Member
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
    patron_email: "",
    first_name: "",
    last_name: "",
    type: "",
    university_id: "",
};

export default AddMember;
