import React from 'react'
import { PostData } from './type';

interface PostProps {
    post: PostData;
  }
const PostDetails: React.FC<PostProps> = () => {
  return (
    <div className='container-post'>
        <div className='img-post'>
            <img  alt="img"/>
        </div>
        <div className='info-post'>

        </div>
    </div>
  )
}

export default PostDetails