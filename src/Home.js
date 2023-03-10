import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'
import Modal from './Modal'



const Home = () => {
  const {openSidebar, openModal} = useGlobalContext();

  return <main>
    <button className='sidebar-toggle' onClick={openSidebar}>
    <FaBars />
    </button>
    <button className="btn" onClick={openModal}>open modal</button>
  </main>
}

export default Home
