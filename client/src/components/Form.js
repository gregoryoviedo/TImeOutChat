import React from "react";
import { UilMessage } from "@iconscout/react-unicons";

export const Form = ({ handleSubmit, handleChange, message }) => {
  return (
    <form onSubmit={handleSubmit} class="chat__conversation-panel__container">
      <button class="chat__conversation-panel__button panel-item btn-icon add-file-button">
        <svg
          class="feather feather-plus sc-dnqmqq jxshSx"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <button class="chat__conversation-panel__button panel-item btn-icon emoji-button">
        <svg
          class="feather feather-smile sc-dnqmqq jxshSx"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      </button>
      <input
        onChange={(e) => handleChange(e)}
        value={message}
        class="chat__conversation-panel__input panel-item"
        placeholder="Type a message..."
      />
      <button class="chat__conversation-panel__button panel-item btn-icon send-message-button">
        <UilMessage className="icon__message" onClick={handleSubmit} />
      </button>
    </form>
  );
};
