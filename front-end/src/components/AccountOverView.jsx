import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/SdCardAlert";
import PointOfSaleIcon from "@mui/icons-material/CreditScore";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/PeopleOutline";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../utilities/axiosClient";

export const AccountOV = () => {
    return (
        <Box>
            <Header
                title="Account Settings"
                subtitle="Change Your Tali3's Account Settings"
            />
            <Box display="flex" justifyContent="center" alignItems="center">
                <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../assets/user.png`}
                    style={{
                        cursor: "pointer",
                        borderRadius: "50%",
                    }}
                />
            </Box>
        </Box>
    );
};
