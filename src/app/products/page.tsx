import Link from "next/link"
import NewProduct from "./components/NewProduct"

const products = [
  "cellphone",
  "computer",
  "chessBoard",
]

const page = () => {
  return (
    <div  className="w-screen h-screen flex flex-col text-center bg-black">
      <Link href="/" className="text-white">Home</Link>
      {products.map((productName, index) => <NewProduct productName={productName} key={index}/>)}
    </div>
  )
}

export default page
