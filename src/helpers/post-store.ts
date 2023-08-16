import { create } from 'zustand';

export interface Post {
  is_verified: boolean;
}
interface PostsStore {
  verified: boolean;
  posts: Post[];
  toggleVerified: () => void;
  setPosts: (posts: Post[]) => void;
}

export const usePostsStore = create<PostsStore>((set) => ({
  verified: false,
  posts: [],
  toggleVerified: () => set((state) => ({ verified: !state.verified })),
  setPosts: (posts) => set({ posts }),
}));
