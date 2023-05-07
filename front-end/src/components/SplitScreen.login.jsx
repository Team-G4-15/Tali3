import React from "react";
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
                    width: "100%",
                    background: 'linear-gradient(to right, #0A2A5C 50%, #F6F6E9 50%)',
                }}
            >

                <div
                    style={{
                        margin: "20px",


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
