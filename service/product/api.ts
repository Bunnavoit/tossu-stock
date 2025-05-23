import axiosClient from "@/lib/axios";
import {
  GetProductResponse,
  PostProductRequest,
  ProductType,
} from "@/types/product-type";
import { useQuery } from "@tanstack/react-query";

export const getProduct = async () => {
  const response = await axiosClient.get<GetProductResponse>("/product");
  return response.data;
};

export const PostProduct = async (data: PostProductRequest) => {
  const response = await axiosClient.post("/product", data);
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await axiosClient.get(`/product/${id}`);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await axiosClient.delete(`/product/${id}`);
  return response.data;
};

export const updateProduct = async (id: string, data: PostProductRequest) => {
  const response = await axiosClient.put(`/product/${id}`, data);
  return response.data;
};

export const getLowStockProduct = async () => {
  const response = await axiosClient.get("/product/low-stock");
  return response.data;
};
