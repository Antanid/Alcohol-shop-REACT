import s from './ThirdBottle.module.css';
import Citrus from './citrus.jpg';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let BottleThree = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
      }, [])

    return (
        <div class="col-lg-4 col-md-12">
            <div  data-aos='zoom-in-right' className={s.our_bottle}>
                <img className={s.our__kit} src={Citrus} alt=""/>
                    <h3 className={s.our__text}>Citrus Flower</h3>
                    <p className={s.our__p}>A fresh Californian take on the apéritif. Made with crisp lemon and subtle elderflower.</p>
                    <div className={s.but}>
                        <button className={s.our__button}>SHOP NOW</button>
                    </div>
            </div>
        </div>
    );
}
export default BottleThree;