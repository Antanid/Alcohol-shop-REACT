import First from './FIrst Menu/FirstMenu';
import s from './Menu.module.css'
import Second from './SecondMenu/SecondMenu';
let Menu = () => {
    return (
        <div class="header">
            <div class="container-fluid">
                <div class="row g-0">
                    <First />
                    <Second />
                </div>
            </div>
        </div>
    )
}

export default Menu;