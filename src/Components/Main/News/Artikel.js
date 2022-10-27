import React, { useState } from "react";


export default function Artikel({title,author,url,points,num_comments,time,objectID}){
    console.log(objectID)
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



    const timeLink= <a href={link} target="_blank">{Difference_In_Days_String }</a>
    const commentLink = <a href={link} target="_blank">{commentsString}</a>
    const userlink= <a href={linkU} target="_blank">{author}</a>
    const hideLink = <a href={linkHide} target="_blank" className=" line-through ">| hide |</a>
    const upvoteLink =<a href={linkUp} target="_blank">△  </a>
   
    const subtitle1 =`${points} points by` 
    



    
    return(
      
        <div className=" bg-lightOrange flex justify-between my-8 box-border   p-4 border-4 border-lightPurple rounded-xl">
            
            <div  className=" " >
            <h3 className="text-white" >{upvoteLink}{title}</h3>
            <p className="text-darkPurple">{subtitle1} {userlink} {timeLink} {hideLink} {commentLink} </p>
            </div>
            <a href={url} target="_blank" className="text-white"><button className="bg-lightPurple hover:bg-darkPurple text-white font-bold py-2 px-4 rounded">Continue</button></a>
           
        </div>
    )
}