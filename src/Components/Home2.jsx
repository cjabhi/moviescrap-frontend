import React, { useEffect, useState } from 'react';
import Video from '../Components/Video.jsx';
const Home2 = () => {

const [data , setData] = useState([]);

const  getdata=async()=> {
      const response = await fetch('https://moviescrap-1.onrender.com/latest');
    
      const result = await response.json();
      // console.log(result);
        setData(result);
        console.log(data)
}

useEffect(()=>{

        getdata();
        console.log(data);
} , []  )


  return (
    
 <>
 <div className="page">
  {
    data.map((el , i)=>{
      return(<Video el = {el} />)
    })
  }

  </div>
     
 </>

  )
}

export default Home2