import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import "./checkbox.css";
import { axiosClient } from "../utilities/axiosClient";
import { useUserContext } from "../contexts/UserContextProvider";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  let { setUser, setToken } = useUserContext();
  let [error, setErrors] = useState(null); //
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate=useNavigate();
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
    <Box m="20px">
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
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
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
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 4" }}
              />

              <div className="mb-3">
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
              </div>

              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Log in
                </Button>
              </Box>
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
