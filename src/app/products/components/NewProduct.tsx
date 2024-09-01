import Link from "next/link"

interface Props {
  productName: string
}

const NewProduct = (props: Props) => {
  const link = "products/" + props.productName;
  return (
    <div>
      <Link href={link}><p className="font-bold text-white m-3">{props.productName}</p></Link>
    </div>
  )
}

export default NewProduct 
