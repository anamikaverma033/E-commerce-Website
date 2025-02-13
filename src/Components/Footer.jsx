import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols[3fr_1fr_1fr] gap-14 my-10 mt-40 text-small'>
            <div className='flex items-center'>
                <img src='/logo.png' alt='' className='mb-5 w-20 h-26'/>
                <p className='w-full md:w-3/4 text-gray-600 ml-8'>
                "Thank you for visiting TrendHive! We are committed to bringing you the latest styles, premium quality, 
                and an effortless shopping experience. Whether you're looking for timeless classics or the hottest trends, 
                we’ve got you covered. Stay connected with us on social media for exclusive offers, new arrivals, and styling inspiration. 
                Don't forget to subscribe to our newsletter for early access to sales and special deals. 
                Happy shopping!"
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+2-321-435-8976</li>
                    <li>contact@trendhive.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ trendhive.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
