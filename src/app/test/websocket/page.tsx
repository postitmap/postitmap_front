'use client'
import React, { useEffect, useState } from 'react';

type Props = {
}

const webSocket = new WebSocket('ws://localhost:8080/');

const testWebSocket = (props: Props) => {
	const [data, setData] = useState({ chatList: [] });
	const [text, setText] = useState("");
	const [render, setRender] = useState(false);
	console.log(data);
	useEffect(() => {
		webSocket.onmessage = (event) => {
			console.log(event.data)
			data.chatList.push(event.data);
			setRender(v => !v);
		};
		webSocket.addEventListener("open", () => {
			console.log("We are connected");
		});
	}, [])

	const sendMessage = (event: any) => {
		webSocket.send(text)
		event.preventDefault();
	}
	return (
		<>
			<input type='text' onChange={e => setText(e.target.value)} />
			<button onClick={sendMessage}>Send</button>
			{data.chatList.map((one, index) => {
				return <div key={index}>{one}</div>
			})}
		</>
	);
};

export default testWebSocket;