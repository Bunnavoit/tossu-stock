import { z } from "zod";
import { metadataSchema } from "./base-type";

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date(),
});

export const getCategorySchema = z.object({
  data: z.array(categorySchema),
  meta: metadataSchema,
});

export const postCategorySchema = z.object({
  name: z.string().min(1, "Name is required"),
});
export type PostCategoryRequest = z.infer<typeof postCategorySchema>;

export type CategoryType = z.infer<typeof categorySchema>;
export type GetCategoryResponse = z.infer<typeof getCategorySchema>;
