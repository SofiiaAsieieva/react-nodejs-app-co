import React from 'react';
import { Header } from './componentsMainPage/Header/Header'
import { Body } from './componentsMainPage/Body/Body'
import { Footer } from './componentsMainPage/Footer/Footer'
import styles from './section.module.scss'

export const MainPage = () => {
		return (
		  <div>
				  <section className={`${styles.section} ${styles["section--header"]}`}>
						  <Header />
				  </section>
				
				  <section className={`${styles.section} ${styles["section--body"]}`}>
						  <Body />
				  </section>
				
				  <section className={`${styles.section} ${styles["section--footer"]}`}>
						  <Footer />
				  </section>
		  </div>
		);
}
