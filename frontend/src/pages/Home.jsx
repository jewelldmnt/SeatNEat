import React from 'react'
import Cusine from '../components/Layout/Home/Cusine'
import Popular from '../components/Layout/Home/Popular'
import Location from '../components/Layout/Home/Location'

const Home = () => {
  return (
    <div>
        <Cusine />
        <Popular />
        <Location />
    </div>
  )
}

export default Home