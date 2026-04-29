import type { Artwork } from '@/schemas/artworkSchema';

type ArtworkCardProps = {
  artwork: Artwork;
};

const ArtworkCard = ({ artwork }: ArtworkCardProps) => {
  const { title, artist_title, image_id } = artwork;

  const imageUrl = image_id
    ? `https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`
    : 'https://via.placeholder.com/400x300?text=No+Image';

  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-gray-500">{artist_title}</p>
      </div>

      <figure className="h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </figure>
    </div>
  );
};

export default ArtworkCard;
