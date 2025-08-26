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

export const deleteUsersById = async (ids: readonly number[]): Promise<void> => {
  try {
    await Promise.all(ids.map((id) => axios.delete(`${API_URL}/${id}`)));
  } catch (error) {
    console.error("Gagal Menghapus User: ", error);
    throw error;
  }
};

export const fetchUserById = async (id: number): Promise<UserData> => {
  try {
    const response = await axios.get<UserData>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Gagal Mengambil User dengan Id ${id}`, error);
    throw error;
  }
};

export const editUser = async (id: number, userData: Omit<UserData, "id">): Promise<UserData> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Gagal Melakukan Edit Data dengan ID ${id}`, error);
    throw error;
  }
};
