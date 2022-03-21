import React, { useState } from "react";
import "./Components/SearchBar.css";

function Recherche({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.ScoreGlobalRegion}>
                <p>{value.Libcom} </p>
              </a>
            );
          })}
        </div>
      )}

        {/*
           <div className="posts">
          { Data.map(posts => {
            return (
              <div className="cards">
              <p>Departement: { posts.Libdep } </p>
              <p>Region: { posts.Libreg } </p>
              <p>Score Region: { posts.ScoreGlobalRegion } </p>
              </div>
            )
          })
          }
        </div>
        */}
    </div>
    
  );
}

export default Recherche;