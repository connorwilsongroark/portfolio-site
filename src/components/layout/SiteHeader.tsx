import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { headerNavItems } from "./navItems";

type NavItemProps = {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function NavItem({ to, children, onClick }: NavItemProps) {
  return (
    <NavLink to={to} onClick={onClick}>
      {children}
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
    if (!isMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Whole header element */}
      <header className='sticky, top-0 z-40 border-b border-border bg-surface/90 backdrop-blur'>
        {/* Contains nav items & logo */}
        <div className='mx-auto max-w-6xl px-4'>
          <div className='flex items-center justify-between gap-4 py-4'>
            {/* Logo */}
            <NavLink to='/' className='min-w-0 flex items-center gap-3'>
              Connor WG
            </NavLink>

            {/* Nav Items */}
            <div className='flex items-center gap-2 sm:gap-3'>
              <nav className='hidden items-center gap-2 md:flex flex-nowrap'>
                {headerNavItems.map((item) => (
                  <NavItem key={item.to} to={item.to}>
                    {item.label}
                  </NavItem>
                ))}
              </nav>
            </div>

            {/* Hamburger menu toggle */}
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

      {/* If the menu is open, show the drawer-style mobile nav menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-50 md:hidden'>
          {/* Full-screen 'button' styled as a clickable overlay to close menu */}
          <button
            type='button'
            aria-label='Close navigation menu'
            className='absolute inset-0 bg-black/40'
            onClick={closeMenu}
          />

          {/* Mobile menu */}
          <div
            id='mobile-site-drawer'
            className='absolute right-0 top-0 flex h-full w-full max-w-xs flex-col border-l border-border bg-surface shadow-xl'
          >
            {/* Top section of hamburger menu */}
            <div className='flex items-center justify-between border-b border-border px-4 py-4'>
              {/* Menu label */}
              <div>
                <p className='text-sm font-semibold uppercase tracking-[0.18em] text-text-muted'>
                  Menu
                </p>
              </div>

              {/* Close button */}
              <button
                type='button'
                onClick={closeMenu}
                className='inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text transition hover:bg-surface-alt'
                aria-label='Close navigation menu'
              >
                <X size={18} />
              </button>
            </div>

            <nav className='flex flex-1 flex-col gap-2 px-4 py-4'>
              {headerNavItems.map((item) => (
                <NavItem key={item.to} to={item.to} onClick={closeMenu}>
                  {item.label}
                </NavItem>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
