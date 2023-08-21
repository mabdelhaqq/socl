import React from 'react'
import { PostData } from './type';
import "./PostDetails.scss"

interface PostProps {
    post: PostData;
  }
const PostDetails: React.FC<PostProps> = ({post}) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={post.user_avatar} alt="User Avatar" />
        <div>
          <h3>{post.user_name}</h3>
          <p>{post.timestamp}</p>
        </div>
      </div>
      <div className="post-content">
        <p>{post.body}</p>
        <img src={post.image_url} alt="Post Image" />
        <p>Hashtags: {post.hashtags}</p>
      </div>
      <div className="post-footer">
        <p>Likes: {post.likes}</p>
        <p>Comments: {post.comments}</p>
        <p>Shares: {post.shares}</p>
      </div>
    </div>
  );
};

export default PostDetails