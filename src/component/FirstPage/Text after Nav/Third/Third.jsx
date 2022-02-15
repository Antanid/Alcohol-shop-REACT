import s from './Third.module.css';
import Appetit from './appetit.svg';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let ThirdText = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
      }, [])

    return (
        <div class="col-lg-4 col-sm-12">
            <div data-aos='flip-down' className={s.main}>

                <h4 className={s.main__text}>
                    “Cleaner, responsibly sourced, and lower in alcohol.”
                </h4>
                <img className={s.appetit} src={Appetit} alt=""/>

            </div>
        </div>
    );
}
export default ThirdText;