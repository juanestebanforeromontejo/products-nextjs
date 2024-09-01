import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About codevolution"
};

const page = () => {
  return (
    <div className="w-screen h-screen bg-black flex flex-col">
      <h1 className="text-5xl m-3 font-bold text-white flex flex-auto">about me!</h1>
    </div>
  )
}

export default page
