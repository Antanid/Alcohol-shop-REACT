import s from './Drop.module.css';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let Drop = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
    }, [])

    return (
        <div class="col-lg-2 col-sm-4">
            <div data-aos='slide-left' className="explore">
                <h5 className={s.explore__text}>DROP US A LINE</h5>
                <ul className={s.explore__foot}>
                    <li className={s.explore__footli}><a href="/">HELLO@DRINK.HAUS</a>
                    </li>
                    <li className={s.explore__footli}><a href="/">PRESS@DRINK.HAUS</a></li>
                    <li className={s.explore__footli}><a href="/">PARTNERSHIPS@DRINK.HAUS</a></li>
                    <li className={s.explore__footli}><a href="/">JOBS@DRINK.HAUS</a></li>
                    <li className={s.explore__footli}><a href="/">WHOLESALE@DRINK.HAUS</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Drop;