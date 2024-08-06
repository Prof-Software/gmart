import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black text-gray-400 flex items-center justify-between p-6'>
        <div>
            <h4 className='text-sm font-sans mb-3'>Games Mart is an all-inclusive online platform for everything related to gaming. We are committed to advancing innovations for the benefit of the gaming community</h4>
            <div className='flex text-xs'>
            © 2024 Games Mart | <span className='hover:text-blue-400 mx-1 cursor-pointer transition-all'>About Us</span> | <span className='hover:text-blue-400 mx-1 cursor-pointer transition-all'>Terms of Service</span> | <span className='hover:text-blue-400 mx-1 cursor-pointer transition-all'>Legal</span> | <span className='hover:text-blue-400 mx-1 cursor-pointer transition-all'>Privacy Policy</span> | <span className='hover:text-blue-400 mx-1 cursor-pointer transition-all'>Help</span>
            </div>
        </div>
        <div>socials</div>
    </div>
  )
}

export default Footer