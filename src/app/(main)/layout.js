
// import "../../globals.css";
"use client";

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useEffect } from "react";

export default function MainLayout({ children }) {
    useEffect(() => {
        document.body.classList.add("main");
        return () => {
            document.body.classList.remove("main");
        };
    }, []);

    return (
        <div className="wrap">
            <Header />
            {children}
            <Footer />
        </div>
    )

}

