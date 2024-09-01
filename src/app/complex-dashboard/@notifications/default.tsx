import React from 'react'
import NewNotification from './components/NewNotification'
import Link from 'next/link'

const persons = [
  { author: "esteban", context: "I found 100 dolars in the floor of United States and this is my first time"},
  { author: "juan", context: "I am mading a page using nextjs while watching a tutorial of codevolution"},
  { author: "anomous", context: "I am trying to hack the arch linux computer of someone but it have very good defences"}
]

const Default = () => {
  return (
    <div className="bg-gray-900 rounded p-3 m-3">
      {persons.map((person) => (
        <NewNotification author={person.author} context={person.context} key={person.author}/> 
      ))} 
      <Link href="complex-dashboard/archived" className="text-gray-200 text-xl p-3 m-2">Archived</Link>
    </div>
  )
}

export default Default
