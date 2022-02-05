import s from './Explore.module.css';
let Explore = () => {
    return (
        <div class="col-lg-2 col-sm-4">
            <div className={s.explore}>
                <h5 className={s.explore__text}>EXPLORE</h5>
                <ul className={s.explore__foot}>
                    <li className={s.explore__footli}><a href="/">HOME</a>
                    </li>
                    <li className={s.explore__footli}><a href="/">SHOP</a></li>
                    <li className={s.explore__footli}><a href="/">MEMBERSHIP</a></li>
                    <li className={s.explore__footli}><a href="/">OUR STORY</a></li>
                    <li className={s.explore__footli}><a href="/">FAQ</a></li>
                    <li className={s.explore__footli}><a href="/">REFER A FRIEND</a></li>
                    <li className={s.explore__footli}><a href="/">CORPORATE GIFTING</a></li>
                    <li className={s.explore__footli}><a href="/">GIFT CARD</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Explore;