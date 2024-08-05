/* eslint-disable react/prop-types */
import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";
import prevBtn from "../assets/icon-previous.svg";
import nextBtn from "../assets/icon-next.svg";
import cartBtn from "../assets/icon-cart.svg";
import Cart from "./Cart";
import Products from "./Products";
import { useState } from "react";

const images = [image1, image2, image3, image4];

/////////////////////Functions////////////////////
function Body({
  showCart,
  count,
  increaseCount,
  decreaseCount,
  itemNumber,
  setItemNumber,
}) {
  const [imagecount, setImage] = useState(0);

  function nextImage() {
    setImage((imagecount) => (imagecount + 1) % 4);
    console.log(imagecount);
  }
  function prevImage() {
    setImage((imagecount) => (imagecount - 1 + 4) % 4);
    console.log(imagecount);
  }

  function addToCart() {
    setItemNumber((itemNumber) => (itemNumber = count));
  }

  //////////////////////////////////////////////////////
  return (
    <>
      <Cart
        showCart={showCart}
        itemNumber={itemNumber}
        setItemNumber={setItemNumber}
      />
      <div className="w-full xl:hidden relative">
        <button
          onClick={prevImage}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white px-4 py-3 rounded-full"
        >
          <img src={prevBtn} alt="" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white px-4 py-3 rounded-full"
        >
          <img src={nextBtn} alt="" />
        </button>

        <div className="overflow-hidden w-full h-[18.75rem]">
          <img
            src={images[imagecount]}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className=" xl:flex xl:px-40 xl:justify-around xl:items-center">
        <Products />

        <div className="font-kumbhSans p-8 xl:w-[30rem]">
          <p className="text-[0.75rem] font-bold text-darkGrayishBlue tracking-widest mb-2">
            SNEAKER COMPANY
          </p>
          <p className="font-bold text-[1.8rem] xl:text-[44px] mb-4 leading-tight">
            Fall Limited Edition Sneakers
          </p>
          <p className="text-darkGrayishBlue text-[14px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, theyll withstand everything
            the weather can offer.
          </p>

          <div className=" mt-4 flex items-center">
            <p className="font-bold text-[30px] mr-5">$125.00</p>
            <p className="bg-black text-white font-bold px-3 py-1 rounded-lg">
              50%
            </p>
            <p className="ml-auto font-bold text-darkGrayishBlue line-through">
              $250.00
            </p>
          </div>

          <div className="xl:flex xl:justify-between xl:mt-5">
            <div className=" mt-4 flex bg-lightGrayishBlue h-[55px] items-center justify-between rounded-md px-5 xl:w-1/3 font-bold">
              <p className="text-orange" onClick={decreaseCount}>
                -
              </p>
              <p>{count}</p>
              <p className="text-orange" onClick={increaseCount}>
                +
              </p>
            </div>

            <div
              className=" bg-orange mt-4 flex h-[55px] items-center justify-center rounded-md px-5 font-bold gap-3 xl:w-1/2"
              onClick={addToCart}
            >
              <img className="" src={cartBtn} alt="add to cart" />
              <p>Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
