import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import HomePage from '@/pages/HomPage';
import { searchArtworks } from '@/services/artworkApi';
import { useLocalArtworks } from '@/hooks/useLocalArtworks';
import type { Artwork } from '@/schemas/artworkSchema';

function App() {
  // 搜索结果
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 本地收藏（gallery）
  const { isSaved, toggleArtwork } = useLocalArtworks();

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
    </>
  );
}

export default App;
