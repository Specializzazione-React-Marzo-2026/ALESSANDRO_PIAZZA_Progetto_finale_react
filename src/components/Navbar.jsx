import { Link, useNavigate } from "react-router";
import routes from "../router/routes";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FaArrowRightToBracket, FaArrowRightFromBracket, FaUser } from "react-icons/fa6";

export default function Navbar() {
  const [slug, setSlug] = useState("");

  const handleChange = (e) => {
    setSlug(e.target.value);
  };

  const navigate = useNavigate();

  const { user, profile, signOut } = useContext(UserContext);

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && slug.trim()) {
      navigate(`/search/${slug.trim()}`);
      setSlug("");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#fef08a]/10 bg-[#050a15]/90 text-white backdrop-blur-md shadow-lg shadow-black/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          className="font-orbitron text-2xl font-bold tracking-[0.25em] text-[#fef08a] drop-shadow-[0_0_8px_rgba(254,240,138,0.4)] transition-all hover:text-[#facc15] hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]"
          to={routes.home}
        >
          REHACKTOR
        </Link>

        {/* Search */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            className="w-64 rounded-full border border-[#3b82f6]/30 bg-[#0d1b35]/80 px-4 py-2 text-sm text-white placeholder-[#64748b] transition-all focus:w-80 focus:border-[#fef08a]/60 focus:ring-2 focus:ring-[#fef08a]/20 focus:outline-none"
            placeholder="Search games..."
            value={slug}
            onChange={handleChange}
            onKeyDown={handleSearch}
          />
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-5 text-sm font-medium">
          <Link
            className="text-[#94a3b8] transition-colors hover:text-[#fef08a]"
            to={routes.home}
          >
            Home
          </Link>

          {!user ? (
            <>
              <Link
                className="text-[#94a3b8] transition-colors hover:text-[#fef08a]"
                to={routes.login}
              >
                Login
              </Link>
              <Link
                className="rounded-full bg-[#fef08a]/10 px-4 py-1.5 text-[#fef08a] ring-1 ring-[#fef08a]/30 transition-all hover:bg-[#fef08a]/20 hover:ring-[#fef08a]/50"
                to={routes.register}
              >
                Register
              </Link>
            </>
          ) : (
            <>
              {profile?.username && (
                <span className="flex items-center gap-1.5 text-[#94a3b8]">
                  <FaUser className="text-[#fef08a]/70" />
                  {profile.username}
                </span>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 rounded-full bg-red-500/10 px-4 py-1.5 text-red-400 ring-1 ring-red-500/30 transition-all hover:bg-red-500/20 hover:text-red-300 hover:ring-red-500/50"
              >
                <FaArrowRightFromBracket className="text-xs" />
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
