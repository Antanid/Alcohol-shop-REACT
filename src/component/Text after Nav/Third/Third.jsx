import s from './Third.module.css';
import Appetit from './appetit.svg'
let ThirdText = () => {
    return (
        <div class="col-lg-4 col-sm-12">
            <div className={s.main}>

                <h4 className={s.main__text}>
                    “Cleaner, responsibly sourced, and lower in alcohol.”
                </h4>
                <img className={s.appetit} src={Appetit} alt=""/>

            </div>
        </div>
    );
}
export default ThirdText;