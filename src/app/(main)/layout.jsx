import Header from "@/components/common/header";
import { SiteFooter } from "@/components/common/site-footer";
import "@/css/embla.css";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
};
export default MainLayout;
