import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/Main";
import ProductListPage from "./Pages/ProductList";
import ProductDetailPage from "./Pages/ProductDetail";
import ProductRegisterPage from "./Pages/ProductRegister";
import Layout from "./Components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route
            path="/products"
            element={<ProductListPage></ProductListPage>}
          ></Route>
          <Route
            path="/products/:id"
            element={<ProductDetailPage></ProductDetailPage>}
          ></Route>
          <Route
            path="/register"
            element={<ProductRegisterPage></ProductRegisterPage>}
          ></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
