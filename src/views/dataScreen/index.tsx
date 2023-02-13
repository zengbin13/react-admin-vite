// import ReactEchart, { EChartsOption } from './component/ReactEchart';
import classNames from 'classnames';
import ReactECharts from 'echarts-for-react';
import styled from './index.module.less';
import type { EChartsOption } from 'echarts';
import { useEffect, useRef, useState } from 'react';
import ChartWrap from './component/ChartWrap';
import LiquidFillChart from './component/LiquidFillChart';
import ScenicSpotBarChart from './component/ScenicSpotBarChart';
const DataScreen = () => {
	const options: EChartsOption = {
		// 全局调色盘
		color: [
			'#c23531',
			'#2f4554',
			'#61a0a8',
			'#d48265',
			'#91c7ae',
			'#749f83',
			'#ca8622',
			'#bda29a',
			'#6e7074',
			'#546570',
			'#c4ccd3'
		],
		legend: {},
		tooltip: {},
		dataset: {
			source: [
				['product', '2012', '2013', '2014', '2015'],
				['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
				['Milk Tea', 86.5, 92.1, 85.7, 83.1],
				['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
			]
		},
		xAxis: [
			{ type: 'category', gridIndex: 0 },
			{ type: 'category', gridIndex: 1 }
		],
		yAxis: [
			{ type: 'value', gridIndex: 0 },
			{ type: 'value', gridIndex: 1 }
		],
		grid: [{ bottom: '55%' }, { top: '55%' }],
		series: [
			{ type: 'bar', seriesLayoutBy: 'row' },
			{ type: 'bar', seriesLayoutBy: 'row' },
			{ type: 'bar', seriesLayoutBy: 'row' },
			{ type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
			{ type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
			{ type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
			{ type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
		]
	};

	const screenRef = useRef<HTMLDivElement>(null);
	/**
	 * @description: 数据大屏自适应函数 https://juejin.cn/post/7148733509744459790
	 */
	const handleScreenAuto = () => {
		const designDraftWidth = 1920; //设计稿的宽度
		const designDraftHeight = 1080; //设计稿的高度
		//根据屏幕的变化适配的比例
		const scale =
			document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight
				? document.documentElement.clientWidth / designDraftWidth
				: document.documentElement.clientHeight / designDraftHeight;
		//缩放比例
		if (screenRef.current) screenRef.current.style.transform = `scale(${scale}) translate(-50% ,-50%)`;
	};

	const [liquidFillData, setLiquidFillData] = useState({
		actual: 171232,
		total: 999999
	});

	setTimeout(() => {
		setLiquidFillData({
			actual: Math.floor(999999 * Math.random()),
			total: 999999
		});
	}, 10000);

	useEffect(() => {
		handleScreenAuto();
		window.addEventListener('resize', handleScreenAuto);
		return () => window.removeEventListener('resize', handleScreenAuto);
	}, []);

	return (
		<div className={classNames('container-fixed', styled.root)}>
			<div className="chart" ref={screenRef}>
				<div className="header-bar">
					<div className="left">
						<div className="back">首页</div>
					</div>
					<div className="center">
						<div className="title">智慧旅游可视化大数据展示平台</div>
					</div>
					<div className="right">
						<div className="title">统计报告</div>
						<div className="time">当前时间:2023年02月10日 14:22:21</div>
					</div>
				</div>
				<div className="main">
					<div className="left">
						<div className="chart-item" style={{ minHeight: '400px' }}>
							<LiquidFillChart data={liquidFillData}></LiquidFillChart>
						</div>
						<div className="chart-item">
							<ChartWrap></ChartWrap>
						</div>
						<div className="chart-item">
							<ChartWrap></ChartWrap>
						</div>
					</div>
					<div className="center">
						<ChartWrap>
							<ReactECharts option={options} theme="light" />
						</ChartWrap>
					</div>
					<div className="right">
						<div className="chart-item" style={{ minHeight: '400px' }}>
							<ScenicSpotBarChart></ScenicSpotBarChart>
						</div>
						<div className="chart-item">
							<ChartWrap></ChartWrap>
						</div>
						<div className="chart-item">
							<ChartWrap></ChartWrap>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DataScreen;
