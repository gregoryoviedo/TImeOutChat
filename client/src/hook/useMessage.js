import io from "socket.io-client";
import { useEffect, useState } from "react";

//const socket = io("http://localhost:3001");
const socket = io("/");

export const useMessage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message !== "") {
      socket.emit("message", message);
      const newMessage = {
        body: message,
        from: "Me",
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages([...messages, message]);
    };
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, [messages]);

  return { message, messages, handleChange, handleSubmit };
};
