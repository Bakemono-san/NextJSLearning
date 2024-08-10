import Link from 'next/link'
import { Key } from 'react'
import Image from 'next/image'

export default function PostHeader({username,profile,timeElapsed,id}: Readonly<{username:string,profile:string,timeElapsed:string,id:Key}>) {
  return (
    <div className='p-1 flex items-center justify-between'>
        <Link href={'/profile/'+id} className='flex gap-4 items-center'>
            <Image src={profile} width={200} height={200} alt='post'className='w-6 h-6 sm:w-10 sm:h-10 rounded-full object-fill'/>
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
