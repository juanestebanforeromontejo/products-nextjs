import { Metadata } from "next";

type Props = {
  params: {
    productId: number
  }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    }, 100)
  })
  return {
    title: `Product ${title}`
  }
}


const page = ({ params }:  Props) => {
  return (
    <div className="div">
      <h1 className="h1 text-white">Details About Product {params.productId}</h1>
    </div>
  )
}

export default page
