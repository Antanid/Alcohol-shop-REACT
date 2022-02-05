import logo from './logo.svg';
import s from './App.module.css';
import Start from './component/Start/Start';
import Menu from './component/Nav/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import FirstPage from './component/FirstPage/FirstPage'
import Shop from './component/Shop/Shop';
import Membership from './component/MEMBERSHIP/Membership';
import OurStory from './component/OurStory/OurStory';
import Newsletter from './component/Newsletter/Newsletter';
import Account from './component/ACCOUNT/Account';
import Cart from './component/CART/Cart';



function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className={s.wrapper}>
          <Start />
          <Menu />
          <Routes>
            <Route path='/' element={<FirstPage />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/MemberShip' element={<Membership/>} />
            <Route path='/OurStory' element={<OurStory />} />

            <Route path='/Newsletter' element={<Newsletter />} />
            <Route path='/Account' element={<Account/>} />
            <Route path='/Cart' element={<Cart />} />
          </Routes>
          <Footer myEm={props.State.myEm} EmailCheck={props.EmailCheck} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
