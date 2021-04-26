import React from 'react';
import styles from './cadr.module.scss'

export const Card = ({image, name, description}) => {
		return (
				<section className={styles.card}>
						<img src={image} alt={name}/>
						<p className={styles.card__name}>{name}</p>
						<p className={styles.card__text}>{description}</p>
				</section>
		);
}
