import React from "react";
import { useMessage } from "./hook/useMessage";
import { UilMessage } from "@iconscout/react-unicons";

function App() {
  const { message, messages, handleChange, handleSubmit } = useMessage();
  return (
    <>
      {/* <div className="header__container">
        <span>Exclusividad y anonimato <span>por Gregory Oviedo</span></span>
      </div> */}
      <div className="container">
        <form onSubmit={handleSubmit}>
          <ul>
            {messages.map(({ body, from }, index) => (
              <li key={index}>
                <div
                  className={
                    from === "Me" ? "container__me" : "container__people"
                  }
                >
                  <img
                    src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
                    alt="default profile"
                  />
                  <span
                    className={`message__list ${
                      from === "Me" ? "issuer" : "receiver"
                    }`}
                  >
                    {body}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className="input__container">
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              value={message}
              placeholder="Mensaje"
            />
            <UilMessage className="icon__message" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
