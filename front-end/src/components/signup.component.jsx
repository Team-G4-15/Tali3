import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Checkbox,
    Box,
    Button,
    FormControlLabel,
    TextField,
    FormGroup,
} from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { useUserContext } from "../contexts/UserContextProvider";
const SignUp = () => {
    let [error, setError] = useState(null);
    let { setUser, setToken } = useUserContext();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values) => {
        console.log(values);
        axiosClient
            .post("/AddAdmin", values)
            .then((res) => {
                console.log(res);
                setUser(res.data.user);
                setToken(res.data.token);
                navigate("/dashboard");
            })
            .catch((err) => {
                if (!err.response) {
                    return setError(err.message);
                }

                let data = err.response.data;
                if (!data.message) {
                    setError(data);
                } else {
                    const first_sentence = data.message.indexOf(".");
                    setError(data["message"].substring(0, first_sentence));
                }
            });
    };
    return (
        <div>
            <Header title="Sign Up" subtitle="Create Tali3 account" />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
                {({
                    values,

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

                            <FormGroup>
                                <FormControlLabel
                                    sx={{
                                        color: "#0A2A5C",
                                    }}
                                    control={<Checkbox />}
                                    label="Remember Me"
                                />
                            </FormGroup>
                            <Button type="submit" color="secondary" variant="contained">
                                Sign Up
                            </Button>

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
        </div>
    );
};

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
};

export default SignUp;
