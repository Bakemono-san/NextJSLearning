import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faBookmark, faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function PostFooter({likes}:Readonly<{likes:number}>) {
  return (
    <>
    <div className='flex justify-between items-center p-2'>
        <div className='flex gap-4'>
            <FontAwesomeIcon icon={faHeart} className='w-4 hover:text-white cursor-pointer'/>
            <FontAwesomeIcon icon={faComment} className='w-4 hover:text-white cursor-pointer'/>
            <FontAwesomeIcon icon={faPaperPlane} className='w-4 hover:text-white cursor-pointer'/>
        </div>
        <div>
            <FontAwesomeIcon icon={faBookmark} className='w-4 hover:text-white cursor-pointer'/>
        </div>
    </div>
    <div>
        <p>{likes} j'aimes</p>
    </div>
    </>
  )
}
