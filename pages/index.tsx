import React, { ChangeEvent, useEffect, useState } from "react";
import {
  useIsSocketConnected,
  useSocketIoClient,
} from "@/hooks/useSocketIoClient";
import Messages from "@/components/Messages";

const Page = () => {
  const clientSocket = useSocketIoClient();
  const isSocketConnected = useIsSocketConnected();
  const userId = clientSocket?.userId;

  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<
    { message: string; userId: string }[]
  >([]);

  useEffect(() => {
    if (!clientSocket) return;
    const receiveMessageHandler = (receivedMessage: {
      message: string;
      userId: string;
    }) => {
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      setMessage("");
    };
    clientSocket.subscribe("receiveMessage", receiveMessageHandler);
  }, [clientSocket]);

  const sendMessage = () => {
    if (clientSocket && message.trim() !== "") {
      clientSocket.send("sendMessage", message.trim());
    }
  };

  return (
    <div className="h-full w-full  flex flex-col justify-center items-center">
      <div className="mb-4 font-bold text-lg">
        {isSocketConnected ? (
          <>
            <span className="text-green-400 ">Online</span>
          </>
        ) : (
          <span className="text-yellow-400 "> Please Waiting ....</span>
        )}
      </div>
      <Messages
        isSocketConnected={isSocketConnected}
        messages={messages}
        userId={userId}
      />
      <div className="mt-4">
        <input
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          value={message}
          type="text"
          className="input"
          placeholder="Type a message..."
          disabled={!isSocketConnected}
        />
        <button
          disabled={!message.trim()}
          onClick={sendMessage}
          className="btn btn-primary mx-3"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Page;
