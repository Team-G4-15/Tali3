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
import { AddingContext } from "../contexts/AddingContext";
import { Add } from "@mui/icons-material";

const AddResearchPaper = ({ style }) => {
    //response not working/compatible.
    const [locationState, setLocationState] = useState("");
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate();
    const [error, setErrors] = useState(null);
    const {
        setErrorOpen,
        setSuccessOpen,
        handleClose,
        setProcessing,
        setFilteredRows,
        setInitialRows,
        feilds,
        publisher,
        languages,
        locations,
        handleOpenAuthorAdd,
    } = useContext(AddingContext);

    const handleFormSubmit = (values) => {
        setProcessing(true);

        handleClose();

        axiosClient
            .post("/researchpapers/add", values)
            .then((respose) => {
                values = {
                    ...values,
                    id: respose.data.paper_id,
                    availability: "Available",
                    location: locationState,
                }
                setProcessing(false);
                setSuccessOpen(true);
                setFilteredRows((prev) => [...prev, values]);
                setInitialRows((prev) => [...prev, values]);
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
                <Header
                    title="Add a Research Paper"
                    subtitle="Add a Research Paper to Tali3's Database"
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
                                    //onBlur={handleBlur}
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
                                    //onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.keywords}
                                    name="keywords"
                                    sx={{ gridColumn: "span 4" }}
                                />



                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Research paper description"
                                    //onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.description}
                                    name="description"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="DOI"
                                    //onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.doi}
                                    name="doi"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Quantity"
                                    //onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.quantity}
                                    name="quantity"
                                    sx={{ gridColumn: "span 4" }}
                                />


                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="date"
                                    //onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.publish_date}
                                    name="publish_date"
                                    sx={{ gridColumn: "span 4" }}
                                />

                                <InputLabel id="demo-simple-select-label">
                                    Author
                                </InputLabel>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    sx={{ gridColumn: "span 4" }}
                                >
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={values.publisher_id}
                                        name="publisher_id"
                                        onChange={handleChange}
                                        //renderValue={(value) => value}
                                        fullWidth
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
                                    <Button
                                        startIcon={<Add />}
                                        color="secondary"
                                        variant="contained"
                                        sx={{ marginLeft: "5px" }}
                                        onClick={() => {
                                            handleClose();
                                            handleOpenAuthorAdd();
                                        }}
                                    >
                                        Author
                                    </Button>
                                </Box>

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

                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    sx={{ gridColumn: "span 2" }}
                                >
                                    <Box
                                    // fullWidth
                                    >
                                        <InputLabel>
                                            Aisle (Character)
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={values.location_id}
                                            name="location_id"
                                            onChange={handleChange}
                                            sx={{ gridColumn: "span 4", mr: 2 }}
                                        >
                                            {locations.map((e) => {
                                                return (
                                                    <MenuItem
                                                        value={e.location_id}
                                                        name="v"
                                                    >
                                                        {e.aisle}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </Box>

                                    <Box fullWidth>
                                        <InputLabel>Shelf Number</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            label=""
                                            id="demo-simple-select"
                                            value={values.location_id}
                                            name="location_id"
                                            onChange={handleChange}
                                            sx={{ gridColumn: "span 4" }}
                                            fullWidth
                                        >
                                            {locations.map((e) => {
                                                return (
                                                    <MenuItem
                                                        value={e.location_id}
                                                        name="v"
                                                    >
                                                        {e.shelf}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </Box>
                                </Box>
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
                                    Add Research Paper
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
    doi: "",
    quantity: "",
    publisher_id: "",
    field_name: "",
    language_code: "",
    publish_date: "",
};

export default AddResearchPaper;
