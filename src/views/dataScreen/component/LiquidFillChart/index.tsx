import ChartWrap from '../ChartWrap';
import * as echarts from 'echarts/core';
import 'echarts-liquidfill';
import styled from './index.module.less';

interface Props {
	data: {
		actual: number;
		total: number;
	};
}
const LiquidFillChart = ({ data: { total, actual } }: Props) => {
	let number = actual / total;
	let options: echarts.EChartsCoreOption = {
		grid: {
			top: '0',
			left: '0px',
			right: '0px',
			bottom: '0',
			containLabel: true
		},
		polar: {
			radius: ['75%', '85%'],
			center: ['50%', '50%']
		},
		angleAxis: {
			max: 120,
			clockwise: false,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false
			},
			splitLine: {
				show: false
			},
			startAngle: 188
		},
		radiusAxis: {
			type: 'category',
			show: true,
			axisLabel: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			}
		},
		series: [
			{
				type: 'liquidFill',
				radius: '75%',
				z: 2,
				data: [number, number, number],
				outline: {
					show: true,
					borderDistance: 8,
					itemStyle: {
						borderWidth: 0,
						borderColor: '#31d8d5',
						shadowBlur: 20,
						shadowColor: '#50c1a7'
					}
				},
				backgroundStyle: {
					borderWidth: 1,
					color: {
						type: 'radial',
						x: 0.5,
						y: 0.5,
						r: 0.5,
						colorStops: [
							{
								offset: 0,
								color: '#0D2648' // 0% 处的颜色
							},
							{
								offset: 0.8,
								color: '#0D2648' // 100% 处的颜色
							},
							{
								offset: 1,
								color: '#228E7D' // 100% 处的颜色
							}
						],
						global: false // 缺省为 false
					}
				},
				color: [
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: '#35FAB6' // 0% 处的颜色
							},
							{
								offset: 1,
								color: 'rgba(40, 209, 247,0.3)' // 100% 处的颜色
							}
						]
					}
				],
				label: {
					position: ['50%', '28%'],
					fontSize: 16,
					color: '#fff',
					lineHeight: 26,
					formatter: function () {
						return `预约量\n${(number * 100).toFixed(2)}%`;
					}
				}
			},
			{
				type: 'pie',
				radius: ['80%', '80%'],
				center: ['50%', '50%'],
				z: 1,
				label: {
					show: false
				},
				silent: true,
				itemStyle: {
					borderWidth: 2,
					borderType: [8, 10],
					borderDashOffset: 15,
					borderColor: '#31d8d5',
					color: '#11144e',
					borderCap: 'round'
				},
				data: [100]
			},
			{
				type: 'bar',
				data: [55],
				z: 10,
				coordinateSystem: 'polar',
				roundCap: true,
				color: '#31d8d5'
			}
		]
	};
	return (
		<ChartWrap
			title="实时游客统计"
			options={options}
			className={styled.root}
			right={
				<div className="chart-1-title">
					可预约总量
					<span className="number">{total}</span>人
				</div>
			}
		>
			<div className="chart-1-content">
				{/* 数字 */}
				<ul className="number-wrap">
					{(actual + '人').split('').map((item, index) => {
						return (
							<li className="number-item" key={index}>
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		</ChartWrap>
	);
};

export default LiquidFillChart;
