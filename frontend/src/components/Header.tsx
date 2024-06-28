import React from 'react'
import { AppBar, Toolbar } from '@mui/material';
import Logo from "./shared/Logo";
import { useAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';

export const Header = () => {
    const auth = useAuth();
    return <AppBar sx={{
        bgcolor: "transparent",
        position: "static",
        boxShadow: "none"
    }}
    >
        <Toolbar sx={{ display: "flex" }}>
            <Logo />
            <div>
                {auth?.isLoggedIn ? (
                    <>
                        <NavigationLink to="/chat" bg="#00fffc" text="Create New Chat" textColor="black" />
                        <NavigationLink to="/logout" bg="#51538f" text="Logout" textColor="white" onClick={auth?.logout} />
                    </>
                ) : (
                    <></>
                )}
            </div>
        </Toolbar>
    </AppBar>;
};

export default Header;
