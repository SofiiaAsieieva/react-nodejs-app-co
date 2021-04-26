import React,{Component} from 'react';
import Chart from "chart.js/auto";

class GraphChart extends Component {
		constructor(props) {
				super(props);
				this.myRef = React.createRef();
		}

		componentDidMount() {
				const ctx = this.ctx;
				
				new Chart(ctx, {
						type: "line",
						data: {
								labels: [
										'January',
										'February',
										'March',
										'April',
										'May',
										'June',
										'July',
										'August',
										'September',
										'October',
										'November',
										'December'
								],
								datasets: [
										{
												label: "# of Likes",
												data: [477, 877, 473, 651, 530, 214, 752, 933, 947, 597, 291, 563, 294, 848, 102, 962, 806, 625, 470, 444, 325, 243, 371, 674],
												borderColor: [
														"rgba(58.0, 128.0, 186.0, 1.0)",
												],
												backgroundColor: ["rgba(58.0, 128.0, 186.0, 1.0)"],
												tension: 0.4,
										}
								]
						},
						options: {
								animations: {
										radius: {
												duration: 700,
												easing: 'linear',
												loop: (context) => context.active
										}
								},
								hoverRadius: 12,
								hoverBackgroundColor: 'yellow',
								interaction: {
										mode: 'nearest',
										intersect: false,
										axis: 'x'
								},
								plugins: {
										tooltip: {
												enabled: false
										}
								}
						},
				});
		}
		
		render() {
				
				return (
						<div>
								<canvas width='800' height='300' ref={ctx => (this.ctx = ctx)}/>
						</div>
				)
		}
}
export default GraphChart;
