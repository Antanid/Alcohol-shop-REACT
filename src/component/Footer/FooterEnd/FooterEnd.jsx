import s from './FooterEnd.module.css';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let FooterEnd = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
    }, [])

    return (
        <div class="col-lg-12">
            <div data-aos='slide-left' className={s.policy}>
                <ul className={s.policy__manu}>
                    <li className={s.policy__li}><a href="/">© Haus 2021</a></li>
                    <li className={s.policy__li}><a href="/">Contact Us</a></li>
                    <li className={s.policy__li}><a href="/">Return Policy</a></li>
                    <li className={s.policy__li}><a href="/">Privacy Policy</a></li>
                    <li className={s.policy__li}><a href="/">Terms & Conditions</a></li>
                </ul>
            </div>
        </div>
    );
}
export default FooterEnd;