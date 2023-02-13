import ChartWrap from '../ChartWrap';
import styled from './index.module.less';
import * as echarts from 'echarts';

const ScenicSpotBarChart = () => {
	const colors = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
	let options: echarts.EChartsOption = {
		tooltip: {},
		legend: {},
		dataset: {
			source: [
				['景点', '峨眉山', '稻城亚丁', '九寨沟', '万里长城', '北京故宫'],
				['人数', 39999, 19999, 79999, 79999, 79999, 39999],
				['最大值', 100000, 100000, 100000, 100000, 100000, 100000]
			]
		},
		grid: {
			show: false,
			right: '10%',
			left: '20%',
			bottom: '5%',
			top: '5%'
		},
		xAxis: {
			type: 'value',
			show: false
		},
		yAxis: {
			type: 'category',
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				color: '#fff',
				fontSize: 16
			}
		},
		series: [
			{
				type: 'bar',
				seriesLayoutBy: 'row',
				encode: { x: 1, y: 0 },
				// colorBy: 'data',
				z: 2,
				barWidth: 20,
				itemStyle: {
					borderRadius: 30,
					color: ({ dataIndex }) => {
						return colors[dataIndex % colors.length];
					}
				},
				barGap: '-100%'
			},
			{
				type: 'bar',
				seriesLayoutBy: 'row',
				encode: { x: 2, y: 0 },
				z: 1,
				barWidth: 25,
				itemStyle: {
					borderRadius: 30,
					opacity: 1,
					borderColor: '#05e8fe',
					borderWidth: 2,
					color: 'rgba(255, 255, 255, 0)'
				}
			}
		]
	};
	return (
		<ChartWrap title="热门景区排行" className={styled.root} options={options}>
			<div className="spot-header">
				<span>排名</span>
				<span>景区</span>
				<div>预约数量</div>
			</div>
		</ChartWrap>
	);
};

export default ScenicSpotBarChart;
