import React, { useContext } from "react";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import Header from "./Header";
import { Formik } from "formik";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { VendorContext } from "../contexts/AddingContext";

export const AddVendor = ({ style }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const { handleCloseVendorAdd, handleOpenBookAdd, setPopUpVendors } =
        useContext(VendorContext);

    const handleFormSubmit = (values) => {
        axiosClient
            .post("/vendors", values)
            .then((respose) => {
                values = { ...values, id: respose.data.vendor_id };
                console.log(values);
                setPopUpVendors((previousVendors) => [
                    ...previousVendors,
                    values,
                ]);
                handleCloseVendorAdd();
                handleOpenBookAdd();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <Box m="20px" sx={style}>
                <Header
                    title="Add a Vendor"
                    subtitle="Add a vendor to Tali3's Database"
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
                                    label="Vendor Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.vendor_name}
                                    name="vendor_name"
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
                                    Add Vendor
                                </Button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box>
        </>
    );
};

let initialValues = {
    vendor_name: "",
};
