import React from "react";
import { Grid } from "@mui/material";
import Logo from "./Logo";
import { Box } from "@mui/material";
import Login from "./login.component";
import LogoLoginSingup from "./Logo.Login.Signup";

const SplitScreenLogin = () => {
    return (
        <>


            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "100%"
                }}
            >

                <div
                    style={{
                        margin: "20px"
                    }}
                >

                    <LogoLoginSingup />

                </div>
                <div
                    style={{
                        margin: "20px"
                    }}
                >

                    <Login />

                </div>
            </div>

        </>
    );
};


export default SplitScreenLogin;
