import s from './Kust.module.css';
import Kust from './kust.jpg';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let Kustt = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
      }, [])

    return (
        <div class="col-lg-6">
            <div data-aos='slide-left' className="kust">
                <img className={s.kust___img} src={Kust} alt="/" />
            </div>
        </div>
    );
}
export default Kustt;