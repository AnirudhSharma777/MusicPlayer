import React from 'react'
import Sidebar from '../Homepage/Sidebar'
import SongList from '../Homepage/SongList'
import MusicCard from '../Homepage/MusicCard'
import { MusicPlayerProvider } from '../../context/ControlContext'

const Layout = () => {
  return (
    <MusicPlayerProvider>

      <div className='w-full min-h-screen grid grid-flow-col-dense '>
        <div className='col-span-1'>
          <Sidebar />
        </div>
        <div className='col-span-4 '>
          <SongList />
        </div>
        <div className='col-span-5  sm:block hidden'>
          <MusicCard />
        </div>
      </div>

    </MusicPlayerProvider>

  )
}

export default Layout