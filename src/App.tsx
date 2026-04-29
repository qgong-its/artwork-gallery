import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import HomePage from '@/pages/HomPage';
import SavedGalleryPage from '@/pages/SavedGalleryPage';
import { searchArtworks } from '@/services/artworkApi';
import { useLocalArtworks } from '@/hooks/useLocalArtworks';
import type { Artwork } from '@/schemas/artworkSchema';

function App() {
  // 搜索结果
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

<<<<<<< Updated upstream
  // 本地收藏（gallery）
  const { localArtworks, isSaved, toggleArtwork } = useLocalArtworks();
||||||| Stash base
  const { localArtworks, isSaved, toggleArtwork } = useLocalArtworks();
=======
  const { localArtworks, isSaved, toggleArtwork, updateNote } =
    useLocalArtworks();
>>>>>>> Stashed changes

  // 搜索逻辑
  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const results = await searchArtworks(query);
      setArtworks(results);
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to load artworks.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />

      <HomePage
        artworks={artworks}
        isLoading={isLoading}
        errorMessage={errorMessage}
        isSaved={isSaved}
        onToggleSave={toggleArtwork}
      />

<<<<<<< Updated upstream
      <SavedGalleryPage
        savedArtworks={localArtworks}
        isSaved={isSaved}
        onToggleSave={toggleArtwork}
||||||| Stash base
      {view === 'search' && (
        <HomePage
          artworks={artworks}
          isLoading={isLoading}
          errorMessage={errorMessage}
          isSaved={isSaved}
          onToggleSave={toggleArtwork}
        />
      )}

      {view === 'gallery' && (
        <SavedGalleryPage
          savedArtworks={localArtworks}
          isSaved={isSaved}
          onToggleSave={toggleArtwork}
        />
      )}
=======
      {view === 'search' && (
        <HomePage
          artworks={artworks}
          isLoading={isLoading}
          errorMessage={errorMessage}
          isSaved={isSaved}
          onToggleSave={toggleArtwork}
        />
      )}

      {view === 'gallery' && (
        <SavedGalleryPage
          savedArtworks={localArtworks}
          isSaved={isSaved}
          onToggleSave={toggleArtwork}
        />
      )}

      <SavedGalleryPage
        savedArtworks={localArtworks}
        isSaved={isSaved}
        onToggleSave={toggleArtwork}
        onUpdateNote={updateNote}
>>>>>>> Stashed changes
      />
    </>
  );
}

export default App;
