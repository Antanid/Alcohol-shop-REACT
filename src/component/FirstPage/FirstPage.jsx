import s from './FirstPage.module.css';
import Section from './Section+comp/sec';
import AllRev from './Reviews/AllRev';
import Producer from './Producer/Producer';
import PreEnd from './PreEnd/PreEnd';


let FirstPage = () =>{
    return(<div>
        <Section />
        <AllRev />
        <Producer />
        <PreEnd />
        </div>
    );
}
export default FirstPage;