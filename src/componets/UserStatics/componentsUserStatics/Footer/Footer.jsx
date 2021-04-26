import React from 'react';
import styles from './footer.module.scss'
import style from './container.module.scss'

export const Footer = () => {
		return (
				<section className={style.container}>
						<div className={styles.footer}>
								<p className={styles.footer__logo}>AppCo</p>
								<p className={styles.footer__description}>All rights reserved by ThemeTags</p>
								<p className={styles.footer__copyrights}>Copyrights © 2019. </p>
						</div>
				</section>
		);
}
