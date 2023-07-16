import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Typography } from '@material-tailwind/react'

const Home = () => {
  return (
    
    <Navbar className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
    <div className='flex px-64 items-center justify-between text-blue-gray-900'>
      <Typography >
      <Link  to='/createuser'>Createuser</Link>
      </Typography> 
      <Typography>
      <Link to='/user'>User</Link>
      </Typography>
    </div>
    </Navbar>
  )
}

export default Home