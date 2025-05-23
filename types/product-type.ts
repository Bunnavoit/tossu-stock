import { z } from "zod";
import { categorySchema } from "./category-type";
import { metadataSchema } from "./base-type";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  sku: z.string(),
  unit: z.string(),
  quantity: z.number(),
  minThreshold: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  categoryId: z.string(),
  deletedAt: z.null(),
  category: categorySchema,
});

export const getProductResponseSchema = z.object({
  data: z.array(productSchema),
  meta: metadataSchema,
});

export const postProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  sku: z.string().min(1, "SKU is required"),
  unit: z.string().min(1, "Unit is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  minThreshold: z.number().min(0, "Minimum threshold must be at least 0"),
  categoryId: z.string().uuid(),
});

export type PostProductRequest = z.infer<typeof postProductSchema>;

export type ProductType = z.infer<typeof productSchema>;

export type GetProductResponse = z.infer<typeof getProductResponseSchema>;
