import BigText from './IntroBigText/BigText';
import Stakan from './IntroImg/IntroImg';
import IntroH from './IntroText/IntroText';
let Itro = () => {
    return (
        <div class='row'>
            <Stakan/>
            <IntroH />
            <BigText/>
        </div>
    );
}
export default Itro;