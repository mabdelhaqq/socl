import { sleep } from "../utils";
import { PostData } from './type';

interface PostProps {
    post: PostData;
  }

const postsKey = 'my_posts';


export const dataAPI = {
  getAllPosts: async ():Promise<PostProps[]> => {
    await sleep(2000);
    const postsJSON = localStorage.getItem(postsKey);
    return postsJSON ? JSON.parse(postsJSON) : [];
  },

  getPost: async (id: number):Promise<PostProps> => {
    await sleep(2000);
    const postsJSON = localStorage.getItem(postsKey);
    const posts = postsJSON ? JSON.parse(postsJSON) : [];
    return posts.find((post: PostProps) => post.post.user_id === id);
  },

  addPost: async (newPost: PostProps):Promise<void> => {
    await sleep(2000);
    const postsJSON = localStorage.getItem(postsKey);
    const posts = postsJSON ? JSON.parse(postsJSON) : [];
    const updatedPosts = [...posts, newPost];
    localStorage.setItem(postsKey, JSON.stringify(updatedPosts));
  },

  removePost: async (id: number):Promise<void> => {
    await sleep(2000);
    const postsJSON = localStorage.getItem(postsKey);
    const posts = postsJSON ? JSON.parse(postsJSON) : [];
    const updatedPosts = posts.filter((post: PostProps) => post.post.user_id !== id);
    localStorage.setItem(postsKey, JSON.stringify(updatedPosts));
  },
  setPosts:async (posts: PostProps[]):Promise<void> => {
    localStorage.setItem(postsKey, JSON.stringify(posts));
  }
};
