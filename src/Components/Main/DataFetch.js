import React, { useEffect, useState } from "react";
import News from "./News/Index"

import Search from "./News/Search";
import CircularProgress from '@mui/material/CircularProgress'
import Pagination from "../Pagination";


export default function DataFetch(){
   
   const[loadingArticle,setLoadingArticle]=useState(false)
   const [currentPage,setCurrentPage] =useState(1)
   const [postsPerPage,setPostsPerPage] = useState(6)
    


    const[news,setNews]=useState([])
    const [searchValue, setSearchValue] = useState("react")
    
    function getData(){
       
        
        
        
        
        setLoadingArticle(true)
        setTimeout(()=>{
        
        fetch(`http://hn.algolia.com/api/v1/search?query=${searchValue}`) 
        .then(response=>response.json()) 
        .then(data => setNews(data.hits)) 
    
   
        setLoadingArticle(false)
       console.log(news)
    },3000)
    }
    
  
    useEffect(()=>{
        getData()
    },[searchValue])
   
    const lastPostIndex= currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = news.slice(firstPostIndex,lastPostIndex)
    
    if(loadingArticle){
        return(
            <div className=" flex ">
          <CircularProgress size="4rem" style={{'color': '#EE5622'}}/>
          <h1 className=" m-auto text-white text-2xl" >Loading.....</h1>
          </div>
        )
    }
    
    return(
        <>
        <Search setSearchValue={setSearchValue}/>
        <div className="bg-white p-2 w-10/12 m-auto rounded-t-lg border border-lightOrange">
        <News news={currentPosts}/>
        <Pagination totalPosts={news.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
        </div>
        </>
    )
}