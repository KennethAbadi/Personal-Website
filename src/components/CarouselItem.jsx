import React from 'react'

export const CarouselItem = ({ item,width }) => {
  return (
    <div className='carousel-item' style={{width : width}}>
        <div></div>
        
        <a href={item.link} target="_blank"><img className="carousel-img" src={item.icon}/></a>
        
        <div className='carousel-item-text'><p><a href={item.link} target="_blank">{item.title}</a></p><br></br>{item.description}</div>
    </div>
  )
}
