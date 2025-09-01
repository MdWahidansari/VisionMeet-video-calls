import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children, ShowSidebar = false }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      {ShowSidebar && (
        <div className="w-60">
          <Sidebar />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
