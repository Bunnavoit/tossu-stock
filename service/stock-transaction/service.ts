import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getStockTransaction,
  getStockTransactionById,
  postStockTransaction,
} from "./api";
import toast from "react-hot-toast";

export const useGetStockTransaction = () => {
  return useQuery({
    queryKey: ["stock-transaction"],
    queryFn: getStockTransaction,
  });
};

export const useGetStockTransactionById = (id: string) => {
  return useQuery({
    queryKey: ["stock-transaction-id", id],
    queryFn: () => getStockTransactionById(id),
  });
};

export const usePostStockTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["post-stock-transaction"],
    mutationFn: postStockTransaction,
    onSuccess: () => {
      toast.success("Cut Stock successfully", {
        icon: "✅",
      });
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
    onError: () => {
      toast.error("Failed to cut Stock", {
        icon: "❌",
      });
    },
  });
};
