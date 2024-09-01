function getRamdomInt(count: number) {
  return Math.floor(Math.random() * count)
}

const layout = ({children}: { children: React.ReactNode}) => {
  const ramdom = getRamdomInt(2);

  if (ramdom === 1) {
    throw new Error("Error loading product");
  }

  return (
    <>
      {children}
      <h2 className="h1 text-white text-3xl">Features Products</h2>
    </>
  )
}

export default layout
