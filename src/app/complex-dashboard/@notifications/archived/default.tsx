import React from 'react'
import NewNotification from '/home/juannvrs/Documents/nextjs-learning/nextjs-series/src/app/complex-dashboard/@notifications/components/NewNotification'
import Link from 'next/link'

const persons = [
  { author: "esteban", context: "I found 100 dolars in the floor of United States and this is my first time"},
  { author: "juan", context: "I am mading a page using nextjs while watching a tutorial of codevolution"},
  { author: "anomous", context: "I am trying to hack the arch linux computer of someone but it have very good defences"},
  { author: "idk", context: "just spam"},
  { author: "kfc", context: "kfc = afk :) just spam"},
]

const Default = () => {
  return (
    <div className="bg-gray-900 rounded p-3 m-3">
      {persons.map((person) => (
        <NewNotification author={person.author} context={person.context} key={person.author}/>
      ))} 
      <Link href="./" className="text-xl text-gray-200 p-3 m-2">Default</Link>
    </div>
  )
}

export default Default
