import axiosClient from "@/lib/axios";
import {
  StockTransactionPostType,
  StockTransactionType,
} from "@/types/stock-transaction-type";

export const getStockTransaction = async () => {
  const response = await axiosClient.get<StockTransactionType>(
    "/stock-transaction"
  );
  return response.data;
};

export const postStockTransaction = async (data: StockTransactionPostType) => {
  const response = await axiosClient.post("/stock-transaction", data);
  return response.data;
};

export const getStockTransactionById = async (id: string) => {
  const response = await axiosClient.get<StockTransactionType>(
    `/stock-transaction/${id}`
  );
  return response.data;
};

export const deleteStockTransaction = async (id: string) => {
  const response = await axiosClient.delete(`/stock-transaction/${id}`);
  return response.data;
};
