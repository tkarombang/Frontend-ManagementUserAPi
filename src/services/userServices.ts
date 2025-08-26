import { UserData } from "@/types/userData";
import axios from "axios";

const API_URL = "http://localhost:5101/api/User";

export const fetchUsersData = async (): Promise<UserData[]> => {
  try {
    const response = await axios.get<UserData[]>(API_URL);
    return response.data;
  } catch (err) {
    console.error("Gagal Mengambil Data", err);
    throw err;
  }
};

export const createNewUser = async (userData: Omit<UserData, "id">): Promise<UserData> => {
  try {
    const response = await axios.post<UserData>(API_URL, userData);
    return response.data;
  } catch (error) {
    console.error("Gagal Menambahkan Data User Baru", error);
    throw error;
  }
};
