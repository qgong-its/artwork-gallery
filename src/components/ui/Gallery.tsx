import type { Artwork } from '@/schemas/artworkSchema';

import ArtworkCard from './ArtworkCard';

type GalleryProps = {
  artworks: Artwork[];
};

const Gallery = ({ artworks }: GalleryProps) => {
  if (artworks.length === 0) {
    return <p>No artworks found.</p>;
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
};

export default Gallery;
