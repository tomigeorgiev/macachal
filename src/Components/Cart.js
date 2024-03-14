import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./cust.css";
import macalogo from "./images/maca.new.png";
import box from "./images/products image2-min.png";
import Footer from "./Footer";
import box2 from "./images/products image.png";
import MacachalRepository from "../data/macachal_repository";

import OrderDone from "./OrderDone";
import { useNavigate } from 'react-router-dom';

const manicureCardsSKU = "MCC1";
const deliveryOptionType = {
  home: "home",
  econtOffice: "econtOffice"
};

const Cart = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [econtOfficeAddress, setEcontOfficeAddress] = useState(null);
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [showOrderForm, setShowOrderForm] = useState(false); // Initially false
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState(deliveryOptionType.home);
  const [econtOfficesInBulgaria, setEcontOfficesInBulgaria] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isOrdering, setIsOrdering] = useState(false);

  const macachalRepository = new MacachalRepository();
  const navigate = useNavigate();

  const createOrder = (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setIsOrdering(true);

    const min = 100000;
    const max = 999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    let addressBasedOnSelectedDeliveryOptionType = getAddressBasedOnSelectedDeliveryOptionType();
    macachalRepository.createOrder({
      id: randomNumber,
      customer_name: name,
      customer_phone: number,
      customer_email: email,
      country: "Bulgaria",
      city: city,
      address: addressBasedOnSelectedDeliveryOptionType,
      payment_method: "Наложен платеж",
      order_total_amount: totalPriceFormatted,
      currency: "BGN",
      products: manicureCardsSKU + ":" + count,
    }).then(() => {
      setOrderPlaced(true);
      setShowOrderForm(false);
      setName("");
      setEmail("");
      setAddress("");
      setNumber("");
      setCity("");
      navigate('/orderPlaced');
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      setIsOrdering(false);
    });

  };

  const getAddressBasedOnSelectedDeliveryOptionType = () => {
    if (deliveryOption === deliveryOptionType.econtOffice) {
      return econtOfficeAddress.value;
    } else {
      return address;
    }
  };

  let itemPrice = 49.9;

  const boxWeight = 150;
  const totalWeight = count * boxWeight;

  let deliveryPrice;
  if (deliveryOption === deliveryOptionType.home) {
    if (totalWeight <= 1000) {
      deliveryPrice = 4.55 * 1.2;
    } else {
      deliveryPrice = 5.42 * 1.2;
    }
  } else if (deliveryOption === deliveryOptionType.econtOffice) {
    if (totalWeight <= 1000) {
      deliveryPrice = 3.67 * 1.2;
    } else {
      deliveryPrice = 4.55 * 1.2;
    }
  }

  const add = () => {
    setCount(count + 1);
  };

  const remove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const removeOfCart = () => {
    localStorage.removeItem("addedToCart");
    window.location.reload();
  };

  let totalPrice = itemPrice * count + deliveryPrice;
  let totalPriceFormatted = totalPrice.toFixed(2);
  let intPrice = itemPrice * count;

  const isItem = () => {
    let item = localStorage.getItem("addedToCart");

    if (item) {
      return (
        <>
          <div className="col-sm-3  ">
            <img src={box} height="300vh" alt="Product" />
          </div>
          <div className="col py-3 markf">
            <h1>
              Manicure Cards <br /> Challenge
            </h1>
            <p className="text-secondary">#MacaChallenge</p>
            <br />
            <h3 className="fw-normal">
              <i>49.90лв / брой</i>
            </h3>
            <div className="d-flex">
              <button
                className="btn text-light par-font-fam rl border"
                onClick={remove}
              >
                -
              </button>
              <input
                className="inpplc text-white border form-control rounded-0  bg-transparent"
                value={count}
                disabled
              ></input>
              <button
                className="btn text-light par-font-fam rr border"
                onClick={add}
              >
                +
              </button>
              <button className="btn btn-danger mx-3" onClick={removeOfCart}>
                {" "}
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>

          <div className="col-md-4 mt-3 par-font-fam">
            <div className="row">
              <div className="col-sm-7 float-left">
                <h5 className="lett markf">
                  <b>Междинна сума: </b>
                </h5>
              </div>
              <div
                className={`col-5 font-large ltr-space mb-2 ${isWideScreen ? " d-flex justify-content-end" : ""
                  } text-right`}
              >
                <h4 className="markf">
                  {(localStorage.getItem("addedToCart") === "added" &&
                    intPrice.toFixed(2)) ||
                    0}{" "}
                  лв
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5 float-left">
                <p className="text-secondary font-large markf">Доставка: </p>
              </div>
              <div className="col-7 markf d-flex justify-content-end">
                <p className="text-secondary d-flex justify-content-end text-end">
                  <i>Доставката се начислява отделно</i>
                </p>
              </div>
            </div>
            <hr />
            <div className="d-block ">
              <div className="row">
                <div className="col-7 markf">
                  <h3>
                    <b>Общо:</b>
                  </h3>
                </div>
                <div className="col-5 d-flex justify-content-end markf">
                  <h3>
                    {localStorage.getItem("addedToCart")
                      ? intPrice.toFixed(2)
                      : 0}{" "}
                    лв
                  </h3>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-4">
                <button
                  className="button-wh-pink float-right markf w-100"
                  onClick={toggleOrderFormVisibility}
                >
                  Поръчай
                </button>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      itemPrice = 0;
      return (
        <>
          <h2 className="markf">
            Количката е празна.{" "}
            <i className="fa-regular fa-face-angry pink"></i>
          </h2>
        </>
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleOrderFormVisibility = () => {
    setShowOrderForm(!showOrderForm);
  };

  useEffect(() => {
    if (orderPlaced) {
      localStorage.removeItem("addedToCart");
      window.location = "/";
    }
  }, [orderPlaced]);

  const customNoOptionsMessage = ({ inputValue }) => (
    <div>Няма намерени офиси за "{inputValue}"</div>
  );

  const customLoadingMessage = ({ _ }) => (
    <div>Зареждане...</div>
  )

  const handleDeliveryOptionChange = async (option) => {
    setAddress("");
    setEcontOfficeAddress(null);
    setDeliveryOption(option);

    if (option === deliveryOptionType.econtOffice && econtOfficesInBulgaria.length === 0) {
      macachalRepository
        .getEcontOfficesInBulgaria()
        .then((data) => {
          let offices = data.offices.map((office) => {
            let officeNameAndFullAddress = `${office.name} (${office.address.fullAddress.trim()})`;

            return {
              value: officeNameAndFullAddress,
              label: officeNameAndFullAddress,
            }
          });

          setEcontOfficesInBulgaria(offices);
        })
        .catch((error) => {
          setDeliveryOption(deliveryOptionType.home);
          console.log(error);
        });
    }
  };

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]+$/;

    if (!name.trim()) errors.name = 'Имената са задължителни.';
    if (!emailRegex.test(email)) errors.email = 'Имейлът не е валиден.';
    if (!phoneRegex.test(number) || number.length < 10) errors.number = 'Телефонният номер не е валиден.';
    if (!city.trim()) errors.city = 'Градът е задължителен.';
    if (deliveryOption === deliveryOptionType.home && !address.trim()) errors.address = 'Адресът е задължителен.';
    if (deliveryOption === deliveryOptionType.econtOffice && econtOfficeAddress === null) errors.econtOfficeAddress = 'Моля изберете офис на Еконт.';

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------
  // -------------------------------------------------------------------------------------

  return (
    <div>
      <nav className="navbar navbar-dark border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="/">
            <img src={macalogo} height="70" alt="Maca Logo" />
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

      {/* --------------------- Сума и бутон ------------------ */}

      <div className="container text-light my-5 py-5">
        <div className="row p-3">{isItem()}</div>
      </div>
      <div className="bg-light">
        <Footer />
      </div>

      <div id="orderForm"
        className={`container orderForm py-5 my-5 ${showOrderForm ? "d-flex justify-content-center" : "d-none"
          }`}>
        <button
          className="btn btn-danger posbtn"
          onClick={toggleOrderFormVisibility}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <form className="w-75 text-light text-center" id="orderFinalForm">
          <h2 className="markf">Поръчка</h2>
          <hr />
          <div className="mb-3">
            <h4 className="markf">
              {count}x <img src={box2} height="40" alt="Product" /> Manicure
              Cards Challenge
            </h4>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Две имена"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
              />
              {formErrors.name && <div className="error-message">{formErrors.name}</div>}
            </div>
            <div className="col">
              <input
                type="tel"
                placeholder="Телефонен Номер"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                id="phone"
                name="phone"
              />
              {formErrors.number && <div className="error-message">{formErrors.number}</div>}
            </div>
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Имейл"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
            />
            {formErrors.email && <div className="error-message">{formErrors.email}</div>}
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Град"
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              id="address"
              name="address"
            />
            {formErrors.city && <div className="error-message">{formErrors.city}</div>}
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <div className="form-check mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="deliveryOption"
                id="homeDelivery"
                value={deliveryOptionType.home}
                checked={deliveryOption === deliveryOptionType.home}
                onChange={() => handleDeliveryOptionChange(deliveryOptionType.home)}
              />
              <label className="form-check-label" htmlFor="homeDelivery">
                До адрес
              </label>
            </div>
            <div className="form-check mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="deliveryOption"
                id="officeDelivery"
                value={deliveryOptionType.econtOffice}
                checked={deliveryOption === deliveryOptionType.econtOffice}
                onChange={() => handleDeliveryOptionChange(deliveryOptionType.econtOffice)}
              />
              <label className="form-check-label" htmlFor="officeDelivery">
                До офис на Еконт
              </label>
            </div>
          </div>
          {deliveryOption === deliveryOptionType.econtOffice ? (
            <div className="mb-3">
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder="Офис на Еконт"
                loadingMessage={customLoadingMessage}
                noOptionsMessage={customNoOptionsMessage}
                onChange={(e) => setEcontOfficeAddress(e)}
                isLoading={econtOfficesInBulgaria.length === 0}
                required="true"
                isClearable="true"
                isSearchable="true"
                name="econtOfficesInBulgaria"
                options={econtOfficesInBulgaria}
              />
              {formErrors.econtOfficeAddress && <div className="error-message">{formErrors.econtOfficeAddress}</div>}
            </div>
          ) : (
            <div className="mb-3">
              <input
                type="text"
                placeholder="Адрес"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                id="address"
                name="address"
              />
              {formErrors.address && <div className="error-message">{formErrors.address}</div>}
            </div>
          )}
          <hr />
          <div className="mb-3">
            <h3 className="markf">Междинна сума: {intPrice.toFixed(2)}лв</h3>
          </div>
          <div className="mb-3">
            <h4 className="markf text-secondary">
              Доставка: {deliveryPrice.toFixed(2)}лв
            </h4>
          </div>
          <div className="mb-3">
            <h2 className="markf">Обща сума: {totalPriceFormatted}лв</h2>
          </div>
          <hr />

          <button className="btn button-order markf" onClick={createOrder} disabled={isOrdering}>
            {isOrdering ? 'Пренасочване...' : 'Поръчай'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cart;
