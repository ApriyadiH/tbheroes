import React, {useEffect} from "react";
import Pusher from "pusher-js";

function TestChat() {
  Pusher.logToConsole = true;

  var pusher = new Pusher("fbaea5207fa7923cfdce", {
    cluster: "ap1",
  });

  var channel = pusher.subscribe("my-channel");
  channel.bind("my-event", function (data) {
    alert(JSON.stringify(data));
  });

  return (
    <div>
      <input type="text"></input>
      <button>Kirim</button>
    </div>
  );
}

export default TestChat;
