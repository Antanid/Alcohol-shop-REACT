import s from './ThirdBottle.module.css';
import Citrus from './citrus.jpg';
let BottleThree = () => {
    return (
        <div class="col-lg-4">
            <div className={s.our_bottle}>
                <img className={s.our__kit} src={Citrus} alt=""/>
                    <h3 className={s.our__text}>Citrus Flower</h3>
                    <p className={s.our__p}>A fresh Californian take on the apéritif. Made with crisp lemon and subtle elderflower.</p>
                    <div className={s.but}>
                        <button className={s.our__button}>SHOP NOW</button>
                    </div>
            </div>
        </div>
    );
}
export default BottleThree;