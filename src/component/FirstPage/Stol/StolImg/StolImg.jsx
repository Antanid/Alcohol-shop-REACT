import s from './StolImg.module.css';
import stolick from './stol.svg';
let StolImg = () => {
    return (
        <div class="col-lg-8">
            <div className={s.stol}>
                <img className={s.tittle__stol} src={stolick} alt="table"/>
            </div>
        </div>
    );
}
export default StolImg;