import type { Artwork } from '@/schemas/artworkSchema';

type ArtworkCardProps = {
  artwork: Artwork;
  isSaved?: boolean;
  onToggleSave?: (artwork: Artwork) => void;
};

const ArtworkCard = ({
  artwork,
  isSaved = false,
  onToggleSave,
}: ArtworkCardProps) => {
  // const { title, artist_title, image_id } = artwork;

  const imageUrl = artwork.image_id
    ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`
    : 'https://via.placeholder.com/400x300?text=No+Image';

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{artwork.title}</h2>
        <p className="text-sm text-gray-500">{artwork.artist_title}</p>

        {onToggleSave && (
          <div className="card-actions justify-end">
            <button
              type="button"
              className={isSaved ? 'btn btn-secondary' : 'btn btn-primary'}
              onClick={() => onToggleSave(artwork)}
            >
              {isSaved ? 'Remove' : 'Add to Gallery'}
            </button>
          </div>
        )}
      </div>

      <figure className="h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={artwork.title}
          className="object-cover w-full h-full"
        />
      </figure>
    </div>
  );
};

export default ArtworkCard;
