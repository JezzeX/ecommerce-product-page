import closeBtn from "../assets/icon-close.svg";

function Menu({ showMenu, toggleMenu }) {
  return (
    <>
      <div className={showMenu ? "absolute w-full h-full" : "hidden"}>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="absolute left-0 top-0 z-20 w-2/3 h-full bg-white pt-5">
          <img
            onClick={toggleMenu}
            className="ml-6 mb-10"
            src={closeBtn}
            alt=""
          />
          <ul className="font-kumbhSans font-bold deco">
            <li className="py-4 px-6">Collections</li>
            <li className="py-4 px-6">Men</li>
            <li className="py-4 px-6">Women</li>
            <li className="py-4 px-6">About</li>
            <li className="py-4 px-6">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Menu;
