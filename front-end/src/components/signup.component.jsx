import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { useUserContext } from "../contexts/UserContextProvider";

const SignUp = () => {
    let { setUser, setToken } = useUserContext();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values) => {
        console.log(values);
        axiosClient
            .post("/AddAdmin", values)
            .then((res) => {
                setUser(res.data.user);
                setToken(res.data.token);
            })
            .catch((err) => {
                console.log(err)
            });
    };
    return (
        <Box m="20px">
            <Header title="Sign Up" subtitle="Create Tali3 account" />
            {error && <p>{error}</p>}
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
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
                                        : "span 4",
                                },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={
                                    !!touched.firstName && !!errors.firstName
                                }
                                helperText={
                                    touched.firstName && errors.firstName
                                }
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="password"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                sx={{ gridColumn: "span 4" }}
                            />

                            <TextField
                                fullWidth
                                variant="filled"
                                type="password"
                                label="Confirm Password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password_confirmation}
                                name="password_confirmation"
                                sx={{ gridColumn: "span 4" }}
                            />

                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    name="Remember Me"
                                    id="customCheck1"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="customCheck1"
                                >
                                    Remember Me
                                </label>
                            </div>

                            <Box display="flex" justifyContent="end" mt="20px">
                                <Button
                                    type="submit"
                                    color="secondary"
                                    variant="contained"
                                >
                                    Sign Up
                                </Button>
                            </Box>

                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                mt="20px"
                            >
                                <a href={"/login"} mr="2px">
                                    Already Have an Account?
                                </a>
                            </Box>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
});
const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
};

export default SignUp;
