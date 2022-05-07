import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/HomePage/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/CommonPage/Header/Header';
import Footer from './Pages/CommonPage/Footer/Footer';
import Blog from './Pages/Blog/Blog';
import Banner from './Pages/HomePage/Banner/Banner';
import Login from './Pages/SecretPage/Login/Login';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/SecretPage/Register/Register';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/SecretPage/RequireAuth/RequireAuth';
import Products from './Pages/HomePage/Home/products/Products';
import SingleProduct from './Pages/HomePage/SingleProduct/SingleProduct';
import ManageInventory from './Pages/SecretPage/ManageInventory/ManageInventory';
import AddItem from './Pages/SecretPage/AddItem/AddItem';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/Banner' element={<Banner></Banner>}></Route>
        <Route path='/products/:id' element={
          <RequireAuth>
            <SingleProduct></SingleProduct>
          </RequireAuth>
        }></Route>
        <Route path='/ManageInventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/AddItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
      
    </div>
  );
}

export default App;
