import React from "react";
import { eventEmitter } from "./EventEmitter";

const SenderComponent = () => {

  const sendNotification = () => {
    eventEmitter.emit("USER_MESSAGE", {
      message: "Hello from Sender Component!",
      time: new Date().toLocaleTimeString()
    });
  };

  return (
    <div>
      <h2>Sender Component</h2>
      <button onClick={sendNotification}>
        Send Message
      </button>
    </div>
  );
};

export default SenderComponent;