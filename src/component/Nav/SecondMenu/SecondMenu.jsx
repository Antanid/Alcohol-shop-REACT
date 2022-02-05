import { NavLink } from 'react-router-dom';
import s from './SecondMenu.module.css';
let Second = () => {
    return (
        <div class="col-lg-6">
            <div class={s.modern1}>
                <ul class={s.menu2}>
                    <li className={s.tittle__menu2}><NavLink to="/Newsletter">NEWSLETTER</NavLink></li>
                    <li className={s.tittle__menu2}><NavLink to="/Account">ACCOUNT</NavLink></li>
                    <li className={s.tittle__menu2}><NavLink to="/Cart">CART</NavLink></li>
                </ul>

                <div className={s.text}>
                    <h1 className={s.tittle__text}>Alcohol for the modern drinker</h1>
                    <p className={s.tittle__p}>Light and refreshing flavors made with real, clean ingredients you can feel good about. Just pour, sip, and enjoy.</p>
                </div>
                <button name="button" className={s.button}>SHOP ALL</button>
            </div>
        </div>
    );
}
export default Second;