import s from './Social.module.css';
let Social = () => {
    return (
        <div class="col-lg-2 col-sm-4">
            <div className={s.explore}>
                <h5 className={s.explore__text}>FOLLOW</h5>
                <ul className={s.explore__foot}>
                    <li className={s.explore__footli}><a href="/">INSTAGRAM</a>
                    </li>
                    <li className={s.explore__footli}><a href="/">SPOTIFY</a></li>
                    <li className={s.explore__footli}><a href="/">TWITTER</a></li>
                    <li className={s.explore__footli}><a href="/">FACEBOOK</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Social;