import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss'
import container from '../container.module.scss'
import imageMobile from '../../../../images/mobile.png'
import headerBG from '../../../../images/headerBG.png'

export const Header = () => {
		return (
				<header className={`${styles.header} ${container.container}`}>
						<img
								src={headerBG}
								alt="background header"
								className={styles["header__image-bg"]}
						/>
						
						<div className={styles.header__text}>
								<p className={styles.header__logo}>
										AppCo
								</p>
								
								<p className={styles.header__motto}>
										<strong>Brainstorming</strong> for desired perfect Usability
								</p>
								
								<p className={styles.header__about}>
										Our design projects are fresh and simple and
										will benefit your business greatly. Learn more
										about our work!
								</p>
								
								<button className={styles.header__button}>
										<Link className={styles["header__button-lint"]} to="/UserStatics">
												Views Stats
										</Link>
								</button>
						</div>
						
						<div className={styles["header__image-mobile"]}>
								<img src={imageMobile} alt="mobile"/>
						</div>
				</header>
		);
}
