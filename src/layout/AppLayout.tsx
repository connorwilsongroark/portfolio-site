import { AnimatePresence, motion } from "motion/react";
import { useOutlet, useLocation } from "react-router-dom";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";

export function AppLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className='min-h-screen bg-background text-text flex flex-col'>
      <SiteHeader />
      <main className='flex-1'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className='h-full'
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
    </div>
  );
}
