import Stakann from './stakan.svg';
import s from './IntroImg.module.css';
let Stakan = () => {
    return (
        <div class="col-lg-12">
            <div class="stakan">
                <img className={s.stak}src={Stakann} alt="stakan" />
            </div>
        </div>
    );
}
export default Stakan;