import s from './Fiona.module.css';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';


let Fiona = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
      }, [])


    return (
        <div class="col-lg-4 sol-sm-12">
            <div data-aos='slide-up' className={s.susan}>
                <h4 className={s.susan__text}>“I love the flavor of this apéritif — it’s light and lively, and it’s refreshing with seltzer or tonic.”</h4>
                <h3 className={s.susan__h3}>— FIONA</h3>
                <p className={s.susan__p}>Verified Buyer</p>
            </div>
        </div>
    );
}
export default Fiona;