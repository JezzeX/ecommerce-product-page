import { useState } from "react";
import image1 from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";

function Products() {
  const [productImg, setProductImg] = useState(image1);

  function changeProductImg(e) {
    setProductImg((productImg) => (productImg = e.target.src));
  }

  const images = [image1, image2, image3, image4];
  return (
    <>
      <div className="ml-5 mt-20 hidden xl:block">
        <div className=" w-[460px] h-[460px] rounded-xl overflow-hidden mb-10">
          <img src={productImg} alt="" />
        </div>
        <div className="flex w-[460px] h-[92px] justify-between">
          <img
            onClick={changeProductImg}
            className="rounded-lg"
            src={image1}
            alt=""
          />
          <img
            onClick={changeProductImg}
            className="rounded-lg"
            src={image2}
            alt=""
          />
          <img
            onClick={changeProductImg}
            className="rounded-lg"
            src={image3}
            alt=""
          />
          <img
            onClick={changeProductImg}
            className="rounded-lg"
            src={image4}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Products;
