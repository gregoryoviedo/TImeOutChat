import React from "react";
import DefaultProfile from "../assets/defaultProfile.png";

export const Messages = ({ messages }) => {
  return (
    <div>
      {messages.map(({ body, from }, index) => (
        <div
          class={`chat__conversation-board__message-container ${
            from === "Me" && "reversed"
          }`}
          key={index}
        >
          <div class="chat__conversation-board__message__person">
            {from !== "Me" && (
              <div class="chat__conversation-board__message__person__avatar">
                <img src={DefaultProfile} alt="default profile" />
              </div>
            )}
          </div>
          <div class="chat__conversation-board__message__context">
            <div class="chat__conversation-board__message__bubble">
              <span>{body}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
