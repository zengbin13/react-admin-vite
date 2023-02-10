import * as echarts from 'echarts';
import { useRef, useEffect, useState } from 'react';
interface Props {
	options: echarts.EChartsOption;
}

export type EChartsOption = echarts.EChartsOption;

const ReactEchart = ({ options }: Props) => {
	const chartRef = useRef<HTMLDivElement>(null);
	const [chart, setChart] = useState<echarts.ECharts>();

	const initChart = () => {
		const chartInstance = echarts.init(chartRef.current!);
		chartInstance?.setOption(options);
		setChart(chartInstance);
	};

	useEffect(() => {
		initChart();
	}, [options]);
	useEffect(() => {
		const handleResize = () => {
			chart?.resize();
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.addEventListener('resize', handleResize);
			// chart?.dispose();
		};
	}, [chart]);
	return <div ref={chartRef} className="tw-w-full tw-h-[400px]"></div>;
};

export default ReactEchart;
