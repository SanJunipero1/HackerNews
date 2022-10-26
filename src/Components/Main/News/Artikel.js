import React from "react";

export default function Artikel({title,author,url,points,num_comments}){
    
   
    const subtitle =`${points} points by ${author} "Zeit Placeholder"  ${num_comments} comments`


    
    return(
        <div className="display: flex justify-between my-8 box-border h-50 w-50 p-4 border-4">
            <div  className="" >
            <h3 className="text-white" >{title}</h3>
            <p className="text-orange-200">{subtitle}</p>
            </div>
            <a href={url} target="_blank" className="text-white"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Continue</button></a>
            
        </div>
    )
}