import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderDivider,
    CHeaderNav,
    CHeaderToggler,
    CNavLink,
    CNavItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilMenu, cilAccountLogout } from "@coreui/icons";

import { AppHeaderDropdown } from "./header/index";
import { logo } from "../assets/brand/logo";
import { axiosClient } from "../utilities/axiosClient";
import { useUserContext } from "../contexts/UserContextProvider";

const AppHeader = () => {
    const dispatch = useDispatch();
    const sidebarShow = useSelector((state) => state.sidebarShow);
    const {setUser, setToken} = useUserContext();
    let logOut = (e) => {
        e.preventDefault();
        axiosClient
            .post("/logout")
            .then((res) => {
                setUser({});
                setToken(null);
            })
            .catch((err) => console.log(err.response));
    };

    return (
        <CHeader position="sticky" className="mb-4">
            <CContainer fluid>
                <CHeaderToggler
                    className="ps-1"
                    onClick={() =>
                        dispatch({ type: "set", sidebarShow: !sidebarShow })
                    }
                >
                    <CIcon icon={cilMenu} size="lg" />
                </CHeaderToggler>
                <CHeaderBrand className="mx-auto d-md-none" to="/">
                    <CIcon icon={logo} height={48} alt="Logo" />
                </CHeaderBrand>
                <CHeaderNav className="d-none d-md-flex me-auto">
                    <CNavItem>
                        <CNavLink to="/dashboard" component={NavLink}>
                            Dashboard
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Users</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Settings</CNavLink>
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav>
                    <CNavItem>
                        <button href="#" onClick={logOut}>
                            <CIcon icon={cilAccountLogout} size="lg" />
                        </button>
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav className="ms-3">
                    <AppHeaderDropdown />
                </CHeaderNav>
            </CContainer>
            <CHeaderDivider />
            <CContainer fluid></CContainer>
        </CHeader>
    );
};

export default AppHeader;
