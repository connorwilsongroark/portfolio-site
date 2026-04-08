import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { headerNavItems } from "./navItems";
import { Logo } from "../branding/Logo";

type NavItemProps = {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  end?: boolean;
};

function NavItem({ to, children, onClick, end }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "group relative inline-flex items-center pb-1 text-md font-medium transition-colors",
          isActive ? "text-text" : "text-text-muted hover:text-text",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <>
          <span>{children}</span>

          <span
            aria-hidden='true'
            className={[
              "pointer-events-none absolute left-0 -bottom-0.5 h-0.5 rounded-full transition-all duration-200",
              isActive ? "w-8 bg-text" : "w-0 bg-text-muted group-hover:w-8",
            ].join(" ")}
          />
        </>
      )}
    </NavLink>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className='sticky top-0 z-40 border-b border-border bg-surface/90'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='flex items-center justify-between gap-4 py-4'>
            <NavLink to='/' className='min-w-0 flex items-center gap-3'>
              <Logo />
            </NavLink>

            <div className='flex items-center gap-2 sm:gap-3'>
              <nav className='hidden flex-nowrap items-center gap-2 md:flex'>
                {headerNavItems.map((item) => (
                  <NavItem key={item.to} to={item.to} end={item.to === "/"}>
                    {item.label}
                  </NavItem>
                ))}
              </nav>
            </div>

            <button
              type='button'
              onClick={toggleMenu}
              className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text transition hover:bg-surface-alt md:hidden'
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls='mobile-site-drawer'
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={[
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden={!isMenuOpen}
      >
        <button
          type='button'
          aria-label='Close navigation menu'
          className={[
            "absolute inset-0 bg-black/40 transition-opacity duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={closeMenu}
        />

        <div
          id='mobile-site-drawer'
          className={[
            "absolute right-0 top-0 flex h-full w-full max-w-xs flex-col border-l border-border bg-surface shadow-xl transition-transform duration-300 ease-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className='flex items-center justify-between border-b border-border px-4 py-4'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.18em] text-text-muted'>
                Menu
              </p>
            </div>

            <button
              type='button'
              onClick={closeMenu}
              className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text transition hover:bg-surface-alt'
              aria-label='Close navigation menu'
            >
              <X size={18} />
            </button>
          </div>

          <nav className='flex flex-1 flex-col gap-4 px-4 py-4'>
            {headerNavItems.map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                end={item.to === "/"}
              >
                {item.label}
              </NavItem>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
