import s from './WeDo.module.css';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let WeDo = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
      }, [])

    return (
        <div class="col-lg-6">
            <div data-aos='slide-right' className={s.producers}>
                <h2 className={s.producers__text}>We do things differently than most producers</h2>
                <p className={s.producers__h3}>Our flavors are derived from real fruits, herbs, and botanicals, not ingredients from a lab. We leave out the artificial ingredients and excess sugar, and tell you what’s inside. It’s a better way to drink.</p>
                <h5 className={s.producers__h5}><a href="/">LEARN MORE</a></h5>
            </div>
        </div>
    );
}
export default WeDo