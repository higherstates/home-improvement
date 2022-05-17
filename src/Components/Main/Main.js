import React, { useState, createContext } from 'react'
import './Main.css'
import Filter from '../Filter/Filter'
import Slider from '../Slider/Slider'

export const MainContext = createContext()

export const Main = () => {
  const [styles, setStyles] = useState([])
  const [active, setActive] = useState(false)


  return (
    <div id="main">
      <MainContext.Provider value={{ styles, setStyles, active, setActive }}>
        <Filter />
        <Slider />
      </MainContext.Provider>
    </div>
  )
}
