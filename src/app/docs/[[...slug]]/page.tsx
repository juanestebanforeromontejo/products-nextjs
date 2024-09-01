import React from 'react'

const page = ({params}: {params: {slug: string[]}}) => {
  if (params.slug?.length === 2) {
    return (
      <div className="w-screen h-screen flex flex-col text-center bg-black">
        <h1 className="text-5xl text-white m-3 font-bold">Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
      </div>
    )
  } else if (params.slug?.length === 1) {
    return (
      <div className="w-screen h-screen flex flex-col text-center bg-black">
        <h1 className="text-5xl text-white m-3 font-bold">Viewing docs for feature {params.slug[0]}</h1>
      </div>
    )
  }
  return (
    <div className="w-screen h-screen flex flex-col text-center bg-black">
      <h1 className="text-5xl text-white m-3 font-bold">Docs Home Page</h1>
    </div>
  )
}

export default page
