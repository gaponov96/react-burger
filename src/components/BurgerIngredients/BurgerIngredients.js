import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burgresingredients.module.css';

export function BurgerIngredients() {
    return (
        <div className={style.column}>
            <p className="text text_type_main-large">
                Соберите бургер
            </p>
            <div className={style.tabName}>
                <Tab>Булки</Tab>
                <Tab>Начинки</Tab>
                <Tab>Соусы</Tab>
            </div>
        </div>
    );
}