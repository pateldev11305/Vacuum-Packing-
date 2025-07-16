import React from 'react'
import './ExploreImages.css'
import { image_list } from '../../assets/assets';
const ExploreImages=({category,setCategory})=> {

  return (
    <div className='explore-image' id='explore-image'>
    <h1>Explore our services</h1>
    <p className='explore-image-text'>We vacuum pack your food with care—preserving the taste of home-cooked food in every bite.
    With vacuum sealing, your food may stay fresh and safe for up to 6 months without spoiling or decaying.</p>
    <div className='explore-image-list'>
      {image_list.map((item, index) => {
        return (
          <div onClick= {()=>setCategory(prev=>prev===item.image_name?"ALL":item.image_name)} key={index} className='explore-image-list-item'>
            <img className={category===item.image_name?"active":""}src={item.images_image} alt={item.image_name} />
            <p>{item.image_name}</p>
          </div>
        );
      })}
      </div>
      
    </div>
  )
}

export default ExploreImages;
