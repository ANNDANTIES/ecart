import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
Link
const Home = () => {
  return (
   <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
    <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow'>
          <img width={'100%'} height={'200px'} src="https://img.freepik.com/free-vector/vegetables-shopping-realistic-concept-with-shopping-cart-goods-vector-illustration_1284-16246.jpg?ga=GA1.1.1678691470.1734072341&semt=ais_hybrid" alt=""></img>
          <div className='text-center'>
            <h3 className='text-xl font-bold'>Product</h3>
            <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View Cart</Link>
          </div>

        </div>
    </div>

    </div>
   </>
  )
}

export default Home