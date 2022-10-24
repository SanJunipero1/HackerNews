import React from "react"

function Header(){

    return(
        <header className="flex justify-between w-100 p-3 bg-sky-500 text-white">
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