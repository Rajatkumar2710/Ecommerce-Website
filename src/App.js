import logo from "./logo.svg";
import "./App.css";
import HomePage from "./customer/Pages/HomePage/HomePage";
import ProductsPage from "./customer/Pages/ProductsPage";
import ProductDetails from "./customer/Components/ProductDetails/ProductDetails";
import ProductDetailsPage from "./customer/Pages/ProductDetailsPage";
import Cart from "./customer/Components/Cart/Cart";
import Checkout from "./customer/Components/CheckOut/CheckOut";
import Order from "./customer/Components/Order/Order";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      {/* <ProductsPage /> */}
      {/* <ProductDetailsPage /> */}
      {/* <Cart /> */}
      {/* <Checkout /> */}
      <Order />
    </>
  );
}
export default App;
