const page = ({ params }: { params: { productId: number } }) => {
  return (
    <div className="w-screen h-screen flex flex-col text-center bg-black">
      <h1 className="text-5xl text-white m-3">Details About Product {params.productId}</h1>
    </div>
  )
}

export default page
