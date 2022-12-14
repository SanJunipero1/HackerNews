import React from "react";

export default function Pagination({totalPosts, postsPerPage,setCurrentPage}){
    
    let pages= []
    
    for(let i =1 ; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }

    
    return(
        <div className="flex justify-center">
        {
            pages.map((page,index) =>{
                return <button className="bg-lightOrange hover:bg-darkOrange text-white font-bold py-2 px-4 rounded m-1" onClick={()=>setCurrentPage(page)} key={index}>{page}</button>
            })
        }
        </div>
    )
}