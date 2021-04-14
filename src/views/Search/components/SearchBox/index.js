import { useState } from "react";
import "./style.css";

export default function SearchBox(){
    const [searchText, setSearchText] = useState("")
   
    return(
           <div className="search-box">
              <h2 className="search-box-tittle">Staff search</h2>
              <div className="search-box-button">
                <label>
                    <input 
                        value={searchText} 
                        onChange={({ target: { value }}) => setSearchText(value)}
                        className="search-box-input"
                    />
                </label>
                <button>Search</button>
                <button>Close</button>
              </div>
              
         </div>

    );
}