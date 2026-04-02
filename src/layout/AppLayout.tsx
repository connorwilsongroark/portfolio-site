import { useOutlet } from "react-router-dom";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";
import { headerNavItems } from "../components/layout/navItems";
import { DirectionalRouteTransition } from "../components/routing/DirectionalRouteTransition";

export function AppLayout() {
  const outlet = useOutlet();

  return (
    <div className='min-h-screen bg-background text-text flex flex-col'>
      <SiteHeader />
      <main className='relative flex-1 overflow-hidden'>
        <DirectionalRouteTransition
          items={headerNavItems}
          mobileBreakpoint='md'
        >
          {outlet}
        </DirectionalRouteTransition>
      </main>
      <SiteFooter />
    </div>
  );
}
