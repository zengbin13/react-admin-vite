import classNames from 'classnames';
import React from 'react';
import styled from './index.module.less';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import 'echarts-liquidfill';

interface Props {
	options?: echarts.EChartsCoreOption;
	title?: string;
	right?: React.ReactElement;
	className?: string;
	children?: React.ReactElement;
}

const ChartWrap = ({ options, title, right, className, children }: Props) => {
	return (
		<div className={classNames(styled.root, className)}>
			<div className="header">
				<div className="lf">
					<div className="title">
						<span className="name">{title || '标题'}</span>
						<span className="line"></span>
					</div>
					<div className="split"></div>
					<div className="bg">{right}</div>
				</div>
				<div className="ri"></div>
			</div>
			<div className="content">
				{children}
				{options && <ReactECharts option={options} theme="light" style={{ flex: 1 }} />}
			</div>
		</div>
	);
};

export default ChartWrap;
