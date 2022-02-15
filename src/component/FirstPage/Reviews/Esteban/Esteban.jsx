import s from "./Esteban.module.css";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';


let Esteban = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
    }, [])

    return (
        <div class="col-lg-4 col-md-12">
            <div data-aos='slide-up' className={s.susan}>
                <h4 className={s.susan__text}>“It’s delicious, and unique. I love everything from the packaging, to the flavors.”</h4>
                <h3 className={s.susan__h3}>— ESTEBAN</h3>
                <p className={s.susan__p}>Verified Buyer</p>
            </div>
        </div>
    );
}
export default Esteban;