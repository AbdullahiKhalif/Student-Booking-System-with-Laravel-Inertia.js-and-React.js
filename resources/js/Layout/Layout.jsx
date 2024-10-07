import { Link } from "@inertiajs/react";
import React from "react";

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <nav className="flex items-center justify-around p-4 shodow bg-white  border-b-2 border-gray-100rounded-sm m-2">
                    <div>
                    <Link href="/" className="flex justify-around space-x-1 items-center"><span className="h-10 w-10 flex items-center justify-center  bg-[#00835F]  text-white font-bold rounded-full text-3xl">K</span> <span className="font-bold text-2xl">HALIIFA</span></Link>
                    </div>
                    <ul className="space-x-3">
                        <Link href="/" className="font-semibold hover:font-bold hover:text-blue-500">Home</Link>
                        <Link href="/students/create" className="font-semibold hover:font-bold hover:text-blue-500">Create Students</Link>
                        <Link href="/" className="font-semibold hover:font-bold hover:text-blue-500">Users</Link>
                    </ul>

                    <div className="flex items-center space-x-2  bg-[#00835F]  p-3 rounded-md">
                        <Link href="/logout" className="text-sm font-bold text-white hover:text-gray-100">Logout</Link>
                    </div>
                </nav>
            </header>

            <main>{children}</main>
        </div>
    );
};

export default Layout;
