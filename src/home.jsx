import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/portfolio">Portfolio</Link>
      </div>
    </div>
  )
}

export default Home