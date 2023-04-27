import { usePokedex } from "../context/PokemonContext";

export const Navbar = () => {
  const { clearType } = usePokedex();
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => clearType}
          >
            Pokedex...
          </a>
        </div>
        <div className="flex-none">
          <div
            onClick={() => {
              document.getElementById("my-graph").click();
            }}
            className="dropdown dropdown-end"
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
