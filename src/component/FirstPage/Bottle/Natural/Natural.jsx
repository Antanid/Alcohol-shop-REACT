import s from './Natural.module.css';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let MadeNatural = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
      }, [])

    return (
        <div class="col-lg-12 col-sm-12">
            <div data-aos='slide-right' className={s.made}>
                <div className={s.made__textdiv}>
                    <h2 className={s.made__text}>Made with natural <br></br>ingredients, nothing fake</h2>
                </div>
                <div className={s.made_p}>
                    <p className={s.made__p}>Shop All Flavors</p>
                </div>
            </div>
        </div>
    );
}
export default MadeNatural;