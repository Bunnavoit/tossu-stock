import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteCategory,
  getCategory,
  getCategoryById,
  PostCategory,
} from "./api";
import { getQueryClient } from "@/lib/get-query-client";
import toast from "react-hot-toast";

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(),
  });
};

export const useGetCategoryById = (id: string) => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => getCategoryById(id),
    enabled: !!id,
  });
};

export const usePostCategory = () => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: (name: string) => PostCategory(name),
    onSuccess: () => {
      toast.success("Category created successfully", {
        icon: "✅",
      });
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
    onError: () => {
      toast.error("Failed to create category", {
        icon: "❌",
      });
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteCategory(id),
    onSuccess: () => {
      toast.success("Category deleted successfully", {
        icon: "✅",
      });
      queryClient.invalidateQueries({ queryKey: ["category"] });
    },
    onError: () => {
      toast.error("Failed to deleted category", {
        icon: "❌",
      });
    },
  });
};
