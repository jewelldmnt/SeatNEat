import React from 'react'
import Cusine from '../components/Layout/Home/Cusine'
import Popular from '../components/Layout/Home/Popular'
import Location from '../components/Layout/Home/Location'
import Deals from '../components/Layout/Home/Deals'

const Home = () => {
  return (
    <div>
        <Cusine />
        <Popular />
        <Location />
        <Deals />
    </div>
  )
}

export default Home