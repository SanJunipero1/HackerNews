import React, { useEffect, useState } from "react";
import News from "./News/Index"
import LoadinigInfo from "./Assests/LoadingInfo";
import Search from "./News/Search";
import CircularProgress from '@mui/material/CircularProgress'


export default function DataFetch(){
   
   const[loadingArticle,setLoadingArticle]=useState(false)
    

    
    const[news,setNews]=useState([])
    const [searchValue, setSearchValue] = useState("react")
    
    function getData(){
        setLoadingArticle(true)
        setTimeout(()=>{
        
        fetch(`http://hn.algolia.com/api/v1/search?query=${searchValue}`) 
        .then(response=>response.json()) 
        .then(data => setNews(data.hits)) 
   
        setLoadingArticle(false)
       
    },5000)
    }
    console.log(news)
  
    useEffect(()=>{
        getData()
    },[searchValue])
   
    
    if(loadingArticle){
        return(
            <div className=" flex">
          <CircularProgress/>
          <h1 className=" text-white text-9xl" >Loading.....</h1>
          </div>
        )
    }
    
    return(
        <div>
        <Search setSearchValue={setSearchValue}/>
        <News news={news}/>
        </div>
       
    )
}