import React from 'react';
import { Line } from 'react-chartjs-2';
import './graphChart.scss';

const GraphChart = ({ userStatistic, userStatisticsData }) => {
		const data = {
				labels: userStatisticsData,
				datasets: [
						{
								label: '',
								data: userStatistic,
								fill: false,
								borderColor: '#3A80BA',
								tension: 0.4,
						},
				],
		};
		
		const options = {
				legend: {
						display: false,
				},
				scales: {
						yAxes: [
								{
										ticks: {
												beginAtZero: false,
										},
								},
						],
				},
		};
		
		return (
				<div className='chart'>
						<Line data={data} options={options} />
				</div>
		);
}

export default GraphChart;
