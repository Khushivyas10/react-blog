import React from 'react'
import './home.css'
import Header from '../../component/header/Header'
import Sidebar from '../../component/sidebar/Sidebar'
import Posts from '../../component/posts/Posts'


const Home = () => {
  return (
    <>
      <Header />
      <div className='home'>
        <Posts/>
        <Sidebar/>
      </div>
    </>
  )

  
}

export default Home