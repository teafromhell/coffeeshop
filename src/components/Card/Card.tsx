import React from 'react'
import './Card.scss'

import {ICoffee} from '../../data/coffee'

const Card = ({image, price, description, name}:ICoffee):JSX.Element => {
  return (
    <div className='card'>
        <div className='card__left'> <img src={image} alt="img" /></div>
        <div className='card__right'>
            <h3>{price}</h3>
            <h2> {name}</h2>
            <p>{description}</p>
            <form action="">
                <button>Buy Now</button>
                <p>Detail</p>
            </form>
        </div>
    </div>
  )
}

export default Card