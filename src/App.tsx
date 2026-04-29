import '@/styles/App.css';

import { useState } from 'react';

import Navbar from '@/components/layout/Navbar';
import Gallery from "@/components/ui/Gallery";

import { searchArtworks } from '@/services/artworkApi';
import type { Artwork } from '@/schemas/artworkSchema';

const App = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const results = await searchArtworks(query);
      setArtworks(results);
    } catch (error) {
      setErrorMessage('Could not load artworks.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />

      <main className="container mx-auto p-4">
        {isLoading && <p>Loading...</p>}
        {errorMessage && <p className="text-error">{errorMessage}</p>}


<Gallery artworks={artworks} />
      </main>
    </>
  );
};

export default App;
