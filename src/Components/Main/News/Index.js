import React from "react";
import Artikel from "./Artikel";


export default function News ({news}){
   
 const newsArtikel = news.map((artikel)=>{
    console.log(news)
    return  <Artikel key={artikel.id} title={artikel.title} author={artikel.author} url={artikel.url}
    points={artikel.points} num_comments={artikel.num_comments} />
 })
       

    return(
        <>
      {newsArtikel}
        </>
    )
} 