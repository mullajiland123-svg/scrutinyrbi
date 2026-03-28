import Footer from "./Footer";
import { Header } from "./Header";
import { MegaNav } from "./mega-nav";
import { Topbar } from "./top-bar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      <Header />
      <MegaNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}