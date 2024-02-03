import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AddCommunication from '../components/AddCommunication/AddCommunication'
import Communications from '../components/Communications/Communications'
import AppContextProvider from '../context/app-context'

const UserPanel = () => {
  return (
    <AppContextProvider>
      <div className='lg:px-64 lg:py-28 px-0 py-20 '>
        <Navbar />
        <div className='bg-gray p-10 rounded-[1rem]'>
        <AddCommunication />
        <Communications />
        </div>
      </div>
    </AppContextProvider>
  )
}

export default UserPanel