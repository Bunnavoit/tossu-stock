import axiosClient from "@/lib/axios";
import { CategoryType, GetCategoryResponse } from "@/types/category-type";

export const getCategory = async () => {
  const response = await axiosClient.get<GetCategoryResponse>("/category");
  return response.data;
};

export const PostCategory = async (name: string) => {
  const response = await axiosClient.post("/category", { name });
  return response.data;
};

export const getCategoryById = async (id: string) => {
  const response = await axiosClient.get<CategoryType>(`/category/${id}`);
  return response.data;
};

export const deleteCategory = async (id: string) => {
  const response = await axiosClient.delete(`/category/${id}`);
  return response.data;
};
