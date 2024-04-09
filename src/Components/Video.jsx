import React from 'react'
import './Video.css'

const Video = (Props) => {
  return (
    <div className="vcontainer">
        <a href={Props.el.link} target='_blank' rel="noreferrer" >
            <img src={Props.el.img} alt="image" />
            <p>{Props.el.title}</p>
        </a>
    </div>
  )
}

export default Video