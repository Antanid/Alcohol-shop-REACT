import s from './StayPosted.module.css';
import React from 'react';
let StayPosted = (props) => {

 let EmailArea = React.useRef();
 let TextArea = () =>{
let text = EmailArea.current.value;
props.EmailCheck(text)
 };

let Click = () =>{
let text = EmailArea.current.value;
alert(text)
};
    return (
        <div class="col-lg-6 col-sm-12">
            <div className={s.stay}>
                <h3 className={s.stay__text}>Stay posted</h3>
                <h4 className={s.stay__h4}>Let's be friends. Subscribe to our newsletter to receive updates on new launches, recipes, playlists, and more.</h4>
            </div>
            <div className={s.input}>
                <input ref={EmailArea} value={props.myEm} className={s.input__email} type="email" placeholder="YOUR EMAIL ADDRESS"/>
                <button onClick={Click} className={s.input__butt}>SUBMIT</button>
            </div>
        </div>
    );
}
export default StayPosted;