import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItems from "./Cart-items"
import { Link } from "react-router-dom";

const cartItems = [
  {
  produtId:464654,
  photo:"https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg",
  name:"ipad",
  price:450,
  quantity:2,
  stock:5
  }
];
const subtotal = 4000;
const shippingCharges = 200;
const tax = Math.floor(subtotal * 0.18);
const discount = 499;
const total = subtotal + shippingCharges + tax;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<Boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() < 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
}, 1000);

    return (timeOutId) => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    }
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
     
        { cartItems.length > 0 ? cartItems.map((i,index )=>  <CartItems cartItem={i} key={index}/>):<h1>Items not added</h1>}
       
      </main>
      <aside>
        <p>Subtotal:₹{subtotal}</p>
        <p>Shipping Charges:₹{shippingCharges}</p>
        <p>
          Tax:<em className="red">₹{tax}</em>
        </p>
        <p>Discount:₹{discount}</p>
        <p>
          Total:<b>₹{total}</b>
        </p>
        <input
          type="text"
          placeholder="coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              {discount} of using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              {" "}
              Invalid Code <VscError />{" "}
            </span>
          ))}
          {
            cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
          }
      </aside>
    </div>
  );
};

export default Cart;
