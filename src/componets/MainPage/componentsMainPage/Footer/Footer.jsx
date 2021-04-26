import React from 'react';
import styles from './footer.module.scss'
import container from '../container.module.scss'

export const Footer = () => {
		return (
				<section className={`${styles.footer} ${container.container}`}>
						<div className={styles.footer__feedback}>
								<input
										className={styles.footer__input}
										type="text"
										placeholder="Enter your email"
								/>
								<button className={styles.footer__button}>
										Subscribe
								</button>
						</div>
						
						<div className={styles.footer__text}>
								<p className={styles.footer__logo}>AppCo</p>
								<p className={styles.footer__description}>All rights reserved by ThemeTags</p>
								<p className={styles.footer__copyrights}>Copyrights © 2019. </p>
						</div>
				</section>
		);
}
