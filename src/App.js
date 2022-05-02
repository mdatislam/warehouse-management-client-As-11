import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/HomePage/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/CommonPage/Header/Header';
import Footer from './Pages/CommonPage/Footer/Footer';
import Services from './Pages/HomePage/Services/Services';
import Blog from './Pages/Blog/Blog';
import Banner from './Pages/HomePage/Banner/Banner';
import Login from './Pages/SecretPage/Login/Login';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/SecretPage/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Services' element={<Services></Services>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/Banner' element={<Banner></Banner>}></Route>
        <Route path='/Services' element={<Services></Services>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
