import SearchBar from '@/components/ui/SearchBar';

type NavbarProps = {
  onSearch: (query: string) => void;
  onShowSearch: () => void;
  onShowGallery: () => void;
};

const Navbar = ({ onSearch, onShowSearch, onShowGallery }: NavbarProps) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1 gap-2">
        <button
          type="button"
          className="btn btn-ghost text-xl"
          onClick={onShowSearch}
        >
          Art Gallery
        </button>

        <button type="button" className="btn btn-ghost" onClick={onShowGallery}>
          My Gallery
        </button>
      </div>

      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Navbar;
