import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import SendMessage from './SendMessage';

class ChatWindow extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        messages: PropTypes.array.isRequired,
        didSendMessage: PropTypes.func.isRequired
    };

    isDisabled = () => {
        return false;
    };

    handleMessage = (message) => {
        this.props.didSendMessage(this.props.username, message);
    }

    render() {
        return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{this.props.username}</div>
                <MessageList messages={this.props.messages} username={this.props.username} />
                <SendMessage didSendMessage={this.handleMessage} />
            </div>
        )
    }
}

export default ChatWindow