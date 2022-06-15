import React from 'react'
import SmallMap from '../components/SmallMap'

const MainPage = () => {
  const xy = [126.238441001881,33.2976609987304]
  return (
    <div>
      <SmallMap xy={xy}/>
    </div>
  )
}

export default MainPage