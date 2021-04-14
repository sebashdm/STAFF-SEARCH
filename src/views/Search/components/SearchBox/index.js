import { useState } from "react";
import "./style.css";

export default function SearchBox(){
    const [searchText, setSearchText] = useState("")
   
    return(
           <div className="search-box">
              Staff search
              <label>
                  <input value={searchText} onChange={({ target: { value }}) => setSearchText(value)} />
              </label>
              <button>Search</button>
         </div>

    );
}