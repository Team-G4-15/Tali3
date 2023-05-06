import React, { useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { useUserContext } from "../contexts/UserContextProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { CheckBox } from "@mui/icons-material";



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
    <Box>
      <Header title="Sign In" subtitle="Login to Tali3" />
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
                placeholder="example@eg.com"
                label="Email Adress"
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

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              </div>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Remember Me" />
              </FormGroup>
              <Button type="submit" color="secondary" variant="contained">
                Log in
              </Button>
            </Box>

          </form>
        )}
      </Formik>
    </Box>
  );
};

const initialValues = {
  email: "",
  password: "",
};

export default Login;
