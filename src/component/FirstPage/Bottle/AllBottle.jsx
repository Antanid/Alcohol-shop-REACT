import s from './AllBottle.module.css';
import BottleOne from './FirstBottle/FirstBottle';
import MadeNatural from './Natural/Natural';
import BottleTwo from './SecondBottle/SecondBottle';
import BottleThree from './ThirdBottle/ThirdBottle';
let AllBottle = () => {
    return ( 
        <div class="row">
            <MadeNatural/>
            <BottleOne/>
            <BottleTwo/>
            <BottleThree/>
        </div>
    );
}
export default AllBottle;