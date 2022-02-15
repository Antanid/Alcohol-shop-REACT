import s from './First.module.css'
import Rectangle from './Rectangle.svg';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';


let Firstt = () => {


  useEffect(() => {
    aos.init({ duration: 600 });
  }, [])

  return (
    <div data-aos='flip-down' class="col-lg-4 col-sm-12 ">
      <div class={s.main}>

        <h4 class={s.main__text}>
          "What makes Haus so special is its incredible flavors."
        </h4>
        <img className={s.Rectangle} src={Rectangle} alt="132"></img>
      </div>
    </div>
  );
}
export default Firstt;
