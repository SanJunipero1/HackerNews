import React, { useState } from "react";


export default function Artikel({title,author,url,points,num_comments,time,objectID}){
    
    const actualTime = new Date()
    const oldTime= new Date (time)

  
    const link = `https://news.ycombinator.com/item?id=${objectID}`
    const linkU = `https://news.ycombinator.com/user?id=${author}`
    const linkHide = `https://news.ycombinator.com/hide?id=${objectID}&goto=news`
    const linkUp =`https://news.ycombinator.com/vote?id=${objectID}&how=up&goto=news`
  
    let differenceTime =   actualTime.getTime() - oldTime.getTime()
    
    let Difference_In_Seconds = Math.floor(differenceTime / 1000)

    let Difference_In_Minutes = Math.floor(differenceTime / (1000*60))
    
    let Difference_In_Hours = Math.floor(differenceTime / (36e5))
    
    let Difference_In_Days = Math.floor(differenceTime / (1000 * 3600 * 24))
    let Difference_In_Days_String = `${Difference_In_Days} Days ago`
  
 


    
    if(Difference_In_Seconds < 60){
        Difference_In_Days_String = `${Difference_In_Seconds} Seconds ago`
    
    }else if(Difference_In_Minutes < 60){
        Difference_In_Days_String = `${Difference_In_Minutes} Minutes ago`
    
    }else if(Difference_In_Hours < 24){
        Difference_In_Days_String = `${Difference_In_Hours} Hours ago`
    

    }else if(Difference_In_Days > 365){
        Difference_In_Days = Math.floor(Difference_In_Days /365)
        Difference_In_Days_String = `${Difference_In_Days} Years ago`
    }


    const commentsString=`${num_comments} comments`



    const timeLink= <a href={link} target="_blank" className=" hover:underline hover:text-darkgrey">{Difference_In_Days_String }</a>

    const commentLink = <a href={link} target="_blank " className=" hover:underline hover:text-darkgrey">{commentsString}</a>

    const userlink = <a href={linkU} target="_blank" className=" hover:underline hover:text-darkgrey">{author}</a>
    const hideLink = <a href={linkHide} target="_blank" className=" hover:underline hover:text-darkgrey">| hide |</a>
    const upvoteLink =<a href={linkUp} target="_blank" className=" hover:text-lightOrange hover:underline">△  </a>
   
    const subtitle1 =`${points} points by` 
    



    
    return(
      
        <div className=" bg-white flex justify-between my-8 box-border   p-4 border-b-2 border-grey  ">
            
            <div  className=" " >
            <h3 className="text-black text-xl " >{upvoteLink}{title}</h3>
            <p className="text-grey ">{subtitle1} {userlink} {timeLink} {hideLink} {commentLink} </p>
            </div>
            <a href={url} target="_blank" className="text-white"><button className="bg-lightOrange hover:bg-darkOrange text-white font-bold py-2 px-4 rounded">Continue</button></a>
           
        </div>
    )
}