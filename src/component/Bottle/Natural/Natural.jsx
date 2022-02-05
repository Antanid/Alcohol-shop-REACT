import s from './Natural.module.css';
let MadeNatural = () => {
    return (
        <div class="col-lg-12 col-sm-12">
            <div className={s.made}>
                <div className={s.made__textdiv}>
                    <h2 className={s.made__text}>Made with natural <br></br>ingredients, nothing fake</h2>
                </div>
                <div className={s.made_p}>
                    <p className={s.made__p}>Shop All Flavors</p>
                </div>
            </div>
        </div>
    );
}
export default MadeNatural;