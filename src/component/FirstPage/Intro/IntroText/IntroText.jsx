import s from './IntroText.module.css';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let IntroH = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
    }, [])

    return (
        <div class="col-lg-6">
            <div data-aos='slide-right' className={s.intro}>
                <h3 className={s.itro__text}>An intro to apéritifs</h3>
            </div>
        </div>
    );
}
export default IntroH;