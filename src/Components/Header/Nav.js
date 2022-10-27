import React, {useState} from 'react'

function Nav() {
    const [ display, setDisplay ] = useState('none')
    function toggleMenu(){
        if(display === 'none'){
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }
    return (
        <nav>
            <button className="mr-6" onClick={toggleMenu}>
                <div className="space-y-2">
                    <span className="block w-8 h-0.5 bg-white"></span>
                    <span className="block w-8 h-0.5 bg-white"></span>
                    <span className="block w-5 h-0.5 bg-white"></span>
                </div>
            </button>
            <ul className="absolute top-12.5 right-4 h-auto bg-orange-500 rounded-bl-md rounded-br-md z-10 " style={{display:display}}>
                <li><a href="/" className="block font-medium text-white py-2 px-3 hover:text-slate-600">Home</a></li>
                <li><a href="/" className="block font-medium text-white py-2 px-3 hover:text-slate-600">About</a></li>
                <li><a href="/" className="block font-medium text-white py-2 px-3 hover:text-slate-600">FAQ</a></li>
            </ul>
        </nav>
    )
}

export default Nav