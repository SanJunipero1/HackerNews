import React from "react";

export default function Pagination({totalPosts, postsPerPage,setCurrentPage}){
    
    let pages= []
    
    for(let i =1 ; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }

    
    return(
        <div>
        {
            pages.map((page,index) =>{
                return <button className="bg-lightOrange hover:bg-darkOrange text-white font-bold py-2 px-4 rounded-l m-1 m-l-10 justify-content-center " onClick={()=>setCurrentPage(page)} key={index}>{page}</button>
            })
        }
        </div>
    )
}