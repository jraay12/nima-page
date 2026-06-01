import { Outlet } from "react-router";
import Header from "../component/Header";

const PublicLayout = () => {
  return (
    <div className="min-h-screen ">
      <Header />

      <main >
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;