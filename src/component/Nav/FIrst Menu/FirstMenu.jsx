import s from './First.module.css'
let First = () => {
    return (
        <div class="col-lg-6">
            <div className={s.nav}>
                <ul className={s.menu}>
                    <li className={s.tittle__menu}><a href="/">SHOP</a></li>
                    <li className={s.tittle__menu}><a href="/">MEMBERSHIP</a></li>
                    <li className={s.tittle__menu}><a href="/">OUR STORY</a></li>
                </ul>
            </div>
        </div>
    );
}
export default First;