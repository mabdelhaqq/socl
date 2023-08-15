import {create} from 'zustand';

interface FilterStore {
  verified: boolean;
  toggleVerified: () => void;
}

export const PostsStore = create<FilterStore>((set) => ({
  verified: false,
  toggleVerified: () => set((state: FilterStore) => ({ verified: !state.verified })),
}));
