import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import HomePage from '@/pages/HomPage';
import SavedGalleryPage from '@/pages/SavedGalleryPage';
import { searchArtworks } from '@/services/artworkApi';
import { useLocalArtworks } from '@/hooks/useLocalArtworks';
import type { Artwork } from '@/schemas/artworkSchema';

type View = 'search' | 'gallery';

function App() {
  const [view, setView] = useState<View>('search');
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { localArtworks, isSaved, toggleArtwork, updateNote } =
    useLocalArtworks();

  const handleSearch = async (query: string) => {
    setView('search');
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
      <Navbar
        onSearch={handleSearch}
        onShowSearch={() => setView('search')}
        onShowGallery={() => setView('gallery')}
      />

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
          onUpdateNote={updateNote}
        />
      )}
    </>
  );
}

export default App;
