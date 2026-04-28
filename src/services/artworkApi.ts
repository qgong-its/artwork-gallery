import { responseSchema, type Artwork } from '@/schemas/artworkSchema';

const BASE_URL = 'https://api.artic.edu/api/v1';

const FIELDS = 'id,title,artist_title,image_id';

export const request = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
};

export const getArtworks = async (): Promise<Artwork[]> => {
  const response = await request<unknown>('/artworks?fields=${FIELDS}');

  const parsedResponse = responseSchema.parse(response);

  return parsedResponse.data;
};

export const searchArtworks = async (query: string): Promise<Artwork[]> => {
  const response = await request<unknown>(
    `/artworks/search?q=${encodeURIComponent(query)}&fields=${FIELDS}`,
  );

  const parsedResponse = responseSchema.parse(response);

  return parsedResponse.data;
};
