import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './appheader.module.css';

export function AppHeader() {
    return (
        <nav className={styles.nav}>
                <div className={styles.selectMenu}>
                <div className={styles.constructor} >
                    <BurgerIcon type="primary"/>
                    <span>Конструктор</span>
                </div>
                <div className={styles.lenta}>
                <ListIcon type="primary" />
                <span>Лента Заказов</span>
                </div>
                </div>
                <div className={styles.Logo}>
                        <Logo/>
                </div>

                <div className={styles.personalCabinet}>
                <ProfileIcon type="primary" />    
                <span>Личный кабинет</span>
                </div>
        </nav>
    );
}
