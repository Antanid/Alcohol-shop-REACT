import s from './sec.module.css';
import AllBottle from '../Bottle/AllBottle';
import AllText from '../Text after Nav/AllText';
import Itro from '../Intro/Intro';
import AllStol from '../Stol/AllStol';
let Section = () => {
    return (
        <section id="section" className={s.section}>
            <div class="container">
                <AllText />
                <AllBottle />
                <Itro />
                <AllStol />
            </div>
        </section>
    );
}
 export default Section;