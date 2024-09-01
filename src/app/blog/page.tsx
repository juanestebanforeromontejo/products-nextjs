import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

const page = () => {
  return (
    <div className="div">
      <h1 className="text-5xl m-3 font-bold text-white flex flex-auto">about me!</h1>
    </div>
  )
}

export default page
