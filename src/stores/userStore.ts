import { fetchUsersData } from "@/services/userServices";
import { UserData } from "@/types/userData";
import { create } from "zustand";

interface UserState {
  users: UserData[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  loading: false,
  error: null,
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const users = await fetchUsersData();
      set({ users, loading: false });
    } catch (error) {
      set({ error: "Gagal Fetch Data Users", loading: false });
    }
  },
}));
