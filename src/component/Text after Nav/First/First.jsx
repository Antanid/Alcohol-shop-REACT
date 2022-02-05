import s from './First.module.css'
import Rectangle from './Rectangle.svg';
let Firstt = () => {
    return(
        <div class="col-lg-4 col-sm-12">
        <div class={s.main}>

          <h4 class={s.main__text}>
            "What makes Haus so special is its incredible flavors."
          </h4>
          <img className={s.Rectangle} src={Rectangle} alt="132"></img>
        </div>
      </div>
    );
}
export default Firstt;
