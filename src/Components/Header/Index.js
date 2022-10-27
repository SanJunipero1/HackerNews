import React from "react"
import Nav from "./Nav"
function Header(){

    return(

        <header className="flex justify-between w-100 p-3 bg-orange-500 mb-5">
            <a href="/" className="text-2xl font-medium">Hacker News</a>
            <Nav />

        <header className="flex justify-between w-100 p-3 bg-orange-400 text-white">
            <a href="navbar-brand font-bold">Logo</a>
            <nav>
                <ul className="flex">
                    <li><a href="/" className="font-medium p-3">Link</a></li>
                    <li><a href="/" className="font-medium p-3">Link</a></li>
                    <li><a href="/" className="font-medium p-3">Link</a></li>
                    <li><a href="/" className="font-medium p-3">Link</a></li>
                    <li><a href="/" className="font-medium p-3">Link</a></li>
                    <li><a href="/" className="font-medium p-3">Link</a></li>
                </ul>
            </nav>

        </header>
    )
}
export default Header