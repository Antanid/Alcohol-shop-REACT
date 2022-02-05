import s from './Susan.module.css';
let Susan = () => {
    return (
        <div class="col-lg-4 sol-sm-12">
            <div className={s.susan}>
                <h4 className={s.susan__text}>“Haus has found the solution I didn’t really know I was looking for!”</h4>
                <h3 className={s.susan__h3}>— SUSAN</h3>
                <p className={s.susan__p}>Verified Buyer</p>
            </div>
        </div>
    );
}
export default Susan;