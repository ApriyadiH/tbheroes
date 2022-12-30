import React, {useEffect} from "react";
import io from "socket.io-client"

// const socket = io.connect("https://tbheroesserver.vercel.app/");
const socket = io.connect("http://localhost:3001");

function TestChat() {
  const send = () => {
    socket.emit("send_message", {message: "test" })
  }

  useEffect(()=>{
    socket.on("receive_message", (data) => {
      alert(data.message)
    })
  }, [socket])

  return (
    <div>
      <input type="text"></input>
      <button onClick={send}>Kirim</button>
    </div>
  );
}

export default TestChat;
