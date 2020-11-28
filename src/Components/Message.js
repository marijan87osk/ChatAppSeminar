import { Component } from "react";
import React from "react";
import "./Messages.css";

class Message extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className="Messages-list">
        {messages.map((m) => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const { member, text } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";
    return (
      <li className={className}>
        <div className="Message-content">
          <div className="username" style={{ color: member.clientData.color }}>
            {member.clientData.username}{" "}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}

export default Message;
