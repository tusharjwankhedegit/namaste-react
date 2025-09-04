import React from 'react'
import Search from './Search'
import ResContainer from './ResContainer'
import { RESTAURANTS_MOCK_DATA } from '../utils/mockData'
import { useState } from 'react'

function Body() {
  const [restaurants, setRestaurants] = useState(RESTAURANTS_MOCK_DATA)
  function filterTopRated(){
      const topRated = RESTAURANTS_MOCK_DATA.filter((data, index)=> 
          data.info.avgRating > 4.5
      );
      setRestaurants(topRated);
  }

    function all(){
      setRestaurants(RESTAURANTS_MOCK_DATA);
  }
  return (
    <div className='body'>
        <Search/>
        <div className='filter'>
          <button className='filter-btn' onClick={()=>all()}>All</button>
          <button className='filter-btn' onClick={()=>filterTopRated()}>Top rated restaurants</button>
        </div>
        <ResContainer restaurants = {restaurants}/>
    </div>
  )
}

export default Body