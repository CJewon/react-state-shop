import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/Main";
import ProductListPage from "./Pages/ProductList";
import ProductDetailPage from "./Pages/ProductDetail";
import ProductRegisterPage from "./Pages/ProductRegister";
import Layout from "./Components/Layout";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/Auth/Login";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      ></ToastContainer>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route
            path="/products"
            element={<ProductListPage></ProductListPage>}
          ></Route>
          <Route
            path="/product/:id"
            element={<ProductDetailPage></ProductDetailPage>}
          ></Route>
          <Route
            path="/register"
            element={<ProductRegisterPage></ProductRegisterPage>}
          ></Route>
          <Route path="/auth/login" element={<Login></Login>}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
