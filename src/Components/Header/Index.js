import { logDOM } from "@testing-library/react"
import React from "react"
import Nav from "./Nav"

function Header(){

    return(

        <header className="flex justify-between w-100 p-3 bg-orange-500 mb-5">
            <a href="/" className="text-2xl font-medium text-white">Hackernews</a>
            <Nav />
        </header>
 
    )
}

export default Header