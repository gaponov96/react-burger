import { Button, ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import css from './burgerconstructor.module.css';
import headerLogo from '../../images/bun-02.png';

export function BurgerConstructor() {
    return (
        <div>
            <div>
                Переместите сюда ингредиент для добавления в заказ
            </div>
                <div className="ml-15">
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={headerLogo}
                    />
                </div>
            <div>
               <Button type="primary" size="medium">Оформить заказ</Button>
            </div>

        </div>
    );
}
