import React, { useState } from 'react'
import { CarouselItem } from './CarouselItem';
import project1 from './images/Project1.png'
import project2 from './images/Project2.png'
import project3 from './images/Project3.png'

export const Carousel = () => {
  const [activeIndex,setActiveIndex] = useState(0);

  const items = [
    {
      title:"Data Analysis Project",
      description:"An Analysis on the correlations between variables from Medical Cost Personal Datasets from Kaggle using Python and tools such as Pandas, Seaborn, and Numpy to create visualizations of data . ",
      icon: project1,
      link: "https://github.com/ubco-W2022T2-data301/project-group-group08"
    },
    {
      title:"GMTK Game Jam 2023",
      description:"Participated in my first GMTK's 2023 Game Jam with Friends to create a Turn-based Roguelike Game within 48 Hours. Lead the team as the lead programmer to design and implementation of combat mechanics and menu UI ",
      icon: project2,
      link: "https://itch.io/jam/gmtk-2023/rate/2163370"
    },
    {
      title:"Portfolio Website V1",
      description:"The First Version of My Personal Website. First experience in Using React.js and CSS. Hope to improve my skills and showcase it in a future version of this website!",
      icon: project3,
    },

  ]
  const updateIndex = (newIndex) =>{
      if (newIndex < 0) {
        newIndex = 0;
      } else if(newIndex >= items.length){
        newIndex = items.length-1;
      }

      setActiveIndex(newIndex);
    };

  return (
    <div classname="carousel">
      <div className='title w-full'> Personal Projects</div>
      <div 
      className='inner' 
      style={{ transform: `translate(-${activeIndex*100}%)` }}
      >
        {items.map((item)=>{
          return <CarouselItem item={item} width={"100%"} />
        })}
      </div>
      
      <div className='carousel-buttons'>
        <button onClick={()=>{
          updateIndex(activeIndex-1);
        }} className='button-arrow'>  
        <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className='indicators'>
          {items.map((item,index)=>{
            return (
              <button onClick={()=>{
                updateIndex(index);
              }} className='indicator-buttons'>
          <span className={`material-symbols-outlined ${index==activeIndex? "indicator-symbol-active":"indicator-symbol"
        }`}>radio_button_checked</span>
          </button>
          );
          })}
        </div>
        <button onClick={()=>{
          updateIndex(activeIndex+1);
        }} className='button-arrow'>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
          </button>
      </div>
        
    </div>
  )
}
