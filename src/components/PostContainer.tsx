import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Post } from '../../utils/type';

export interface PostContainerProps {
    posts: Post[];
  }

  const PostContainer: React.FC<PostContainerProps> = ({ posts }) => {
    return (
      <div className='flex flex-col gap-10 self-center'>
        {posts.map((post:Post) => (
          <div key={post.id} className='w-full flex flex-col gap-2'>
            <PostHeader 
              username={post.username} 
              profile={post.profile} 
              timeElapsed={post.timeElapsed} 
              id={post.id}
            />
            <img src={post.image} alt="Post image" className='postImage'/>
            <PostFooter 
              likes={post.likes} 
            />
          </div>
        ))}
      </div>
    );
  };




export default PostContainer;