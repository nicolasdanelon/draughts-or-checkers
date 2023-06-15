import { Link, Outlet } from "react-router-dom";

const Layout = () => (
  <div className="bg-blue-100 min-h-screen">
    <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
      <div className="flex items-center justify-between py-2 text-5x1">
        <Link to="/" className="font-bold text-blue-900 text-2xl">
          Damas<span className="text-orange-600">!</span>
        </Link>
        <div className="flex items-center text-gray-500">
          <Link to="/game" class="inline-block h-12 w-200 font-bold text-lg mt-5">
            Empezar nueva partida
          </Link>
        </div>
      </div>
    </div>
    <div className="flex flex-col pt-32 px-10 pb-4 text-blue-800">
      <Outlet />
    </div>
  </div>
)

export default Layout;
