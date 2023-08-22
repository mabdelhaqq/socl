import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataAPI } from './data-api';
import Spinner from './Spinner';
import { Post } from '../helpers/post-store';
import "./PostDetails.scss"

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id:string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const postId = parseInt(id, 10);
        const fetchedPost = await dataAPI.getPost(postId);
        setPost(fetchedPost);
      }
    };
  
    fetchPost();
  }, [id]);

  if (!post) {
    return <Spinner />;
  }

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

export default PostDetails;
