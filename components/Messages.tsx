import { useEffect, useRef } from "react";

type PropsComponent = {
  messages: { message: string; userId: string }[];
  userId: string | undefined;
  isSocketConnected: boolean;
};
const Messages = ({ messages, userId, isSocketConnected }: PropsComponent) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div
      className={`w-full max-w-5xl h-4/6 bg-base-300 rounded-xl p-2  shadow-2xl  ${
        isSocketConnected ? "shadow-green-950" : "shadow-amber-950"
      } overflow-auto scroll`}
    >
      {messages.map((e, i) => (
        <div
          key={i}
          className={`chat  ${e.userId == userId ? "chat-end" : "chat-start"}`}
        >
          <div className="chat-bubble chat-bubble-primary">{e.message}</div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
