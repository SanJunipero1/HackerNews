import React, {useState} from 'react';

export default function Search({ setSearchValue }) {

    const [searchTerm, setSearchTerm] = useState("")

    function handleChange(event){
       setSearchTerm(event.target.value)

    }

    function runSearch(){
        setSearchValue(searchTerm)

    }

    return (
        <div className="  w-96 m-auto my-20" >
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div className="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
            <input onChange={handleChange} type="text" name="search" 
            className="block p-4 pl-10 w-full text-sm text-lightBlack bg-gray-50 rounded-lg border border-lightOrange  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-lightBlack dark:text-lightBlack   "
            placeholder="Search stories by title, url or author" />
            <button onClick={runSearch} className="text-white absolute right-2.5 bottom-2.5 bg-lightOrange hover:bg-darkOrange focus:ring-4 focus:outline-none focus:ring-lightOrange font-medium rounded-lg text-sm px-4 py-2 dark:bg-lightOrange dark:hover:bg-darkOrange dark:focus:ring-darkOrange">Search</button>
        </div>
        </div>
    )
}