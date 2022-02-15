import s from './Social.module.css';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let Social = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
    }, [])

    return (
        <div class="col-lg-2 col-sm-4">
            <div data-aos='slide-left' className={s.explore}>
                <h5 className={s.explore__text}>FOLLOW</h5>
                <ul className={s.explore__foot}>
                    <li className={s.explore__footli}><a href="/">INSTAGRAM</a>
                    </li>
                    <li className={s.explore__footli}><a href="/">SPOTIFY</a></li>
                    <li className={s.explore__footli}><a href="/">TWITTER</a></li>
                    <li className={s.explore__footli}><a href="/">FACEBOOK</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Social;