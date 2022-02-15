import Stakann from './stakan.svg';
import s from './IntroImg.module.css';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let Stakan = () => {
    
    useEffect(() => {
        aos.init({ duration: 600 });
      }, [])

    return (
        <div class="col-lg-12">
            <div data-aos='flip-up' class="stakan">
                <img className={s.stak}src={Stakann} alt="stakan" />
            </div>
        </div>
    );
}
export default Stakan;