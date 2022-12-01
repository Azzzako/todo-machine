import React from "react";
import './TodoSearch.css'


export function TodoSearch({searchWord, setSearchWord}) {

    

    const onSearchValue = (event) => {
        setSearchWord(event.target.value)
        console.log(event.target.value);
    }
    

    return(
        
        <div className="container-search">
        
        <input placeholder="Search Task" 
        className="TodoSearch"
        onChange={onSearchValue}
        value={searchWord}
        />
        

        </div>
        

    )
}
