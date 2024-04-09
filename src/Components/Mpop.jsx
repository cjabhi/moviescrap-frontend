import React, { useEffect, useState } from 'react';
import Video from '../Components/Video.jsx';
const Mpop = () => {

const [data , setData] = useState([]);

const  getdata=async()=> {
      const response = await fetch('https://moviescrap-1.onrender.com/mpop');
    
      const result = await response.json();
      // console.log(result);
        setData(result);
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

export default Mpop;