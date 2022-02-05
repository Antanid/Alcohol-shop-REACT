import s from './Follow.module.css';
let Follow = () => {
    return (
        <div className={s.follow}>
            <h5 className={s.follow__text}>Follow us, share us, drink Ha(us)</h5>
            <div className={s.ul}>
                <ul className={s.ins}>
                    <li className={s.ins__spisok}><a href="/">INSTAGRAM</a></li>
                    <li className={s.ins__spisok}><a href="/">TWITTER</a></li>
                    <li className={s.ins__spisok}><a href="/">FACEBOOK</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Follow;