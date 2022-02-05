import s from './Second.module.css';
import Ny from './NY.svg';
let SecondText = () => {
    return (
        <div className="col-lg-4 col-sm-12">
            <div className={s.main}>
                <h4 className={s.main__text}>
                    “For the wine or cocktail lover who’s tried it all and wants something new and refreshing.”
                </h4>
                <img className={s.ny} src={Ny} alt=""/>
            </div>
        </div>
    );
};

export default SecondText;