import React from 'react'

function Footer() {
  return (
    <footer className='bg-gray-800 text-white flex items-center justify-center px-4 h-16'>
      <p className='text-center flex items-center gap-1'>&copy; Get Me A Coffee - Develop By<a href="mailto:zeeshanwdev@gmail.com" className='underline hover:text-gray-400'>Zeehanwdev</a>
      <lord-icon className="w-6 h-6"
    src="https://cdn.lordicon.com/dqhmanhc.json"
    trigger="hover"
    colors="primary:#FF4C4C,secondary:#ebe6ef,tertiary:#f2e2d9,quaternary:#f9c9c0,quinary:#f24c00">
</lord-icon></p>
    </footer>
  )
}

export default Footer
