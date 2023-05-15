import React, { useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
} from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { useUserContext } from "../contexts/UserContextProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { CenterFocusStrong, CheckBox } from "@mui/icons-material";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



const Login = () => {
    let { setUser, setToken } = useUserContext();
    let [error, setErrors] = useState(null); //
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate();
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
                if (!err.response) {
                    return  setErrors(err.message);
                 }

                let data = err.response.data;
                if (!data.message) {
                    setErrors(data);
                } else {
                    setErrors(data.message);
                }
            });
    };
    return (
        <Box>
            <Header title="Sign In" subtitle="Login to Tali3" />
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
                                        : "span 2",
                                },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                placeholder="example@eg.com"
                                label="Email Adress"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                sx={{
                                    gridColumn: "span 4",
                                    color: "#F6F6E9",
                                }}
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

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              </div>
              <FormGroup>
                <FormControlLabel sx={{
                  color: "#0A2A5C"
                }} control={<Checkbox />} label="Remember Me" />
              </FormGroup>
              <Button type="submit" color="secondary" variant="contained">
                Log in
              </Button>
            </Box>

          </form>
        )}
      </Formik>
      <Typography variant="body1" sx={
        {
          color: "#0A2A5C",
          textAlign: "center",
          marginTop: "20px"
        }
          
      }>
        Don't have an account?{' '}
        <Link href="/" underline="hover">
          Sign up
        </Link>
      </Typography>
    </Box>
  );
};

const initialValues = {
    email: "",
    password: "",
};

export default Login;

