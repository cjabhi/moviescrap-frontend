import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Categories.css';

const Categories = (Props) => {
  const [searchValue, setSearchValue] = useState('');


  return (
    <div className={Props.c ? 'cgbox' : 'cgbox ngbox'}>
      <div className="search-container">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {/* Search button */}
        <Link to={`/search/${searchValue}`} className="search-button" onClick={(e)=>{
          setSearchValue("");
        }} >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Categories;
