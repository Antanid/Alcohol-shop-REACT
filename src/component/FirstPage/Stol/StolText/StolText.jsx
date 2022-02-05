import s from './StolText.module.css';
let StolText = () => {
    return (
        <div class="col-lg-4">
            <div className={s.drink}>
                <h4 className={s.drink__text1}>Easy to drink</h4>
                <p className={s.drink__p}>The perfect anytime drink, sip Haus on its own or with simple mixers you probably already have like soda or tonic.</p>
                <h3 className={s.drink__h3}>Natural ingredients. Nothing fake.</h3>
                <p className={s.drink__p}>Artificial ingredients and refined sugars are a big culprit in hangovers. Feel good about what’s in your glass that night — and the next day.</p>
                <h4 className={s.drink__text}>Delivered to your door</h4>
                <p className={s.drink__p}>We blend, bottle, and ship our products straight from Sonoma, CA to your doorstep.</p>
            </div>
        </div>

    );
}
export default StolText;