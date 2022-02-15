import s from './BigText.module.css';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

let BigText = () => {

    useEffect(() => {
        aos.init({ duration: 600 });
      }, [])


    return (
        <div className="col-lg-6">
            <div data-aos='slide-left' className={s.flavors}>
                <p className={s.flavors__p}>Apéritifs are a category of spirits with complex flavors derived from fruits, herbs, and botanicals. Their lighter alcohol content (less than whiskey, more than wine) makes them perfect to sip all evening.</p>
            </div>
        </div>
    );
}
export default BigText;