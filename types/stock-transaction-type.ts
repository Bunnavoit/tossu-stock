import axiosClient from "@/lib/axios";
import { z } from "zod";
import { productSchema } from "./product-type";

const TransactionType = z.enum(["IN", "OUT"]);

export const StockTransactionSchema = z.object({
  id: z.string(),
  productId: z.string(),
  product: productSchema,
  type: TransactionType,
  quantity: z.number().int().positive(),
  note: z.string().optional(),
  createdAt: z.string().datetime(),
  deletedAt: z.string().datetime().nullable().optional(),
});

export const StockTransactionPostSchema = z.object({
  productId: z.string(),
  type: TransactionType,
  quantity: z.number().int().positive(),
  note: z.string().optional(),
});

export const StockTransactionArraySchema = z.array(StockTransactionSchema);

export type StockTransactionType = z.infer<typeof StockTransactionSchema>;
export type StockTransactionPostType = z.infer<
  typeof StockTransactionPostSchema
>;
