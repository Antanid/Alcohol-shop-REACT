import s from './AllRev.module.css'
import Esteban from './Esteban/Esteban';
import Fiona from './FIONA/Fiona';
import Susan from './SUSAN/Susan';
let AllRev = () => {
    return (
        <article className={s.article} id={s.article}>
            <div class="container">
                <div class="row">
                        <Susan />
                        <Fiona />
                        <Esteban />
                </div>
            </div>
        </article>
    );
}
export default AllRev;