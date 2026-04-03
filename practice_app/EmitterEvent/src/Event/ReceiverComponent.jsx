import React, { useState } from "react";
import { useEvent } from "./useEvent";

const ReceiverComponent = () => {

  const [message, setMessage] = useState(null);

  useEvent("USER_MESSAGE", (payload) => {
    if (!payload || !payload.message) {
      console.warn("Invalid payload received");
      return;
    }

    setMessage(payload);
  });

  return (
    <div>
      <h2>Receiver Component</h2>

      {message ? (
        <div>
          <p>Message: {message.message}</p>
          <p>Time: {message.time}</p>
        </div>
      ) : (
        <p>No message received yet</p>
      )}

    </div>
  );
};

export default ReceiverComponent;