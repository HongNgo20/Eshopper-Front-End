import "./Navbar.css";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import {useAuth} from "../firebase.js"


const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const currentUser = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>
          HONgER
        </h2>
        <div>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary"  class="fa fa-user-o" aria-hidden="true" >
        👥
        </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="signup">SignUp</Dropdown.Item>
        <Dropdown.Item href="login">Login</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      </div>
       <br/>
   
        <div className ='username'>Welcome! { currentUser?.email } </div>
      </div>
       
      
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
             <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link class="fa fa-home" aria-hidden="true" to="/"></Link>
        </li>
        
        <li></li>
      </ul>
      
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;