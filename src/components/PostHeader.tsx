import Link from 'next/link'
import { Key } from 'react'

export default function PostHeader({username,profile,timeElapsed,id}: Readonly<{username:string,profile:string,timeElapsed:string,id:Key}>) {
  return (
    <div className='p-1 flex items-center justify-between'>
        <Link href={'/profile/'+id} className='flex gap-4 items-center'>
            <img src={profile} className='w-10 h-10 rounded-full'/>
            <span className='flex gap-2'>
                <strong>{username}</strong>
                <span>{timeElapsed}</span>
            </span>
        </Link>
        <div>
            <p className='text-3xl'>...</p>
        </div>
    </div>
  )
}
