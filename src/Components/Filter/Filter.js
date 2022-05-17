import React, { useState, useContext } from 'react'
import { MainContext } from '../Main/Main'

import './Filter.css'
import { BiSlider } from 'react-icons/bi'
import Tag from '../Tag/Tag'
import FilterBox from '../FilterBox/FilterBox'


const Filter = () => {
  const { styles, setStyles } = useContext(MainContext)

  const [filterBox, setFilterBox] = useState(false)

  const removeTag = (style) => {
    if (styles.includes(style)) {
      setStyles(styles.filter((s) => s != style))
    }
  }

  return (
    <div id="filter">
      <span className="filter__text">Filter by:</span>
      <BiSlider 
        className="filter__icon"
        onClick={() => setFilterBox((prev) => !prev)} 
      />
      {filterBox && <FilterBox />}
      <div className="filter__tags">
        {styles.length > 0 && styles.map(style => <Tag key={style.id} style={style} removeTag={removeTag} />)}
      </div>
      {styles.length > 0 && 
        <button 
          className="filter__btn"
          onClick={() => setStyles([])}
        >
          Clear all
        </button>
      }
    </div>
  )
}

export default Filter