import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

export const SlideA = ({data}) => {

  return (
    <div className="slider__inner slide-a">
      {data.map((d, i) => (
        <div
          key={d._id} 
          className={i === 0 ? "img-container big" : "img-container small"}
        >
          <AiOutlineHeart size={20} />
          <img 
            src={d.imageKey} 
            alt={d._id} 
            />
      </div>
      ))}
    </div>
  )
}

export const SlideB = ({data}) => {
  return (
    <div className="slider__inner slide-b">
      {data.map((d, i) => (
        <div
          key={d._id} 
          className={i === 2 ? "img-container big" : "img-container small"}
        >
          <AiOutlineHeart size={20} />
          <img 
            src={d.imageKey} 
            alt={d._id} 
          />
        </div>
      ))}
    </div>
  )
}

// TODO: Think of a way to render the data so filter functionality can access the states