import { ArtworkList } from '@/components/ui/ArtworkList';
import type { Artwork } from '@/schemas/artworkSchema';

type HomePageProps = {
  artworks: Artwork[];
  isLoading: boolean;
  errorMessage: string;
  isSaved: (id: number) => boolean;
  onToggleSave: (artwork: Artwork) => void;
};

const HomePage = ({
  artworks,
  isLoading,
  errorMessage,
  isSaved,
  onToggleSave,
}: HomePageProps) => {
  return (
    <main className="container mx-auto p-4">
      {/* loading */}
      {isLoading && <p className="text-center">Loading...</p>}

      {/* error */}
      {errorMessage && <p className="text-center text-error">{errorMessage}</p>}

      {/* 空状态 */}
      {!isLoading && artworks.length === 0 && !errorMessage && (
        <p className="text-center opacity-70">
          Try searching for artworks (e.g. &quot;Monet&quot;)
        </p>
      )}

      {/* 数据展示 */}
      {!isLoading && artworks.length > 0 && (
        <ArtworkList
          artworks={artworks}
          isSaved={isSaved}
          onToggleSave={onToggleSave}
        />
      )}
    </main>
  );
};

export default HomePage;
