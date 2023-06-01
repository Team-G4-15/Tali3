import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/Header";
import { useState } from "react";
import { useUserContext } from "../contexts/UserContextProvider";
import { axiosClient } from "../utilities/axiosClient";

const AccountOV = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { user } = useUserContext();
  const [editing, setEditing] = useState(false);
  const [fullName, setFullName] = useState(user.full_name);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    setFullName(e.target.value);
  };

  const handleSave = () => {
    // Prepare the updated user data
    const updatedUser = {
      email: user.email,
      full_name: fullName,
    };

    // Make an API call to update the user's full name
    axiosClient
      .post("/Admin/EditName", updatedUser) // Replace "/api/users/update" with the actual endpoint for updating user data
      .then((response) => {
        // Handle the response and any further actions

        console.log("Full name updated successfully");
        setEditing(false);
      })
      .catch((error) => {
        // Handle errors and display error messages
        console.error("Error updating full name:", error);
      });
  };

  return (
    <Box>
      <Box sx={{ m: "20px" }}>
        <Header
          title="Account Settings"
          subtitle="Change Your Tali3's Account Setting"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h2"
          color="#0000000"
          fontWeight="bold"
          sx={{ m: "10px 0 0 0" }}
        >
          {editing ? (
            <input
              type="text"
              value={fullName}
              onChange={handleChange}
              style={{
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "inherit",
                border: "none",
                outline: "none",
                backgroundColor: "transparent",
              }}
            />
          ) : (
            fullName
          )}
        </Typography>
        <Typography
          variant="h6"
          color={colors.textSecondary}
          fontWeight="bold"
          sx={{ m: "10px 0 0 0" }}
        >
          {user.email}
        </Typography>
        <Box>
          {editing ? (
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button variant="contained" onClick={handleEdit}>
              Edit
            </Button>
          )}
          <Button variant="contained" sx={{ ml: 2 }}>
            Change Password
          </Button>
          <Button variant="contained" sx={{ ml: 2 }}>
            Change Profile Picture
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountOV;
