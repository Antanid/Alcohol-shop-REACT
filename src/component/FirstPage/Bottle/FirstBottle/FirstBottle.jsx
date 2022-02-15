import s from './FirstBottle.module.css'
import Kit from './kit.svg';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';


let BottleOne = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
      }, [])

    return (
        <div className="col-lg-4 col-md-12">
            <div data-aos='zoom-in-right' className={s.our_bottle}>
            <img className={s.our__kit} src={Kit} alt="1" />
                <h3 className={s.our__text}>The Sampler Kit</h3>
                <p className={s.our__p}>Try a variety of Haus flavors with our customizable four-bottle kit. Each bottle serves 2-3 drinks.</p>
                <div className={s.but}>
                    <button className={s.our__button}>SHOP NOW</button>
                </div>
            </div>
        </div>
    );
}
export default BottleOne;