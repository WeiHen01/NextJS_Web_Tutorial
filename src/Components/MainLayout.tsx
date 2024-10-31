"use client"; //to mark it as a Client Component:
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
   
}
// variable for  the pages to  be imported
export default MainLayout;