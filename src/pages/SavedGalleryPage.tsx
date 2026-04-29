import { ArtworkList } from "@/components/ui/ArtworkList";
import type { Artwork } from "@/schemas/artworkSchema";

type SavedGalleryPageProps = {
  savedArtworks: Artwork[];
  isSaved: (artworkId: number) => boolean;
  onToggleSave: (artwork: Artwork) => void;
};

export function SavedGalleryPage({
  savedArtworks,
  isSaved,
  onToggleSave,
}: SavedGalleryPageProps) {
  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">My Gallery</h1>

      <ArtworkList
        artworks={savedArtworks}
        isSaved={isSaved}
        onToggleSave={onToggleSave}
      />
    </main>
  );
}
