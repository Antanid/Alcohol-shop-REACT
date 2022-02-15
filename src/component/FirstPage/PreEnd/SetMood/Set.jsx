import s from './Set.module.css';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let Set = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
      }, [])
      
    return (
        <div data-aos='zoom-out-right' className={s.mood}>
            <h3 className={s.mood__text}>Set the mood</h3>
            <h5 className={s.mood__h5}>Curated playlists from Woody + Helena, plus some of our <br /> friends and favorite brands.</h5>
            <div className={s.knopka}>
                <button className={s.mood__butt}>SPOTIFY</button>
            </div>
        </div>
    );
}
export default Set;