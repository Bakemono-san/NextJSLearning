import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Key } from 'react'

export default function Status({id,image,username}: Readonly<{id:Key,image:string,username:string}>) {
  return (
    <div key={id} className="flex flex-col items-center cursor-pointer">
          <div className="relative">
            <img
              src={image}
              alt={username}
              className="w-20 h-20 rounded-full border-2 border-red-500 p-1"
            />
            
          </div>
          <p className="text-sm mt-2">{username}</p>
        </div>
  )
}
