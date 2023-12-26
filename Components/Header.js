import React from 'react'
import Link from 'next/link'


const Header = (props) => {
  return (
    <>
      <div className='bg-green-300 gap-2 px-4 h-10 flex items-center justify-between'>
        <h1>Header for {props.user}</h1>
        <ul className='flex gap-2'>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Contact">Contact</Link></li>

        </ul>
      </div>
    </>
  )
}

export default Header
