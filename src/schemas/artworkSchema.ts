import { z } from 'zod/v4';

export const paginationSchema = z.object({
  total: z.number(),
  limit: z.number(),
  offset: z.number(),
  total_pages: z.number(),
  current_page: z.number(),
});

export const artworkSchema = z.object({
  id: z.number(),
  title: z.string().trim().min(1).catch('Untitled'),
  artist_title: z.string().trim().min(1).catch('Unknown artist'),
  image_id: z.string().min(1).catch(''),
});

export const responseSchema = z.object({
  pagination: paginationSchema,
  data: z.array(artworkSchema),
});

export type Pagination = z.infer<typeof paginationSchema>;

export type Artwork = z.infer<typeof artworkSchema>;

export type ArtworkResponse = z.infer<typeof responseSchema>;
