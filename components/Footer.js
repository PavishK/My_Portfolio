import React from 'react'

function Footer() {
  return (
    <div className='w-full flex items-center justify-center p-2 bg-bg'>
      <div className="w-full bg-[#0D2920] rounded-lg py-4 text-center text-white text-sm">
        © {new Date().getFullYear()} Pavish K. All rights reserved.
      </div>
    </div>
  )
}

export default Footer