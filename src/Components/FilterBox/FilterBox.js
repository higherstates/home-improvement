import React from 'react'
import { MainContext } from '../Main/Main'
import './FilterBox.css'
import { designStyle, qualityStandard } from '../../data.json'
import StyleItem from '../Items/StyleItem'
import StarsItem from '../Items/StarsItem'


const FilterBox = () => {
  return (
    <div className="filter-box">
      <div className="filter-box__left">
          <div className="filter-box__title">Style</div>
          <ul>
            {designStyle.map((style) => (
              <StyleItem key={style.id} style={style} />
            ))}
          </ul>
      </div>
      <div className="filter-box__right">
        <div className="filter-box__title">Quality</div>
        <ul>
          {qualityStandard.map((star) => (
            <StarsItem key={star.id} star={star} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilterBox