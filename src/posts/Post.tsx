import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/images/love.png"
import img2 from "../assets/images/comment.png"
import img3 from "../assets/images/share.png"
import "./Post.scss"

export interface PostProps {
  post: {
    user_id?: number;
    user_name?: string;
    user_avatar?: string;
    body?: string;
    hashtags?: string;
    image_url?: string;
    likes?: number;
    comments?: number;
    shares?: number;
    timestamp?: string;
    country?: string | null;
    language?: string;
    is_verified?: boolean;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
    return (
    <article className="col-xs-12 col-md-6 art">
      <img src={post.image_url} className="imgpr" alt="Post" />
      <div className="post-info row">
        <div className="na col-6">
          <img src={post.user_avatar} className="au" alt="User Avatar" />
          <h6>{post.user_name}</h6>
          {post.is_verified && (<FontAwesomeIcon icon={faCheckCircle} className="verified-icon"/>)}
        </div>
        <div className="like col-2">
          <img src={img1} alt="Likes" className="like-img" />
          <h6>{post.likes}</h6>
        </div>
        <div className="comment col-2">
          <img src={img2} alt="Comments" className="comment-img" />
          <h6>{post.comments}</h6>
        </div>
        <div className="share col-2">
          <img src={img3} alt="Comments" className="share-img" />
          <h6>{post.shares}</h6>
        </div>
      </div>
      <div className="sus">
        <h4 className="he">#{post.hashtags}</h4>
        <p>{post.body}</p>
      </div>
    </article>
  );
};

export default Post;
