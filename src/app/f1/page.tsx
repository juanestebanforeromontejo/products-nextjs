import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className="h1 text-white m-3 p-3">F1 page</h1>
      <Link href="/f1/f2" className="text-white m-3 p-3">F2</Link>
    </div>
  )
}

export default page
