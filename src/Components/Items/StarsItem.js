import React, { Fragment, useContext } from 'react'
import { MainContext } from '../Main/Main'


import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


const StarsItem = ({ star }) => {
  const { styles, setStyles, setActive } = useContext(MainContext)


  const handleStar = (star) => {
    if (!styles.includes(star)) {
      setStyles([...styles, star])
      setActive(true)
    } else {
      setStyles(styles.filter((s) => s != star))
      setActive(false)
    }
  }

  const renderStars = (id) => {
    switch(id) {
      case 5:
        return (
          <Fragment>
            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
          </Fragment>
        )
      case 4:
        return (
          <Fragment>
            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
          </Fragment>
        )
      case 3:
        return (
          <Fragment>
            <AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar />
          </Fragment>
        )
      case 2:
        return (
          <Fragment>
            <AiFillStar /><AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
          </Fragment>
        )
      default:
        return (
          <Fragment>
            <AiFillStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar /><AiOutlineStar />
          </Fragment>
        )
    }
  }

  return (
    <li
      className={styles.includes(star.id) ? "filter-box__item active" : "filter-box__item" }
      onClick={() => handleStar(star.label)}
    >
      {renderStars(star.id)}
    </li>
  );
}

export default StarsItem;
