import f from './Start.module.css'
let Start = () => {
return(
    <div className={f.start}>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-sm-12">
                <div className={f.orders}>
                <h3 className={f.text__orders}>Free shipping on orders over $50</h3>
                </div>
            </div>
        </div>
        </div>
    </div>
);
};
export default Start;