import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/SdCardAlert";
import PointOfSaleIcon from "@mui/icons-material/CreditScore";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/PeopleOutline";
import Header from "../components/Header";
import LineChart from "../components/LineChart";
import StatBox from "../components/StatBox";
import { useEffect, useState } from "react";
import { useUserContext } from "../contexts/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../utilities/axiosClient";

const AccountOV = () => {
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
                <img
                    alt="profile-user"
                    width="200px"
                    height="200px"
                    src={`../../assets/user.jpg`}
                    style={{
                        cursor: "pointer",
                        borderRadius: "50%",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                        zIndex: 1,
                    }}
                >
                    {/* Place your watermark content and icon here */}
                    <span
                        style={{
                            color: "rgba(0, 0, 0, 0.5)",
                            fontSize: "18px",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                        }}
                    >
                        Watermark
                    </span>
                    {/* Include your icon here */}
                </div>
                <Typography
                    variant="h2"
                    color="#0000000"
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                >
                    Name
                </Typography>
            </Box>
        </Box>
    );
};

export default AccountOV;
