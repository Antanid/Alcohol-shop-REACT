import Drop from './Drop/Drop';
import Explore from './Explore/Explore';
import s from './Footer.module.css';
import FooterEnd from './FooterEnd/FooterEnd';
import Social from './SocialNet/Social';
import StayPosted from './StayPosted/StayPosted';
let Footer = () => {
    return (
        <footer id="footer" className={s.footer}>
            <div class="container">
                <div class="row">
                    <StayPosted />
                    <Explore />
                    <Social />
                    <Drop />

                    <FooterEnd />
                </div>
            </div>
        </footer>
    );
}
export default Footer;