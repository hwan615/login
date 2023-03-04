import { useState, useEffect } from 'react';

export default function HomePage() {

  const [socket, setSocket] = useState();

  useEffect(() => {
    console.log(socket)
    socket ? 
    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          event: 'connect',
          data: 'websocket connected to next.js',
        })
      );

      socket.onmessage = (data) => {
        console.log(data.data);
      };
    } :
    console.log('websocket connection not found')
  }, [socket])

  const makeSocketConnection = () => {
    setSocket(new WebSocket("ws://localhost:8080"));
  };

  const sendMessage = () => {
    console.log('hello')
    socket.send(
      JSON.stringify({
        event: 'event',
        data: 'send message using button'
      })
    )
  }

  return (
    <div>
      <h1>{socket ? 'connected to websocket' : 'connect websocket to start chat service'}</h1>
      { socket ? <button onClick={sendMessage}>send message</button> : <div></div>}
      <button onClick={makeSocketConnection}>connect websocket</button>
    </div>
  )
};
