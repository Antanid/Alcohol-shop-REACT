import s from './FooterEnd.module.css';
let FooterEnd = () => {
    return (
        <div class="col-lg-12">
            <div className={s.policy}>
                <ul className={s.policy__manu}>
                    <li className={s.policy__li}><a href="/">© Haus 2021</a></li>
                    <li className={s.policy__li}><a href="/">Contact Us</a></li>
                    <li className={s.policy__li}><a href="/">Return Policy</a></li>
                    <li className={s.policy__li}><a href="/">Privacy Policy</a></li>
                    <li className={s.policy__li}><a href="/">Terms & Conditions</a></li>
                </ul>
            </div>
        </div>
    );
}
export default FooterEnd;