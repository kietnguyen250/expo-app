import { createStore } from "./config.store";

type User = {
  id: string;
  name: string;
  email: string;
};

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserStore = createStore<UserState>(
  (set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
  }),
  "user"
);
