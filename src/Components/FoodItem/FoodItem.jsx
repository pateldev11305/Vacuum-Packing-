import React from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
const FoodItem = ({id,name,description,image}) => {
  return (
    <div className='food-item' >
       <div className="food-item-img-container">
        < img className='food-item-image' src={image} alt=""/>
       </div>
      <div className="food-item-info">
        <div className="div food-item-name-rating">
            <p> {name}</p>
            
        </div>
        <p className="food-item-description">{description}</p>
        
      </div>
    </div>
  )
}

export default FoodItem
