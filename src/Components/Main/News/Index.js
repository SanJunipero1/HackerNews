import React from "react";
import Artikel from "./Artikel";


export default function News ({news}){
   
 const newsArtikel = news.map((artikel)=>{
    
    return  <Artikel key={artikel.id} title={artikel.title} author={artikel.author} url={artikel.url}
    points={artikel.points} num_comments={artikel.num_comments} time={artikel.created_at} objectID={artikel.objectID}/>
 })
       

    return(
        <>
      {newsArtikel}
        </>
    )
} 