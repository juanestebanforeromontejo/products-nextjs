import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-3xl text-gray-200 p-3 m-2">Username</h3>
      <input className="w-full rounded bg-gray-900 outline-none h-10 p-3 m-3 text-gray-200"/>
      <h3 className="text-3xl text-gray-200 p-3 m-2">Password</h3>
      <input className="w-full rounded bg-gray-900 outline-none h-10 p-3 m-3 text-gray-200"/>
    </div>
  )
}

export default page
