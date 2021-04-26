import React from 'react';
import styles from './body.module.scss'
import container from '../container.module.scss'

import { Card } from './Card/Card';
import imageCleanDesign from '../../../../images/body/1.png'
import imageSecureData from '../../../../images/body/2.png'
import imageRetinaReady from '../../../../images/body/3.png'

export const Body = () => {
		return (
				<section className={`${styles.body} ${container.container}`}>
						<h2 className={styles.body__title}>
								Why <strong>
										small business owners love
								</strong> AppCo?
						</h2>
						
						<p className={styles.body__about}>
								Our design projects are fresh and simple
								and will benefit your business greatly.
								Learn more about our work!
						</p>
						
						<div className={styles.body__cards}>
								<Card
										image={imageCleanDesign}
										name="Clean Design"
										description="Increase sales by showing true dynamics of your website."
								/>
								
								<Card
										image={imageSecureData}
										name="Secure Data"
										description="Build your online store’s trust using Social Proof & Urgency."
								/>
								
								<Card
										image={imageRetinaReady}
										name="Retina Ready"
										description="Realize importance of social proof in customer’s purchase decision."
								/>
						</div>
				</section>
		);
}
