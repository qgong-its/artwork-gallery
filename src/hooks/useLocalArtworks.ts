import { useEffect, useState } from 'react';
import type { Artwork } from '@/schemas/artworkSchema';
import { loadFromStorage, saveToStorage, STORAGE_KEY } from '@/utils/storage';

export const useLocalArtworks = () => {
  const [localArtworks, setLocalArtworks] = useState<Artwork[]>(() =>
    loadFromStorage<Artwork[]>(STORAGE_KEY, []),
  );

  useEffect(() => {
    saveToStorage(STORAGE_KEY, localArtworks);
  }, [localArtworks]);

  const isSaved = (artworkId: number) => {
    return localArtworks.some((artwork) => artwork.id === artworkId);
  };

  const addArtwork = (artwork: Artwork) => {
    setLocalArtworks((currentArtworks) => {
      if (currentArtworks.some((item) => item.id === artwork.id)) {
        return currentArtworks;
      }

      return [...currentArtworks, artwork];
    });
  };

  const removeArtwork = (artworkId: number) => {
    setLocalArtworks((currentArtworks) =>
      currentArtworks.filter((artwork) => artwork.id !== artworkId),
    );
  };

  const toggleArtwork = (artwork: Artwork) => {
    if (isSaved(artwork.id)) {
      removeArtwork(artwork.id);
      return;
    }

    addArtwork(artwork);
  };

  return {
    localArtworks,
    isSaved,
    addArtwork,
    removeArtwork,
    toggleArtwork,
  };
};
