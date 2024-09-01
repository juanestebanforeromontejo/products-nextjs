"use client";

const Error = ({error, reset}: {error: Error, reset: () => void}) => {
  return (
    <div className="div">
      <h1 className="h1 text-gray-200">Error in current page</h1>
      <h1 className="h1 text-gray-200">Please restart the page</h1>
      <h1 className="h1 text-gray-200">If you need it restart the computer</h1>
      <h1 className="h1 text-gray-200">the error is: {error.message}</h1>
      <h1 className="h1 text-gray-200">Thanks for your atention</h1>
      <h1 className="h1 text-gray-200">We will fix this error soon :)</h1>
      <button className="bg-gray-800 text-gray-200 outline-none rounded m-3 p-3" onClick={reset}>Try again :)</button>
    </div>
  )
}

export default Error
