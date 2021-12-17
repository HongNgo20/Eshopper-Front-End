import "../../screens/HomeShowRoom.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import shipping from "../picture/shipping.png"

// Components
import Product from "../../components/Product";

//Actions
import { getProducts as listProducts } from "../../redux/actions/productActions.js";

const Men = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
   
    <div className="homescreen">
    <div className="link">
    <Link to="/">WOMEN</Link>
    <Link to="/men">MEN</Link>
    <Link to="/kids">KIDS</Link>
    <Link to="/sale">SALE</Link>
    <Link to="/trends">TRENDS</Link>
     </div>
 <div>
 <img src="https://img.ltwebstatic.com/images3_acp/2021/12/06/1638786155cef00fef7b042d5eed7657993fdfea34.gif" alt="BigCo Inc. logo"/>
</div>
 <br />
      <h2 className="homescreen__title">Men</h2>
      
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
      <div>
          <img src={shipping}/>
        </div>
    </div>
  );
};

export default Men;