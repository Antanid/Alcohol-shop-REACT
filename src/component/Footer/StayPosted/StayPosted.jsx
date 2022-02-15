import s from './StayPosted.module.css';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let StayPosted = (props) => {

    useEffect(() => {
        aos.init({ duration: 600 });
    }, [])

    let ClickBut = () => {
        return(
            alert('Hello')
        )
    };

    return (
        <div class="col-lg-6 col-sm-12">
            <div data-aos='slide-right' className={s.stay}>
                <h3 className={s.stay__text}>Stay posted</h3>
                <h4 className={s.stay__h4}>Let's be friends. Subscribe to our newsletter to receive updates on new launches, recipes, playlists, and more.</h4>
            </div>
            <div  data-aos='slide-right' className={s.input}>
                <input className={s.input__email} type="email" placeholder="YOUR EMAIL ADDRESS" />
                <button onClick={ClickBut} className={s.input__butt}>SUBMIT</button>
            </div>
        </div>
    );
}
export default StayPosted;