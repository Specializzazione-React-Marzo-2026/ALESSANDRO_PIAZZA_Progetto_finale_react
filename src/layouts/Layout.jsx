import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Layout() {
  const data = useLoaderData();
  const genres = Array.isArray(data) ? data : [];
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Navbar />

      {/* Mobile hamburger bar — hidden on md+ */}
      <div className="md:hidden sticky top-[4.2rem] z-40 flex items-center gap-3 border-b border-white/8 bg-[rgba(5,10,21,0.97)] px-4 py-2.5">
        <button
          onClick={() => setDrawerOpen(true)}
          aria-label="Apri menu generi"
          className="flex items-center gap-2 rounded-full border border-white/12 bg-[#0d1b35] px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#7dd3fc] transition hover:border-[#7dd3fc]/35 hover:text-white"
        >
          <FaBars className="text-sm" />
          Generi
        </button>
      </div>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Panel */}
          <aside className="absolute left-0 top-0 h-full w-72 overflow-y-auto border-r border-white/10 bg-[#050a15] px-6 py-6 shadow-[4px_0_40px_rgba(0,0,0,0.5)]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-orbitron text-lg font-black uppercase tracking-[0.2em] text-white">
                Generi
              </h2>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Chiudi menu"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-[#0d1b35] text-[#94a3b8] transition hover:border-[#fef08a]/30 hover:text-[#fef08a]"
              >
                <FaXmark />
              </button>
            </div>
            <ul className="space-y-4 pb-6">
              {genres.map((genre) => (
                <li key={genre.id} className="overflow-hidden">
                  <Link
                    to={`/genre/${genre.slug}`}
                    onClick={() => setDrawerOpen(false)}
                    className="detail-link"
                    data-text={genre.name}
                  >
                    {genre.name}
                    <span className="detail-link__hover" aria-hidden="true">
                      {genre.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}

      <section className="flex gap-0">
        {/* Desktop sidebar — hidden on mobile */}
        <div className="hidden md:block">
          <Sidebar genres={genres} />
        </div>
        <div className="flex-1 min-w-0">
          <Outlet />
        </div>
      </section>
      <Footer />
    </>
  );
}
