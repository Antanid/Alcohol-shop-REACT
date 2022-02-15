import Follow from './Follow/Follow';
import s from './PreEnd.module.css';
import Set from './SetMood/Set';
let PreEnd = () => {
    return (
        <section className={s.pre__end}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <Set />
                        <Follow />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default PreEnd;