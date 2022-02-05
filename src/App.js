import logo from './logo.svg';
import s from './App.module.css';
import Start from './component/Start/Start';
import Menu from './component/Nav/Menu';
import MadeNatural from './component/Bottle/Natural/Natural';

import AllRev from './component/Reviews/AllRev';
import Producer from './component/Producer/Producer';
import PreEnd from './component/PreEnd/PreEnd';
import Footer from './component/Footer/Footer';
import Section from './component/Section+comp/sec';

function App() {
  return (
    <div className="App">
      <div className={s.wrapper}>
        <Start />
        <Menu />
        <Section />
        <AllRev />
        <Producer />
        <PreEnd />
        <Footer />
      </div>
    </div>
  );
}

export default App;
