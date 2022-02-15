import s from './Second.module.css';
import Ny from './NY.svg';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let SecondText = () => {
    useEffect(() => {
        aos.init({ duration: 600 });
      }, []) 
    return (
        <div className="col-lg-4 col-sm-12">
            <div data-aos='flip-down' className={s.main}>
                <h4 className={s.main__text}>
                    “For the wine or cocktail lover who’s tried it all and wants something new and refreshing.”
                </h4>
                <img className={s.ny} src={Ny} alt=""/>
            </div>
        </div>
    );
};

export default SecondText;