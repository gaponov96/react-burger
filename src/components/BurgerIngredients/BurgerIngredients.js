import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import css from './burgresingredients.module.css';

export function BurgerIngredients() {
    return (
        <div className={css.column}>
            <p className="text text_type_main-large">
                Соберите бургер
            </p>
            <div className={css.fl}>
                <Tab>Булки</Tab>
                <Tab>Начинки</Tab>
                <Tab>Соусы</Tab>
            </div>


        </div>
    );
}