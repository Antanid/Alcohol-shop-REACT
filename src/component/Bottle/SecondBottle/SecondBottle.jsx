import s from './SecondBottle.module.css';
import Grap from './grap.svg';
let BottleTwo = () => {
    return (
        <div class="col-lg-4">
            <div className={s.our_bottle}>
                <img className={s.our__kit} src={Grap} alt=""/>
                    <h3 className={s.our__text}>Grapefruit Jalapeño</h3>
                    <p className={s.our__p}>Light and refreshing, this aperitif is a bright blend of citrus with a subtle kick of fresh jalapeño.</p>
                    <div className={s.but}>
                        <button className={s.our__button}>SHOP NOW</button>
                    </div>
            </div>
        </div>
    );
}
export default BottleTwo;