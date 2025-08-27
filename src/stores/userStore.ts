import { deleteUsersById, fetchUsersData } from "@/services/userServices";
import { UserData } from "@/types/userData";
import { create } from "zustand";

interface UserState {
  users: UserData[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
  deleteUsers: (id: readonly number[]) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  loading: false,
  error: null,
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const users = await fetchUsersData();
      set({ users, loading: false, error: null });
    } catch (error) {
      set({ error: "Gagal Fetch Data Users", loading: false });
    }
  },

  deleteUsers: async (ids: readonly number[]) => {
    set({ loading: true });
    try {
      await deleteUsersById(ids);
      set((state) => ({
        users: state.users.filter((user) => !ids.includes(user.id)),
        loading: false,
      }));
    } catch (error) {
      set({ error: "Gagal Menghapus User", loading: false });
    }
  },
}));
