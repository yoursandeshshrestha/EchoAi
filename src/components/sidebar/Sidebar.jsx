import React, { useContext, useState, useEffect } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

function Sidebar() {
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div onClick={() => newChat()} className="new-chat">
        <img src={assets.plus_icon} alt="plus-icon" />
        <p>New chat</p>
      </div>
      <div className="recent">
        <p className="recent-title">Recent Query</p>
        {prevPrompts.map((item, index) => (
          <div
            key={index}
            onClick={() => loadPrompt(item)}
            className="recent-entry"
          >
            <img src={assets.message_icon} alt="message-icon" />
            <p>{item.slice(0, 18)} ...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
