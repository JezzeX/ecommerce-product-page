/* eslint-disable react/prop-types */
import image1 from "../assets/image-product-1.jpg";
import deleteBtn from "../assets/icon-delete.svg";
function Cart({ showCart, itemNumber, setItemNumber }) {
  function deleteItem() {
    setItemNumber((itemNumber) => (itemNumber = 0));
  }
  return (
    <>
      <div
        className={`${
          showCart ? "block" : "hidden"
        } w-[360px] z-10 bg-white h-[260px] absolute top-[14rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg font-kumbhSans font-bold xl:left-auto xl:right-0 xl:shadow-lg`}
      >
        <p className="border-b-2 p-4">Cart</p>
        {itemNumber == 0 ? (
          <p className="  text-center pt text-darkGrayishBlue pt-16">
            Your cart is empty.
          </p>
        ) : (
          <div>
            <div className="flex p-5 mt-4 justify-between items-center">
              <div className="w-10 h-10 rounded-md overflow-hidden">
                <img src={image1} alt="" />
              </div>

              <div>
                <p className="text-darkGrayishBlue font-normal">
                  Fall Limited Edition Sneakers
                </p>
                <p>
                  <span className="text-darkGrayishBlue font-normal mr-3">
                    $125.00 * {itemNumber}
                  </span>
                  ${125.0 * itemNumber}
                </p>
              </div>
              <div onClick={deleteItem}>
                <img src={deleteBtn} alt="" />
              </div>
            </div>
            <div className="bg-orange mx-5 py-2 rounded-md">
              <p className="text-center">Checkout</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
