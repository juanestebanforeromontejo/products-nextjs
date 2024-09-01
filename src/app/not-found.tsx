import React from 'react'

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col text-center bg-black">
      <h2 className="text-white text-3xl font-bold m-3">Page not found | Err 404</h2>
      <p className="text-white font-bold m-3">Could not find requested resourse</p>
    </div>
  )
}

export default NotFound
