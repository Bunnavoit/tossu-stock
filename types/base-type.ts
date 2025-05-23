import { z } from "zod";

export const metadataSchema = z.object({
  total: z.number(),
  page: z.number(),
  limit: z.number(),
  totalpage: z.number(),
  hasPrevPage: z.null(),
  hasNextPage: z.null(),
});

export type MetadataType = z.infer<typeof metadataSchema>;
