import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className='flex w-full bg-violet-600 p-5 text-white '>
        <Link className='text-2xl font-bold ' to={'/'}><i className="fa-solid fa-truck"></i>E Cart</Link>
        <ul className='flex-1 text-right'>
            <li className='list-none inline-block px-5'>
                <input style={{width:'300px'}} className='rounded p-2' type='text' placeholder='Search Products Here...'></input>
            </li>
            <li className='list-none inline-block px-5'>
            <Link to={'/wishlist'}><i className="fa-solid fa-heart text-red-700"></i>Wishlist<span className='bg-black text-white rounded p-1 ms-1'>0</span></Link>
            </li>
            <li className='list-none inline-block px-5'><Link to={'/cart'}><i className="fa-solid fa-cart-shopping text-green-600"></i>Cart<span className='bg-black text-white rounded p-1 ms-1'>0</span></Link></li>
        </ul>
    </nav>
  )
}

export default Header