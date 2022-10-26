import React, { useEffect, useState } from "react";
import News from "./News/Index"
import LoadinigInfo from "./Assests/LoadingInfo";
import Search from "./News/Search";


export default function DataFetch(){
    // const url = "https://jsonplaceholder.typicode.com/users"
   // const url = "http://hn.algolia.com/api/v1/search?query=react"
   
    

    
    const[news,setNews]=useState([])
    const[isLoading,setIsLoading]=useState(false)
    const [searchValue, setSearchValue] = useState("react")
    
    function getData(){
       
        fetch(`http://hn.algolia.com/api/v1/search?query=${searchValue}`) 
        .then(response=>response.json()) 
        .then(data => setNews(data.hits)) 
   
        
       
    
    }
    console.log(news)
  
    useEffect(()=>{
        getData()
    },[searchValue])
   
    
    if(isLoading){
        return(
          <LoadinigInfo title={"Artikel"} />  
        )
    }
    
    return(
        <div>
        <Search setSearchValue={setSearchValue}/>
        <News news={news}/>
        </div>
       
    )
}