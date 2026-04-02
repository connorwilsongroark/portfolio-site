export type NavItemConfig = {
  to: string;
  label: string;
};

export const headerNavItems: NavItemConfig[] = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;
