import React from 'react'
import Header from '../components/Header'
const View = () => {
  return (
    <>
      <Header/>
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <img width={'450px'} height={'200px'} src="https://images-static.nykaa.com/media/catalog/product/0/4/04ed19dMARSX00000127_1.jpg"></img>
          <div>
              <h3 className='font-bold'>PID: ID</h3>
              <h1 className='text-5xl font-bold'>Product Name</h1>
              <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
              <h4>Brand: </h4>
              <h4>Category: category</h4>
              <p>
                  <span className='font-bold'> Description</span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  <div className='flex justify-between mt-5'>
                    <button className='bg-blue-600 text-white p-2'>Add to wishlist</button>
                    <button className='bg-green-600 text-white p-2'>Add to Cart</button>
                  </div>
              </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default View