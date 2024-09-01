"use client";
import { notFound } from 'next/navigation'
import React from 'react'

function getRamdomInt(count: number) {
  return Math.floor(Math.random() * count)
}

const page = ({params}: {params: {reviewId: number, productId: number}}) => {
  if (params.reviewId > 1000) {
    notFound();
  }

//  const ramdom = getRamdomInt(2);

 // if (ramdom === 1) {
   // throw new Error("Error loading review");
  // }
  return (
    <div className="w-screen h-screen flex flex-col text-center bg-black">
      <h1 className="text-5xl text-white m-3">Review {params.reviewId} for product {params.productId}</h1>
    </div>
  )
}

export default page
