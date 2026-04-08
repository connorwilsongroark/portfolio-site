export type NavItemConfig = {
  to: string;
  label: string;
};

export const headerNavItems: NavItemConfig[] = [
  { to: "/", label: "Home" },
  { to: "/career", label: "Career" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;
