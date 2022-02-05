import { NavLink } from 'react-router-dom';
import s from './First.module.css'
let First = () => {
    return (
        <div class="col-lg-6">
            <div className={s.nav}>
                <ul className={s.menu}>
                <li className={s.tittle__menu}><NavLink to="/">MAIN PAGE</NavLink></li>
                    <li className={s.tittle__menu}><NavLink to="/Shop">SHOP</NavLink></li>
                    <li className={s.tittle__menu}><NavLink to="/MemberShip">MEMBERSHIP</NavLink></li>
                    <li className={s.tittle__menu}><NavLink to="/OurStory">OUR STORY</NavLink></li>
                </ul>
            </div>
        </div>
    );
}
export default First;