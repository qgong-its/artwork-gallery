type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get('query');

    if (typeof query !== 'string' || query.trim().length === 0) {
      return;
    }

    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        name="query"
        type="text"
        placeholder="Search artwork"
        className="input input-bordered w-24 md:w-auto"
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
