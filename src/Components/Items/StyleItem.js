import React, { useContext } from 'react'
import { MainContext } from '../Main/Main'


const StyleItem = ({ style }) => {
  const { styles, setStyles, active, setActive } = useContext(MainContext)


  const handleStyle = (style) => {
    if (!styles.includes(style)) {
      setStyles([...styles, style])
      setActive(true)
    } else {
      setStyles(styles.filter((s) => s != style))
      setActive(false)
    }
  }

  return (
    <li 
      className="filter-box__item"
      onClick={() => handleStyle(style.label)}
    >
      {style.label}
    </li>
  )
}

export default StyleItem