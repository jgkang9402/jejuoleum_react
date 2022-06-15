import React from 'react'
import SmallMap from '../components/SmallMap'

const MainPage = () => {
  const y = 33.2976609987304
  const x = 126.238441001881
  const xy = [126.238441001881,33.2976609987304]
  return (
    <div>
      <SmallMap x={x} y={y} xy={xy}/>
    </div>
  )
}

export default MainPage