import React from "react";

//Hoooks
import { useMessage } from "./hook/useMessage";

//Components
import { Messages } from "./components/Messages";
import { Form } from "./components/Form";

function App() {
  const { message, messages, handleChange, handleSubmit } = useMessage();
  return (
    <div class="--dark-theme" id="chat">
      <div class="chat__conversation-board">
        <Messages messages={messages} />
      </div>
      <div class="chat__conversation-panel">
        <Form
          message={message}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
