import React from 'react'
interface Props {
  author: string,
  context: string
}

const NewNotification = (props: Props) => {
  return (
    <div>
      <div className="bg-gray-800 w-full h-full rounded p-3 m-3">
        <p className="text-white text-3xl p-3 m-2">Author: {props.author}</p>
        <p className="text-white text-3xl p-3 m-2">{props.context}</p>
      </div>
    </div>
  )
}

export default NewNotification
