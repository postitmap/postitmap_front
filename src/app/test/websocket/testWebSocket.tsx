'use client';
import React, { useEffect } from 'react';
import { Props } from './page';

export const testWebSocket = (props: Props) => {
    const [data, setData] = useState();
    useEffect(() => {
        const webSocket = new WebSocket('ws://localhost:8080/');
        webSocket.onmessage = (event) => {
            console.log(event);
            document.getElementById('messages').innerHTML +=
                'Message from server: ' + event.data + "<br>";
        };
        webSocket.addEventListener("open", () => {
            console.log("We are connected");
        });
        function sendMessage(event) {
            var inputMessage = document.getElementById('message');
            webSocket.send(inputMessage.value);
            inputMessage.value = "";
            event.preventDefault();
        }
    }, []);
    return (
        <>

        </>
    );
};
