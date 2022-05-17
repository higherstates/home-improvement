import React, { useState, useEffect, useRef, Fragment } from 'react'
import './Slider.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { SlideA, SlideB } from './SliderInner'
import { data } from '../../data.json'


const Slider = () => {
  const [dataI, setDataI] = useState(data)
  const [direction, setDirection] = useState()
  const [sliding, setSliding] = useState(0)

  const ref = useRef()

  const handleClick = (direction) => {
    if (direction === "left" && sliding != 0) {
      setDirection('left')
      setSliding(sliding - 50)
    } else if (direction === "right" && sliding != 250) {
      setDirection("right")
      setSliding(sliding + 50)
    } else {
      return
    }
  }

  useEffect(() => {
    if (direction == 'left') {
      ref.current.style.transform = 'translateX(-' + sliding + '%)';
    } else {
      ref.current.style.transform = 'translateX(-' + sliding + '%)';
    }
    console.log(sliding)
  }, [sliding])

  return (
    <div id="slider">
      <BsChevronLeft
        size={90}
        color="#7c7c7c"
        onClick={() => handleClick("left")}
      />
      <div className="slider__container">
        <div className="test" ref={ref}>
            <SlideA data={data.slice(0, 3)} />
            <SlideB data={data.slice(3, 6)}/>
            <SlideA data={data.slice(6, 9)} />
            <SlideB data={data.slice(9, 12)}/>
            <SlideA data={data.slice(12, 15)} />
            <SlideB data={data.slice(15, 18)}/>
            <SlideA data={data.slice(18, 21)} />
        </div>
      </div>
      <BsChevronRight
        size={90}
        color="#7c7c7c"
        onClick={() => handleClick("right")}
      />
    </div>
  )
}

export default Slider