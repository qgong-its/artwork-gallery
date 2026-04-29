import { ArtworkList } from '@/components/ui/ArtworkList';
import type { Artwork } from '@/schemas/artworkSchema';

type SavedGalleryPageProps = {
  savedArtworks: Artwork[];
  isSaved: (artworkId: number) => boolean;
  onToggleSave: (artwork: Artwork) => void;
  onUpdateNote: (artworkId: number, note: string) => void;
};

const SavedGalleryPage = ({
  savedArtworks,
  isSaved,
  onToggleSave,
  onUpdateNote,
}: SavedGalleryPageProps) => {
  return (
    <section className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">My Gallery</h1>

      {savedArtworks.length === 0 ? (
        <p className="text-center opacity-70">No saved artworks yet.</p>
      ) : (
        <ArtworkList
          artworks={savedArtworks}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
          onUpdateNote={onUpdateNote}
          showNote
        />
      )}
    </section>
  );
};

export default SavedGalleryPage;
