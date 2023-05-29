import { useState, useEffect } from 'react';

export default function Socket() {

  const [socket, setSocket] = useState();
  const [message, setMessage] = useState('');
  const [user, setUser] = useState();
  const [chat, setChat] = useState([]);

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
        if (JSON.parse(data.data).type === 'chat') {
          console.log([...chat, JSON.parse(data.data).msg])
          setChat([...chat, JSON.parse(data.data).msg]);
        } else {
          console.log('dd')
          setUser(JSON.parse(data.data).msg);
        }
      };
    } :
    console.log('websocket connection not found')
  }, [socket])

  const makeSocketConnection = () => {
    setSocket(new WebSocket("ws://localhost:8080"));
  };

  const sendMessage = () => {
    socket.send(
      JSON.stringify({
        event: 'event',
        data: message,
      })
    )
  }

  const changeMessage = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div>
      <h1>{socket ? 'connected to websocket' : 'connect websocket to start chat service'}</h1>
      <h1>{user}</h1>
      { 
        socket 
          ? <div>
              <ul>
                {
                  chat.map(c => (
                    <li key={c}>{c}</li>
                  ))
                }
              </ul>
              <input type="text" value={message} onChange={changeMessage} />
              <button onClick={sendMessage}>send message</button>
            </div>
          : <div></div> 
      }
      <br />
      <br />
      <button onClick={makeSocketConnection}>connect websocket</button>
    </div>
  )
};
