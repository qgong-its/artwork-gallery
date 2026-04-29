import type { Artwork } from '@/schemas/artworkSchema';
import ArtworkCard from './ArtworkCard';

type ArtworkListProps = {
  artworks: Artwork[];
  isSaved?: (artworkId: number) => boolean;
  onToggleSave?: (artwork: Artwork) => void;
};

export function ArtworkList({
  artworks,
  isSaved,
  onToggleSave,
}: ArtworkListProps) {
  if (artworks.length === 0) {
    return <p className="text-center opacity-70">No artworks found.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {artworks.map((artwork) => (
        <ArtworkCard
          key={artwork.id}
          artwork={artwork}
          isSaved={isSaved?.(artwork.id)}
          onToggleSave={onToggleSave}
        />
      ))}
    </div>
  );
}
