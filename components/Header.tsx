import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedSearchTerm = searchTerm.trim();
    if (trimmedSearchTerm) {
      router.push(`/?search=${encodeURIComponent(trimmedSearchTerm)}`);
    }
  };

  return (
    <header className=" text-sw-light p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-sw-highlight">Movietron</h1>
        </Link>
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search movies"
            className="p-2 rounded-l bg-sw-input-bg text-sw-input-text border border-sw-highlight"
          />
          <button
            type="submit"
            className="bg-sw-highlight text-sw-dark p-2 rounded-r"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
