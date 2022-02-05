import s from './IntroText.module.css'
let IntroH = () =>{
    return(
<div class="col-lg-6">
                    <div className={s.intro}>
                        <h3 className={s.itro__text}>An intro to apéritifs</h3>
                    </div>
                </div>
    );
}
export default IntroH;