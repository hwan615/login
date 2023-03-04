import { useState, useEffect } from 'react';

export default function HomePage() {

  const [socket, setSocket] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    socket ? 
    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          event: 'connect',
          data: { name: 'websocket connected to next.js', value: 'hello'}
        })
      );

      socket.onmessage = (data) => {
        console.log(JSON.parse(data.data).type);
        if (JSON.parse(data.data).type === "notification") {
          setUser(JSON.parse(data.data).msg)
        }
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
      <h1>{user}</h1>
      <button onClick={makeSocketConnection}>connect websocket</button>
    </div>
  )
};
