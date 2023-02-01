import React, { useEffect, useRef } from 'react';
// import './FlvVideoPlayer.scss';
import flvjs from 'flv.js';
import { Button } from 'antd';

interface FlvVideoPlayerProps {
	url: string; // rtsp 的url
	isNeedControl?: boolean;
	fullScreenRef?: any; // 方便组件外部调用全屏方法的ref
}

// eslint-disable-next-line react/display-name
const FlvVideoPlayer = React.forwardRef<any, FlvVideoPlayerProps>(({ isNeedControl, url, fullScreenRef }, ref) => {
	const videoDomRef = useRef<any>();
	const playerRef = useRef<any>(); // 储存player的实例

	React.useImperativeHandle(ref, () => ({
		requestFullscreen
	}));

	useEffect(() => {
		if (videoDomRef.current) {
			if (fullScreenRef) {
				fullScreenRef.current[url] = requestFullscreen;
			}
			// const url = `${videoUrl}/rtsp/video1/?url=${url}`;
			playerRef.current = flvjs.createPlayer({
				type: 'flv',
				isLive: true,
				url
			});
			playerRef.current.attachMediaElement(videoDomRef.current);
			try {
				playerRef.current.load();
				playerRef.current.play();
			} catch (error) {
				console.log(error);
			}
		}

		return () => {
			destroy();
		};
	}, [url]);

	/**
	 * 全屏方法
	 */
	const requestFullscreen = () => {
		if (videoDomRef.current) {
			(videoDomRef.current.requestFullscreen && videoDomRef.current.requestFullscreen()) ||
				(videoDomRef.current.webkitRequestFullScreen && videoDomRef.current.webkitRequestFullScreen()) ||
				(videoDomRef.current.mozRequestFullScreen && videoDomRef.current.mozRequestFullScreen()) ||
				(videoDomRef.current.msRequestFullscreen && videoDomRef.current.msRequestFullscreen());
		}
	};

	/**
	 * 销毁flv的实例
	 */
	const destroy = () => {
		if (playerRef.current) {
			playerRef.current.pause();
			playerRef.current.unload();
			playerRef.current.detachMediaElement();
			playerRef.current.destroy();
			playerRef.current = null;
		}
	};

	return (
		<>
			<Button type="primary" onClick={requestFullscreen}>
				全屏按钮
			</Button>
			<video controls={isNeedControl} ref={videoDomRef} className="FlvVideoPlayer" loop autoPlay muted />
		</>
	);
});

export default FlvVideoPlayer;
