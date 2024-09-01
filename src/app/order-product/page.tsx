"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };
  return (
    <div>
      <h1 className="h1 text-white">Order product</h1>
      <button onClick={handleClick} className="bg-gray-800 text-gray-200 rounded border-none m-3 p-3 ">Place order</button>
    </div>
  )
}

export default Page
