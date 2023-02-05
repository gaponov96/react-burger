import {
    Logo, BurgerIcon, ListIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './appheader.module.css';
export function AppHeader() {
    return (
        <nav className={styles.nav}>
            
                <div className={styles.selectMenu}>
                    <BurgerIcon/>
                        <span>Конструктор</span>
                    <ListIcon type="primary" />
                        <span>Лента Заказов</span>
                </div>
                <div className={styles.Logo}>
                        <Logo/>
                </div>

                <div className={styles.personalCabinet}>
                    <span>Личный кабинет</span>
                </div>

            
        </nav>
    );
}
