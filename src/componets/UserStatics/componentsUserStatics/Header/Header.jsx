import React from 'react';
import styles from './header.module.scss'

export const Header = () => {
		return (
				<section className={styles.header}>
						<h2 className={styles.header__logo}>
								AppCo
						</h2>
				</section>
		);
}
