import { notFound } from 'next/navigation'
import React from 'react'

const page = ({params}: {params: {reviewId: number, productId: number}}) => {
  if (params.reviewId > 1000) {
    notFound();
  }
  return (
    <div className="w-screen h-screen flex flex-col text-center bg-black">
      <h1 className="text-5xl text-white m-3">Review {params.reviewId} for product {params.productId}</h1>
    </div>
  )
}

export default page
