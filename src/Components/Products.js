import React from "react";
import { useState } from "react";

import macalogo from "./images/maca.new.png";
import box from "./images/products image2-min.png";

import img1 from "./images/2-02.png";
import img2 from "./images/1.png";
import img3 from "./images/3.png";

import Footer from "./Footer";
import CartComponent from "./CartComponent";

const Products = () => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [isActivated, setIsActivated] = useState(false);
  const [selectedImage, setSelectedImage] = useState(box);

  let cartItem = document.getElementById("basket");
  const addToCart = () => {
    localStorage.setItem("addedToCart", "added");
    setAddedToCart(true);
    setIsActivated(true);

    const basket = document.getElementById("basket");
    const pinkDot = document.createElement("p");

    pinkDot.classList.add("num");
    basket.appendChild(pinkDot);
    basket.classList.add("scaled");

    setTimeout(() => {
      basket.classList.remove("scaled");
    }, 300);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <div>
      <nav className="navbar navbar-dark border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="/">
            <img src={macalogo} height="70" />
          </a>
          <form className="d-flex mx-4 right">
            <div className="li">
              <a
                className="navbar-brand navbar-branda mx-3 markf"
                href="/products"
              >
                Продукти
              </a>
            </div>
            <div className="li">
              <a
                className="navbar-brand navbar-branda mx-3 markf"
                href="/about"
              >
                За нас
              </a>
            </div>
          </form>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <div class="container text-light my-3 py-5">
        <div class="row p-3">
          <div
            className={`col mx-5 text-center ${
              selectedImage === box ? "" : "small-image"
            }`}
          >
            <img src={selectedImage} height="350vh" className="mb-3 rounded" />
            <hr />
            <div className="row justify-content-center mb-4">
              <div className="col-3 text-center br mx-1 py-1">
                <img
                  src={box}
                  height="80"
                  onClick={() => handleImageClick(box)}
                />
              </div>
              <div className="col-3 text-center br mx-1 py-1">
                <img
                  src={img2}
                  height="80"
                  onClick={() => handleImageClick(img2)}
                />
              </div>
              <div className="col-3 text-center mx-1 py-1">
                <img
                  src={img3}
                  height="80"
                  onClick={() => handleImageClick(img3)}
                />
              </div>
            </div>
          </div>
          <div class="col mx-3">
            <h1 className="markf mb-4">Manicure Cards Challenge</h1>
            <div className="par-font-fam h5 mb-4 lhgh">
              Manicure Cards Challenge е игра за тези, които никога не знаят
              какво искат. Майсторът подава картите с гръб към клиента, той
              тегли и <b className="pink markf">BOOM!</b> Имате си нов
              маникюр... почти. По този повод сме измъдрили:
            </div>
            <ul className="par-font-fam liststyle h5 mb-3">
              <li>6 рунда: Дължина, Форма, Дизайн, Декорация, Цвят, Топ</li>
              <li>26 ръчно рисувани карти</li>
              <li>Над 1344 комбинации</li>
            </ul>
            <p className="par-font-fam h5">И даже са изцяло на български!</p>
            <div className="row mt-4">
              <h4 className="col markf">Цена:</h4>
              <h4 className="col markf text-end">49.90лв</h4>
            </div>
            <hr />
            <button
              onClick={addToCart}
              className={`button-pink-wh font-lm markf ${
                isActivated ? "activated" : ""
              }`}
              disabled={addedToCart}
            >
              {addedToCart ? `Добавено ✔` : "Добави в количката"}
            </button>
          </div>
        </div>
      </div>
      <CartComponent />
      <footer className="bg-light mb-0">
        <Footer />
      </footer>
    </div>
  );
};

export default Products;
