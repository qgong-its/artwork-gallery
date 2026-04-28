import SearchBar from '@/components/ui/SearchBar';

type NavbarProps = {
  onSearch: (query: string) => void;
};

const Navbar = ({ onSearch }: NavbarProps) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Art Gallery</a>
      </div>

      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Navbar;
