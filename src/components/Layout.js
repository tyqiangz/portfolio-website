import React from "react";
import Navbar from "./Navbar"
import "../styles/main.scss"

const Layout = ({ children }) => (
    <div>
        <div>
            <Navbar></Navbar>
            <main>{children}</main>
        </div>
    </div>
)

export default Layout