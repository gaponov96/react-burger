import {Tab, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burgresingredients.module.css';

export function BurgerIngredients() {
    return (
        <div className={styles.menu}>
            <h2 className={styles.menuHeader}>
                Соберите бургер
            </h2>
            <div className={styles.menuTabs}>
                <Tab active={true}>Булки</Tab>
                <Tab>Начинки</Tab>
                <Tab>Соусы</Tab>
            </div>
            <section className={styles.bread}>
                <h3 className={styles.breadHeader}>Булки</h3>
                <div className={styles.cardWrapper}>
                    <div className={styles.breadCard}>
                        <div className={styles.breadPicture}></div>
                        <div className={styles.breadPrice}>
                            <img src="https://code.s3.yandex.net/react/code/bun-02.png"alt='bread'/>
                            <div>
                                <p>20</p>
                                <CurrencyIcon type="primary" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.breadCard}>
                        <div className={styles.breadPicture}></div>
                        <div className={styles.breadPrice}>
                            <img src="https://code.s3.yandex.net/react/code/bun-02.png"alt='bread'/>
                            <div>
                                <p>20</p>
                                <CurrencyIcon type="primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// ctrl + alt + down
// ctr + d - find same