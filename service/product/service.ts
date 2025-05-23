import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteProduct,
  getLowStockProduct,
  getProduct,
  getProductById,
  PostProduct,
  updateProduct,
} from "./api";
import { getQueryClient } from "@/lib/get-query-client";
import { PostProductRequest } from "@/types/product-type";
import { icons } from "lucide-react";
import toast from "react-hot-toast";

export const useGetProduct = () => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(),
  });
};

export const useGetProductById = (id: string) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
};

export const usePostProduct = () => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: (data: PostProductRequest) => PostProduct(data),
    onSuccess: () => {
      toast.success("Product created successfully", {
        icon: "✅",
      });
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
    onError: () => {
      toast.error("Failed to create Product", {
        icon: "❌",
      });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => {
      toast.success("Deleted created successfully", {
        icon: "✅",
      });
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
    onError: () => {
      toast.error("Failed to deleted Product", {
        icon: "❌",
      });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: (data: { id: string; data: PostProductRequest }) =>
      updateProduct(data.id, data.data),
    onSuccess: () => {
      toast.success("Product update successfully", {
        icon: "✅",
      });
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
    onError: () => {
      toast.error("Failed to update Product", {
        icon: "❌",
      });
    },
  });
};

export const useGetLowStockProduct = () => {
  return useQuery({
    queryKey: ["low-stock-product"],
    queryFn: getLowStockProduct,
  });
};
