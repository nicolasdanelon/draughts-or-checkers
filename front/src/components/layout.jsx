import { useState } from "preact/compat";
import { Link, Outlet } from "react-router-dom";
import CreateMatch from "./create-match";

const Layout = () => {
  const [modal, setModal] = useState(false);

  return (
    <div class="bg-blue-100 min-h-screen">
      <div class="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
        <div class="flex items-center justify-between py-2 text-5x1">
          <Link to="/" class="font-bold text-blue-900 text-2xl">
            Damas<span class="text-orange-600" title="gratis :^)">!</span>
          </Link>
          <div class="flex items-center text-gray-500">
            <div
              class="inline-block h-12 w-200 font-bold text-lg mt-5 cursor-pointer"
              onClick={() => setModal(true)}
            >
              Empezar nueva partida
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col pt-32 px-10 pb-4 text-blue-800">
        <Outlet />
      </div>
      {modal && <CreateMatch setModal={setModal} />}
    </div>
  )
}

export default Layout;
