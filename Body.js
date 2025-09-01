import React from 'react'
import Search from './Search'
import ResContainer from './ResContainer'
import ResCard from './ResCard'

function Body() {
  return (
    <div className='body'>
        <Search/>
        <ResContainer>
          <ResCard/>
        </ResContainer>
    </div>
  )
}

export default Body