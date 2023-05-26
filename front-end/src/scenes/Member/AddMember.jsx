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
import Header from "../../components/Header";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const AddMember = ({ style }) => {
  const [locationState, setLocationState] = useState("");
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const handleFormSubmit = (values) => {
    console.log(values);
    // Add your desired logic here when the form is submitted
  };

  return (
    <>
      <Box m="20px" sx={style}>
        <Header title="Add a Member" subtitle="Add a Member to Tali3's Database" />
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
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
                    gridColumn: isNonMobile ? undefined : "span 2",
                  },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onChange={handleChange}
                  value={values.Email}
                  name="Email"
                  sx={{ gridColumn: "span 4" }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onChange={handleChange}
                  value={values.First_Name}
                  name="First_Name"
                  sx={{ gridColumn: "span 4" }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="University"
                  onChange={handleChange}
                  value={values.University ?? ""}
                  name="University"
                  sx={{ gridColumn: "span 4" }}
                />
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select>
                  <MenuItem value="student">Student</MenuItem>
                  <MenuItem value="teacher">Teacher</MenuItem>
                  <MenuItem value="others">Others</MenuItem>
                </Select>
              </Box>
              <Box display="flex" justifyContent="center" mt="20px">
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
  Email: "",
  First_Name: "",
  Last_Name: "",
  University: "",
};

export default AddMember;
