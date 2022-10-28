import React from "react";
import FooterList from "./FooterList";


export default function Footer(){
    return(
        <footer className="w-full bg-orange-400 flex text-white justify-center p-2.5">
            <div className="w-4/5 block">
                <div className="uppercase text-l flex text-white font-bold m-2.5 justify-center">
                <a href="#">Kontakt</a>
                </div>
                <FooterList/>
                <div id="copyright" className="flex text-white text-sm mt-2.5 mb-2.5 justify-center">
                    <p>&copy; HackerNews 2022</p>
                </div>
            </div>
        </footer>
    )
}