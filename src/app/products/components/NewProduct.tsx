interface Props {
  productName: string
}

const NewProduct = (props: Props) => {
  return (
    <div>
      <p className="font-bold text-white m-3">{props.productName}</p>
    </div>
  )
}

export default NewProduct 
