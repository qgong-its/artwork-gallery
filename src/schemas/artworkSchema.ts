import { z } from 'zod/v4';

const artworkSchema = z.object({
  id: z.number(),
  title: z.string().trim().min(1).catch('Untitled'),
  artist_title: z.string().trim().min(1).catch('Unknown artist'),
  image_id: z.string().min(1).catch(''),
});

export type Artwork = z.infer<typeof artworkSchema>;
