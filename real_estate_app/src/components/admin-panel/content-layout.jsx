import { Navbar } from "@/components/admin-panel/navbar";
import { Footer } from "./footer";

export function ContentLayout({ title, children }) {
  return (
    <div>
      <Navbar title={title} />
      <div className="container py-8 px-1 sm:px-2">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
