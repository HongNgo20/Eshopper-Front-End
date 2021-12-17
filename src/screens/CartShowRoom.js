import "./CartShowRoom.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
// Components
import CartItem from "../components/CartShow";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartShowRoom = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  function handleToken(token,address){
    console.log({token,address})

  }

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
          <StripeCheckout
            stripeKey="pk_test_51K1mrwIBAXdiUgrYGFtRG9NZ1IXKtEenY5jLbe6D3mnpIQICiRntPOdiwsj3ISOxjPL3CKFpXnos43C2k7ZjVvm100Wacr7Uym"
            token={handleToken}
            name="Check-out is in process"
            billingAddress
            shippingAddress
            amount={getCartSubTotal()*100}
      />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartShowRoom;