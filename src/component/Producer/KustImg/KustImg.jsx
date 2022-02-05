import s from './Kust.module.css';
import Kust from './kust.jpg';
let Kustt = () => {
    return (
        <div class="col-lg-6">
            <div className="kust">
                <img className={s.kust___img} src={Kust} alt="/" />
            </div>
        </div>
    );
}
export default Kustt;