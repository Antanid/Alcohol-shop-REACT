import s from './SecondBottle.module.css';
import Grap from './grap.svg';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let BottleTwo = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
      }, [])

    return (
        <div class="col-lg-4 col-md-12">
            <div data-aos='zoom-in-right' className={s.our_bottle}>
                <img className={s.our__kit} src={Grap} alt=""/>
                    <h3 className={s.our__text}>Grapefruit Jalapeño</h3>
                    <p className={s.our__p}>Light and refreshing, this aperitif is a bright blend of citrus with a subtle kick of fresh jalapeño.</p>
                    <div className={s.but}>
                        <button className={s.our__button}>SHOP NOW</button>
                    </div>
            </div>
        </div>
    );
}
export default BottleTwo;