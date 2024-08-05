import menuBtn from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cartBtn from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import Menu from "./Menu";
function Navbar({ toggleCart, itemNumber, toggleMenu }) {
  return (
    <>
      <nav className=" xl:px-40 p-5 flex items-center">
        <div className="flex items-center gap-5">
          <div className="xl:hidden" onClick={toggleMenu}>
            <img src={menuBtn} alt="menu button" />
          </div>

          <img src={logo} alt="Logo" />
        </div>

        <ul className="hidden font-kumbhSans xl:flex ml-20">
          <li className="py-4 px-6">Collections</li>
          <li className="py-4 px-6">Men</li>
          <li className="py-4 px-6">Women</li>
          <li className="py-4 px-6">About</li>
          <li className="py-4 px-6">Contact</li>
        </ul>

        <div className="flex items-center ml-auto gap-8">
          <div
            className="relative w-10 h-10 flex items-center justify-center"
            onClick={toggleCart}
          >
            {itemNumber != 0 ? (
              <p className="absolute font-bold bg-orange text-white text-[10px] px-2 rounded-lg top-0 right-0">
                {itemNumber}
              </p>
            ) : (
              <p></p>
            )}
            <img className=" h-5 w-5" src={cartBtn} alt="cart button" />
          </div>
          <div className=" w-8 h-auto">
            <img src={avatar} alt="profile picture" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
