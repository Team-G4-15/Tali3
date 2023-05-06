import React from "react";
import { Grid } from "@mui/material";
import Logo from "./Logo";
import { Box } from "@mui/material";
import SignUp from "./signup.component";
import LogoLoginSingup from "./Logo.Login.Signup";

const SplitScreenSignup = () => {
    return (
        <>


            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "100%",
                    background: 'linear-gradient(to right, #F6F6E9 50%, #0A2A5C 50%)',
                }}
            >

                <div
                    style={{
                        margin: "20px"
                    }}
                >

                    <SignUp />

                </div>
                <div
                    style={{
                        margin: "20px"
                    }}
                >

                    <LogoLoginSingup />

                </div>
            </div>

        </>
    );
};


export default SplitScreenSignup;
