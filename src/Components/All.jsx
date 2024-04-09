import React, { useEffect, useState } from 'react';
import Video from '../Components/Video.jsx';
import { useParams } from 'react-router-dom';

const All = (Props) => {
  const [data, setData] = useState([]);
  const n = useParams().id;

  const getData = async () => {
    setData([]);
    const response = await fetch(`http://localhost:9000/search/${n}`);
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, [n]);

  if (data.length === 0) {
    return <div style={{ color: 'white' }}>Please wait...</div>;
  }

  // Check if data contains a single empty object
  if (data.length === 1 && Object.keys(data[0]).length === 0) {
    return <div style={{ color: 'white' }}>Sorry, no movie found for the given search value.</div>;
  }

  return (
    <>
      <div className='searchfor'>
        Following are the movies found for search <span className="search-term">{n}</span>
      </div>

      <div className="page">
        {data.map((el, i) => (
          <Video key={i} el={el} />
        ))}
      </div>
    </>
  );
};

export default All;
