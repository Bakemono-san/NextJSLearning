import React from 'react'

export default function Header() {
  return (
    <header className='flex p-8 bg-gray-300 justify-between'>
        <div>
          <p className='text-2xl'>
            Nextjs learning
          </p>
        </div>
        <div>
            <nav className="flex gap-2">
              <button className="nav-link active">Active link</button>
              <button className="nav-link">Link</button>
              <button className="nav-link disabled">Disabled link</button>
            </nav>
        </div>
    </header>
  )
}
