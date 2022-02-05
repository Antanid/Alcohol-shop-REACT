import s from './Drop.module.css';
let Drop = () => {
    return (
        <div class="col-lg-2 col-sm-4">
            <div className="explore">
                <h5 className={s.explore__text}>DROP US A LINE</h5>
                <ul className={s.explore__foot}>
                    <li className={s.explore__footli}><a href="/">HELLO@DRINK.HAUS</a>
                    </li>
                    <li className={s.explore__footli}><a href="/">PRESS@DRINK.HAUS</a></li>
                    <li className={s.explore__footli}><a href="/">PARTNERSHIPS@DRINK.HAUS</a></li>
                    <li className={s.explore__footli}><a href="/">JOBS@DRINK.HAUS</a></li>
                    <li className={s.explore__footli}><a href="/">WHOLESALE@DRINK.HAUS</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Drop;