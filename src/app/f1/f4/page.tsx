import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className="h1 text-white">F4 page</h1>
      <Link href="/f1/f3" className="text-white m-3 p-3">F3</Link>
      <Link href="/about" className="text-white m-3 p-3">about</Link>
    </div>
  )
}

export default page
