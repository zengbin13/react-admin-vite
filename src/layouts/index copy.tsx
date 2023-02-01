import React from 'react';
import FlvVideoPlayer from '@/components/FlvVideoPlayer/FlvVideoPlayer';
const LayoutIndex: React.FC = () => {
	fetch('http://172.16.30.100/request.php', {
		method: 'POST',
		body: JSON.stringify({ type: 'get_live_stream_type', module: 'BUS_WEB_REQUEST' })
	})
		.then(response => response.json())
		.then(data => console.log(data, 111));
	return (
		<div>
			<FlvVideoPlayer
				url={`ws://127.0.0.1:8100/rtsp?url=${window.btoa('rtsp://172.16.30.100:8557')}`}
				isNeedControl={false}
			></FlvVideoPlayer>
			{/* <FlvVideoPlayer
				url={`ws://172.16.30.100:9080/ws.flv?token=10f054fe-2ee1-6d98-46bd-6ff4addf6204&channel=1`}
				isNeedControl={false}
			></FlvVideoPlayer> */}
		</div>
	);
};

export default LayoutIndex;
