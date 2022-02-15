import s from './StolImg.module.css';
import stolick from './stol.svg';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let StolImg = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
      }, [])


    return (
        <div class="col-lg-8">
            <div data-aos='slide-left' className={s.stol}>
                <img className={s.tittle__stol} src={stolick} alt="table"/>
            </div>
        </div>
    );
}
export default StolImg;