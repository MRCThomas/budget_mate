import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import React from "react";
import Sidebar from "./Sidebar/Sidebar.jsx";

export default function Template() {
    return (
        <>
            <div className="container-fluid p-0 m-0">
                <div className="row g-0">
                    {/* Sidebar */}
                    <Sidebar/>
                    {/* Contenu Principal */}
                    <div className="col">
                        <div className="p-4">
                            <Header/>
                            <Outlet/>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
